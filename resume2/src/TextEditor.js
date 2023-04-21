import React, { useCallback, useRef } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"

export default function TextEditor() {
    
    
    //Render text editor on page startup
    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return wrapper.innterHTML = ''//Ensures 
        //wrapper is defined before use in container
        const editor = document.createElement("div") //Create div for editor
        wrapper.append(editor) //Add editor div to wrapper
        new Quill(editor, { theme: "snow" }) //Editor component
    }, [])
  return (
    //Container element for text editor
    <div className="container" ref={wrapperRef}>TextEditor</div>
  )
}
