import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";


export default function Notepad() {
      
    const [notepadInput, setNotepadInput] = useState(localStorage.getItem("notepadInput"));

    const handleTextarea = e => {
      const val = e.target.value;
      setNotepadInput(val);
      localStorage.setItem("notepadInput", val);
    }

    return ( 
        <div className="component-border notepad card">
            <h2>Notepad</h2>
            <textarea 
              id="notepad" 
              name="notepad" 
              value={notepadInput} 
              rows="12" 
              cols="40"
              onChange={handleTextarea}
              placeholder={notepadInput ? notepadInput : "Type Todo here..."}>
              
            </textarea>
              
        </div>
     );
}


