Features:
Highly modular React components allow user freedom with flexible formatting. 
Interactive resume view with element selection popups allows dynamic css attribute styling using React state.
Enhanced UX with professionally-styled accordions, inputs, and responsive layout.


Project Notes:
I wanted to provide user-accessibility to css styling for resumes.
Create a two-section layout including the dynamically updated resume and an input form.
Abstract resume sections into a single component.
Make the section component dynamic, mapping data from a json file to the resume.
Output the resume as a pdf using npm react-to-pdf.
Create multiple templates represented by css classes.
12/29/2022
Faced the challenge of making elements disappear if they had no content. For example, with no information entered for the heading portion, there was still a large white space above the next section. This was solved by using the shorthand, "{value && <element/>}". 
Another challenge is enabling versatility of the resume. This is inhibited by not using dynamically-added elements, such as data fields and custom sections. However, I currrently feel that it is reasonable to pre-define the section types. I've included a checkbox, allowing the user to exclude certain sections. In order to allow for free creation of data fields, an icon selection feature will need to be implemented, and the app may become more similar to a document generator, such as LaTex.
Current Challenge: To account for multiple elements within a section, a function to add a data object to the list of that section must be implemented.
12/30/2022
Experienced a bug while implementing deletion of array elements within state. Because there was JSX code referencing elements by index, the indices needed to be decremented before the state was changed. A small mistake of using variable assignment by reference caused the original array to be mutated. The bug was fixed by simply copying the array using the map function.
The current challenge being addressed is implementing a modular 'section' JSX object. One obstacle with this is that the fields of different sections have different names.
Implementing dynamic bullet points became a challenge, because I wanted to reuse existing functions. Deep nesting of attributes required dilligent debugging.
1/4/2023
Next to add will be more format properties such as margin, background, and font. Templates should be stored as 'formatState.js' elements and selected by the user. I am still unsure if sections and fields to be made customizable. Logos could then be selected. Displaying the form on top of the resume view will is desired, but unnecessary and may be too challenging.
A challenge was deciding between a free or a guided user experience. More freedom provides the benefit of allowing more modularization of components. With this, the different resume sections can be stored in an array, so that they can be customized and rearranged. Furthermore, the same can be done with the form fields within each section.
The ability for the user to select elements in order to change their css attributes required the css style attribute for the resume to be stored inside of a React state. The implementation of this feature was done using a function assigned to the mouseOver event, which displays a popup containing a subarray of the style state corresponding to the selected element's attributes. To prevent errors, the style values are provided using a select dropdown, and the selection value corresponds to the respective state property.
It was challenging to trigger a mouseOver event while the user hovers over the resume's margins. An additional element needed to be created to cover the padding of the resume view, using clip-path. The dimensions of the clip-path resize according to the margin size variable in the React state, and the user can access formatting options such as background color, font, margin size, and the number of columns when they hover over the margins.
The next goal is to create a .js file that maintains the formData's state, in case the browser refreshed. Also, templates need to be made for the user to select from, whereby more guidance is provided while still allowing freedom to edit any element.
2/19/23
