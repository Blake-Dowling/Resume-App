import React from "react"
const colors = ["black", "white", "lightgrey", "deepskyblue", "gold", "grey", "blue", "red", "yellow"]
const fontSizes = [".2em", ".4em", ".6em", ".8em", "1em", "1.2em", "1.4em", "1.6em"] 
const fonts = ["Times New Roman", "Roboto", "Khula", "Rubik", "Cormorant Garamond", "Arial", "Cambria", "Calibri", "Helvetica", "Courier New", "Geneva", "Georgia", "Palatino", "Lucida Grande", "Trebuchet MS"]
export default [{
    formatId: 0,
    formatValue: 1.0,
    formatName: "margins",
    formatOptions: [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0]            
},
{
    formatId: 1,
    formatValue: "1em",
    formatName: "title 1 size",
    formatOptions: [...fontSizes]
},
{
    formatId: 2,
    formatValue: "black",
    formatName: "title 1 color",
    formatOptions: [...colors]          
},
{
    formatId: 3,
    formatValue: ".9em",
    formatName: "title 2 size",
    formatOptions: [...fontSizes]            
},
{
    formatId: 4,
    formatValue: "black",
    formatName: "title 2 color",
    formatOptions: [...colors]              
},
{
    formatId: 5,
    formatValue: "1.5em",
    formatName: "heading size",
    formatOptions: [...fontSizes]           
},
{
    formatId: 6,
    formatValue: "black",
    formatName: "heading color",
    formatOptions: [...colors]             
},
{
    formatId: 7,
    formatValue: "flex",
    formatName: "section line",
    formatOptions: ["flex", "none"]            
},
{
    formatId: 8,
    formatValue: "black",
    formatName: "section line color",
    formatOptions: [...colors]              
},
{
    formatId: 9,
    formatValue: "flex",
    formatName: "sub-section line",
    formatOptions: ["flex", "none"]            
},
{
    formatId: 10,
    formatValue: "black",
    formatName: "sub-section line color",
    formatOptions: [...colors]              
},
{
    formatId: 11,
    formatValue: ".6em",
    formatName: "info font size",
    formatOptions: [...fontSizes]          
},
{
    formatId: 12,
    formatValue: "black",
    formatName: "info text color",
    formatOptions: [...colors]              
},
{
    formatId: 13,
    formatValue: ".8em",
    formatName: "point size",
    formatOptions: [...fontSizes]           
},
{
    formatId: 14,
    formatValue: ".6em",
    formatName: "point font size",
    formatOptions: [...fontSizes]           
},
{
    formatId: 15,
    formatValue: "black",
    formatName: "point text color",
    formatOptions: [...colors]              
},
{
    formatId: 16,
    formatValue: ".6em",
    formatName: "section info size",
    formatOptions: [...fontSizes]           
},
{
    formatId: 17,
    formatValue: "black",
    formatName: "section info color",
    formatOptions: [...colors]          
},
{
    formatId: 18,
    formatValue: 600,
    formatName: "width",
    formatOptions: [600]          
},
{
    formatId: 19,
    formatValue: "white",
    formatName: "background",
    formatOptions: [...colors]          
},
{
    formatId: 20,
    formatValue: "Times New Roman",
    formatName: "font",
    formatOptions: [...fonts]          
},
{
    formatId: 21,
    formatValue: "1",
    formatName: "columns",
    formatOptions: ["1", "2", "3", "4"]          
}
]