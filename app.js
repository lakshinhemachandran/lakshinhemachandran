

function updateLanyardImage() {
    document.getElementById("lanyard-img").src = `https://lanyard.cnrad.dev/api/1333091618055655448?${Date.now()}`;
}

// Update the image every second
setInterval(updateLanyardImage, 1000);
require('dotenv').config();

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UC0K20jN4TETlWSWgdBJXnfg'

async function checkNewUpload() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=1`);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const latestVideo = data.items[0];
            const videoId = latestVideo.id.videoId;

            // Get details including views and likes
            const statsResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoId}&part=statistics,snippet`);
            const statsData = await statsResponse.json();

            if (statsData.items && statsData.items.length > 0) {
                const videoStats = statsData.items[0].statistics;
                const videoDetails = statsData.items[0].snippet;

                // Get stored notification data
                const lastNotification = JSON.parse(localStorage.getItem('lastVideoNotification') || '{}');

                // Check if this is a new video or if the user hasn't dismissed the current one
                if (videoId !== lastNotification.videoId || (videoId === lastNotification.videoId && !lastNotification.dismissed)) {
                    showYoutubeNotification({
                        id: videoId,
                        title: videoDetails.title,
                        description: videoDetails.description,
                        thumbnail: videoDetails.thumbnails.high.url,
                        views: videoStats.viewCount,
                        likes: videoStats.likeCount
                    });
                }
            }
        }
    } catch (error) {
        console.error('Error checking for new uploads:', error);
    }
}

function showYoutubeNotification(video) {
    const modal = document.getElementById('youtubeModal');
    const thumbnail = document.getElementById('videoThumbnail');
    const title = document.getElementById('videoTitle');
    const views = document.getElementById('videoViews');
    const likes = document.getElementById('videoLikes');
    const description = document.getElementById('videoDescription');
    const watchButton = document.getElementById('watchNowButton');

    thumbnail.src = video.thumbnail;
    title.textContent = video.title;
    views.textContent = `${parseInt(video.views).toLocaleString()} views`;
    likes.textContent = `${parseInt(video.likes).toLocaleString()} likes`;
    description.textContent = video.description;

    watchButton.onclick = () => {
        window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
        dismissYoutubeModal(video.id, true); // true indicates user watched the video
    };

    modal.style.display = 'block';

    // Store current video info without dismissed flag
    localStorage.setItem('lastVideoNotification', JSON.stringify({
        videoId: video.id,
        dismissed: false,
        timestamp: new Date().toISOString()
    }));
}

function dismissYoutubeModal(videoId, watched = false) {
    const modal = document.getElementById('youtubeModal');
    modal.style.display = 'none';

    // Update storage to indicate this video was dismissed
    const lastNotification = JSON.parse(localStorage.getItem('lastVideoNotification') || '{}');
    localStorage.setItem('lastVideoNotification', JSON.stringify({
        ...lastNotification,
        dismissed: true,
        watched: watched,
        dismissedAt: new Date().toISOString()
    }));
}

// Check for new uploads when the page loads
window.addEventListener('load', checkNewUpload);