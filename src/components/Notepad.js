import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";


export default function Notepad() {
      
      const [notepadInput, setNotepadInput] = useState(localStorage.getItem("notepadInput"));

      useEffect(() => {
        localStorage.setItem('notepadInput', notepadInput);
      }, [notepadInput]);


      useEffect(() => {
        const notepadInput = localStorage.getItem('notepadInput');
        if (notepadInput) {
         setNotepadInput(notepadInput);
        }
      });

      // -----------------------------

      // const saveText = (e) => {
      //   e.preventDefault();
      //   console.log("Save was clicked, notepad value is: " +notepadInput);
      //   localStorage.setItem("notepadInput", notepadInput);
      // }

      const insertNotepadInput = () => {
        return notepadInput;
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
              onChange={(e) => setNotepadInput(e.target.value)}
              placeholder={(notepadInput) ? insertNotepadInput() : "Type Todo here..."}>
              
            </textarea>
              
        </div>
     );
}


