import React, { useState , useEffect} from 'react'
import TemplateDisplay from './TemplateDisplay'
import TextEditor from './TextEditor'

import template1 from "./template1.json"

export default function App() {
  const [template, setTemplate] = useState(template1)
  function changeTemplate(newTemplate){
    return setTemplate((oldTemplate) => {
      return (newTemplate)
    })
  }
  return(
    <div>
        App
        <TemplateDisplay changeTemplate={changeTemplate}/>
        <TextEditor template={template}/>
    </div>
  )
}
