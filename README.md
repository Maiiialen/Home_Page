# Home Page

<img src="readme_files/mode_animation.gif" />
This React project aims to create a customizable startpage that can be used in web browsers. It serves as the landing page when users open a new tab in their browser and/or as start page. Home Page provides a visually appealing and functional interface that can be personalized to suit the user's preferences. It is created with scalability in mind , which enables startpage to be used on differend devices with various resolutions and shapes. Page has light and dark mode.

### Setup Start Page

1. In Settings of your browser go to **Start, home, and new tab**.
2. In **When Microsoft Edge starts** select **Open these pages:**
3. Click **Add new page** and paste absolute path to index.html` file with yout Home Page.

<img src="readme_files/start_page_settings.png">
<!-- <img src="readme_files/start_page_settings.png" width="800"> -->

### Setup New Tab
1. Install extenction [New Tab Redirect](https://chromewebstore.google.com/detail/icpgjfneehieebagbmdbhnlpiopdcmna)
<img src="readme_files/extensions.png">
1. In **Extension Options** paste url to `index.html` in **Redirect URL**. Remember to add `file:///` or copy link from previous stage.
<img src="readme_files/extension_options.png">
1. In **Manage extension** page change settings to allow access to file URLs.
<img src="readme_files/manage_extension.png">

## Configuration
In `config.js` you can change used images, links, and names of all buttons and lists as well as colors of all boxes and lists.
By changing `isTimeWithSeconds` variable to `true`, displayed clock will include seconds.
<img src="readme_files/clock.png" width="600">
By changing username, hours of time periods and greeting contents you can change displayed greeting.

### Used icons
<p style="display:flex; gap:20px; align-items: center;">
<img src="imgs/github-mark.webp" width="30"> github-mark.webp - https://github.com/logos</p>
From flaticon:
<p style="display:flex; gap:20; align-items: center;">
<img src="imgs/linkedin.webp" width="30"> linkedin.webp - riajulislam</p>
<p style="display:flex; gap:20px; align-items: center;">
<img src="imgs/home.webp" width="30"> home.webp - Freepik</p>
<p style="display:flex; gap:20px; align-items: center;">
<img src="imgs/notebook.png" width="30"> notebook.png - Freepik</p>
<p style="display:flex; gap:20px; align-items: center;">
<img src="imgs/brightness-and-contrast-dark.webp" width="30"> brightness-and-contrast-dark.webp - zafdesign</p>
<p style="display:flex; gap:20px; align-items: center;">
<img src="imgs/brightness-and-contrast-light.webp" width="30"> brightness-and-contrast-light.webp - brightness-and-contrast-dark.webp by zafdesign with contrast</p>
<p style="display:flex; gap:20px; align-items: center;">
<img src="imgs/keyboard.png" width="30"> keyboard.png - Sebastian Belalcazar</p>
<p style="display:flex; gap:20px; align-items: center;">
<img src="imgs/chess.png" width="30"> chess.png - bqlqn</p>
