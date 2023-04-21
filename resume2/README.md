# Resume Generator

## Allows high quality resume styling with customizable templates.

This project is a front-end web application that allows users to generate a PDF resume. It allows the user to:

* Select a pre-styled resume template
* Enter thier resume information in a simple, organized manner
* View a live rendering of the current resume generation
* Click on the resume generation in order to select custom styling options for each component
* Save the generated resume as a PDF file

How to use this application:

* Go to https://blake-dowling.github.io/Resume-Generator/
* Select a template
* Fill out the user input form
* Customize your resume by interacting with the preview
* Click "Generate PDF"

Release Plan:

Sprint 1:
Text editor
Template card list using Swiper.js
Enabled users to click template cards to change the current template.
Changing of template now changes the formatting of the text area.
Todo: Figure out how to separate the text area into named input sections in order to maintain character indexes when changin templates.
Todo: Create button to save text and formatting into a local json file.


Sources:

Use of Quill text editor:
https://www.youtube.com/watch?v=iRaelG7v0OU
https://quilljs.com/docs/
Carosel for resume templates:
https://swiperjs.com/element
