Project Plans:
Create a two-section layout including the dynamically updated resume and an input form.
Abstract resume sections into a single component.
Make the section component dynamic, mapping data from a json file to the resume.
Output the resume as a pdf using npm react-to-pdf.
Create multiple templates represented by css classes.
12/29/2022
Faced the challenge of making elements disappear if they had no content. For example, with no information entered for the heading portion, there was still a large white space above the next section. This was solved by using the shorthand, "{value && <element/>}". 