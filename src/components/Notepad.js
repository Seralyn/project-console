import React from "react";
import Button from "./Button";
import { useState, useEffect } from "react";
// import { useLocalStorage } from "../components/useLocalStorage";

export default function Notepad() {
      
      const [notepadInput, setNotepadInput] = useState( localStorage.getItem("a") | "Type something...");
      console.log("After useState initialized " + notepadInput)

      // -----------------------------
      
      const [items, setItems] = useState([]);

      useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);


      useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
         setItems(items);
        }
      }, []);

      // -----------------------------

      const saveText = (e) => {
        e.preventDefault();
        console.log("Save was clicked, notepad value is: " +JSON.stringify(notepadInput))
        localStorage.setItem("a", JSON.stringify(notepadInput))
      }


    return ( 
        <div className="component-border notepad">
            <h2>Notepad</h2>
            <textarea 
              id="notepad" 
              name="notepad" 
              value={notepadInput} 
              rows="12" 
              cols="40"
              onChange={(e) => setNotepadInput(e.target.value)}>

              {/* onChange={(e) => setNotepadInput(e.target.notepadInput)}>  */}
            </textarea>
            <div>
                <button label="Save" id="Save" onClick={saveText}>Save</button>
                {/* <Button label= "Clear" id="Clear" onClick={clearText} /> */}
            </div>    
        </div>
     );
}



    // //   save whatever text is currently inside textarea to localstorage
    //   const saveText = (e) => {
    //     e.preventDefault();
    //     // let notepadInput = document.getElementById("notepad").innerText;
    //     // statement below takes a key, value pair, which I have named notepadContents and notepadInput, respectively
    //     notepadInput.localStorage.setItem("notepadInput", JSON.stringify(notepadInput))
    //   }


    // //   clear all notepad input text and also save to localstorage the new empty state
    //   const clearText = (e) => {
    //     // e.preventDefault();
    //     document.getElementById("notepad").innerHTML.localStorage.removeItem("notepadContents");
        
    //   }