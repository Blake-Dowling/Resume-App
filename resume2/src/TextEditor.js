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
    //Updates quill text area when template changes
    useEffect(() => {
      const newFormat = props.template[0].format
      if (quill !== undefined){
        const text = quill.getText() // Only used for range of format
        for (let i=0; i < Math.min(text.length, newFormat.length); i++){
          const newKey = Object.keys(newFormat[i])[0]
          const newValue = Object.values(newFormat[i])[0]
          quill.formatText(i, 1, newKey, newValue)
        }
      }

    }, props.template)
    
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
      <button onClick={getPageFormat}>Save Text</button>
    </div>
  )
}
