Project Plans:
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