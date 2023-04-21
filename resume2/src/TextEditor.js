import React, { useCallback, useRef, useState, useEffect } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"



const TOOLBAR_OPTIONS = [
  [{ header: [1,2,3,4,5,6,false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"]
]




export default function TextEditor(props) {
    const [quill, setQuill] = useState() //State variable for Quill, used for 
    //retrieving and updating text and respective format
    //Initialize template state
    //Todo: Look into the need for copying the old quill object
    //Updates format for each character in quill text area when template changes
    useEffect(() => {
      const newFormat = props.template[0].format //new list of format objects for
      // each character in quill text
      if (quill !== undefined){
        const text = quill.getText() // Only used for range of format
        for (let c=0; c < Math.min(text.length, newFormat.length); c++){ //For each
          //Character in quill text
          quill.removeFormat(c, 1) //Remove the former format(s) at current character
          
          for (let attribute=0; attribute<Object.keys(newFormat[c]).length; attribute++){ //For each
            // attribute in format object of current character
            const newKey = Object.keys(newFormat[c])[attribute] //key of current format object
            const newValue = Object.values(newFormat[c])[attribute] //value of current format object
            console.log(newKey)
            quill.formatText(c, 1, newKey, newValue) //Add the new format to current character
          }
        }
      }

    }, props.template)
    

    function printFormat(){
      if(quill !== undefined){
        for(let i = 0; i < quill.getText().length; i ++){
          console.log(quill.getFormat(i))
        }
      }
    }


    function getPageFormat(){
      const text = quill.getText()
      for (let i=0; i < text.length; i++){
        console.log(quill.getFormat(i))
      }
      
    }


    //Render text editor on page startup
    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return wrapper.innterHTML = ''//Ensures 
        //wrapper is defined before use in container
        const editor = document.createElement("div") //Create div for editor
        wrapper.append(editor) //Add editor div to wrapper
        const q = new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } }) //Editor component
        setQuill(q)
    }, [])
  return (
    //Container element for text editor
    <div className="container" ref={wrapperRef}>
      TextEditor
      <button onClick={printFormat}>Save Text</button>
    </div>
  )
}
