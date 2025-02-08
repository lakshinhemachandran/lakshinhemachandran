<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="/gallery_gen/quantum-dev-favicon.png">

  <title>QuantumDev</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #0047ab;
      color: white;
      margin: 0;
      padding: 0;
      text-align: center;
      line-height: 1.6;
      animation: fadeIn 2s ease-out;
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    .container {
      max-width: 900px;
      margin: 50px auto;
      padding: 30px;
      background-color: #ffffff;
      color: #333;
      border-radius: 15px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
      animation: slideUp 1s ease-out;
    }

    @keyframes slideUp {
      0% { transform: translateY(50px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    .profile {
      position: relative;
      margin-bottom: 40px;
      animation: fadeIn 1.5s ease-out;
    }

    .profile img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #0047ab;
      margin-top: -70px;
      transition: transform 0.3s ease;
    }

    .profile img:hover {
      transform: scale(1.1);
    }

    .profile h1 {
      font-size: 24px;
      margin: 10px 0;
      animation: slideUp 1.5s ease-out;
    }

    .job-description {
      font-size: 16px;
      font-weight: bold;
      color: #555;
      margin-bottom: 20px;
      animation: fadeIn 2s ease-out;
    }

    .intro {
      font-size: 16px;
      margin-bottom: 20px;
      color: #555;
      animation: fadeIn 2.5s ease-out;
    }

    .icons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      margin: 20px 0;
      animation: fadeIn 3s ease-out;
    }

    .icons a {
      display: inline-block;
      width: 50px;
      height: 50px;
      background-color: #f4f4f4;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s, transform 0.3s;
    }

    .icons a:hover {
      background-color: #005bb5;
      transform: scale(1.2);
    }

    .icons img {
      width: 24px;
      height: 24px;
    }

    hr {
      border: 2px solid #0073e6;
      margin: 40px 0;
      animation: fadeIn 4s ease-out;
    }

    .hire-button {
      background-color: #0047ab;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      width: 100%;
      margin-top: 20px;
      transition: background-color 0.3s, transform 0.3s;
    }

    .hire-button:hover {
      background-color: #00377d;
      transform: scale(1.05);
    }

    /* Modal Styles */
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      padding-top: 60px;
    }

    .modal-content {
      background-color: #333;
      margin: auto;
      padding: 20px;
      border-radius: 10px;
      width: 70%;
      max-width: 800px;
      color: #fff;
      animation: fadeIn 0.5s ease-out;
      overflow-y: auto;
      max-height: 80vh;
      text-align: left;
      text-align: justify;
    }

    /* Accept Button */
    #acceptButton {
      background-color: #0047ab;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      width: 100%;
      margin-top: 20px;
      transition: background-color 0.3s, transform 0.3s;
    }

    #acceptButton:hover {
      background-color: #00377d;
      transform: scale(1.05);
    }

    /* Form Styling (Inside Modal) */
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 20px;
    }

    input[type="text"], input[type="email"], textarea {
      width: 100%;
      padding: 12px;
      margin: 10px 0;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 16px;
      color: #333;
    }

    button[type="submit"] {
      background-color: #0047ab;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
      width: 100%;
    }

    button[type="submit"]:hover {
      background-color: #00377d;
    }

  </style>
</head>
<body>
  <div class="container">
    <!-- Profile Section -->
    <div class="profile">
      <img src="gallery_gen/quantum-dev-favicon.png" alt="Profile Picture">
      <h1>QuantumDev</h1>
      <div class="job-description">
        UI Dev
      </div>
      <div class="job-description">
        Owner & Main Developer @ LuckySAM Productions | Co-Owner, Lead HR, Lead Developer @ Waitrose Shopping | Former Developer @ Swirlys Cafe (deprecated) | Developer @ Pentagon Group | Owner @ Globe Hangout
      </div>
    </div>

    <!-- Introduction -->
    <div class="intro">
      Hi! I'm Lakshin, a teenage developer with 3+ years of experience in Roblox Studio.
      My online name is QuantumDev.
      I’m passionate about coding, designing, and creating innovative projects. 
      My goal is to become a Full Stack Developer and start my own company in the future! 
      If you're looking to hire me for my Roblox Studio skills, feel free to reach out through my Discord server linked below.
      <br><br>
      <i><b>"Don't Give Up On Life Or Life Will Give Up On You"</b></i>
      <p>- Lakshin</p>
    </div>

    <!-- Icons Section -->
    <div class="icons">
      <a href="https://outlook.live.com/mail/0/deeplink/compose/?mailtouri=mailto:lh140313@outlook.com" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/email-open.png" alt="Email">
      </a>
      <a href="https://github.com/lakshinhemachandran" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub">
      </a>
      <a href="https://discord.gg/ATk4wsJP42" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/discord-logo.png" alt="Discord">
      </a>
      <a href="https://youtube.com/@ItsQuantumDev_YT" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube">
      </a>
      <a href="https://www.roblox.com/users/3314294422/profile" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/roblox.png" alt="Roblox">
      </a>
    </div>
  </div>
</body>
</html>
