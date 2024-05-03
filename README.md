# Home Page

<img src="readme_files/mode_animation.gif" />

This React project aims to create a customizable startpage that can be used in web browsers. It serves as the landing page when users open a new tab in their browser and/or as a start page. Home Page provides a visually appealing and functional interface that can be personalized to suit the user's preferences. It is created with scalability in mind, which enables startpage to be used on different devices with various resolutions and shapes. The page has light and dark modes.

---

### Setup Start Page

1. In Settings of your browser go to **Start, home, and new tab**.
2. In **When Microsoft Edge starts** select **Open these pages:**
3. Click **Add new page** and paste the absolute path to the `index.html` file with your Home Page.

<img src="readme_files/start_page_settings.png">

---

### Setup New Tab

1. Install extension [New Tab Redirect](https://chromewebstore.google.com/detail/icpgjfneehieebagbmdbhnlpiopdcmna)
   <img src="readme_files/extensions.png">

2. In **Extension Options** paste url to `index.html` in **Redirect URL**. Remember to add `file:///` or copy the link from the previous stage.
   <img src="readme_files/extension_options.png">

3. In the **Manage extension** page change settings to allow access to file URLs.
   <img src="readme_files/manage_extension.png">

---

## Configuration

In `config.js` you can change used images, links, and names of all buttons and lists as well as the colors of all boxes and lists.

By changing the `isTimeWithSeconds` variable to `true`, the displayed clock will include seconds.

<img src="readme_files/clock.png" width="600">

By changing the username, hours of periods, and greeting contents you can change the displayed greeting.

You can customize the page's title and image by editing the index.html file.

Additionally, the page can be rendered in either *scalability mode* or *desktop mode*, depending on which styles are uncommented in the `index.html` file.
- In *scalability mode*, the layout dynamically adjusts to fit different window resolutions, with components resizing and repositioning to optimize the viewing experience. This can be checked in dev tools by changing emulated device.
<img src="readme_files/emulated_devices.png">

- In *desktop mode*, the page is tailored for larger screens and landscape orientations, offering an ideal layout for desktop and widescreen displays. This mode ensures the best visual quality, providing a **perfect score** in terms of design and performance which can be confirmed in Lighthouse dev tool.
<img src="readme_files/perfect_score.png">

---

### Used font
Font used in project: [Kanit](https://fonts.google.com/specimen/Kanit)

### Used icons

|                             image                              | source                                                                                          |
| :------------------------------------------------------------: | :---------------------------------------------------------------------------------------------- |
|          <img src="imgs/github-mark.webp" width="30">          | github-mark.png - https://github.com/logos                                                      |
|           <img src="imgs/linkedin.webp" width="30">            | linkedin.png - riajulislam                                                                      |
|             <img src="imgs/home.webp" width="30">              | home.png - Freepik                                                                              |
|           <img src="imgs/notebook.webp" width="30">            | notebook.png - Freepik                                                                          |
| <img src="imgs/brightness-and-contrast-dark.webp" width="30">  | brightness-and-contrast-dark.png - zafdesign                                                    |
| <img src="imgs/brightness-and-contrast-light.webp" width="30"> | brightness-and-contrast-light.png - brightness-and-contrast-dark.png by zafdesign with contrast |
|           <img src="imgs/keyboard.webp" width="30">            | keyboard.png - Sebastian Belalcazar                                                             |
|             <img src="imgs/chess.webp" width="30">             | chess.png - bqlqn                                                                               |
