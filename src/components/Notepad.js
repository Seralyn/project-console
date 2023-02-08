import React from "react";
import Button from "./Button";
// import * as React from "react"

export default function Notepad() {

    //   save whatever text is currently inside textarea to localstorage
      const saveText = (e) => {
        // e.preventDefault();
        let notepadInput = document.getElementById("notepad").innerText;
        // statement below takes a key, value pair, which I have named notepadContents and notepadInput, respectively
        document.getElementById("notepad").innerHTML.localStorage.setItem("notepadContents",{notepadInput})
      }


    //   clear all notepad input text and also save to localstorage the new empty state
      const clearText = (e) => {
        // e.preventDefault();
        document.getElementById("notepad").innerHTML.localStorage.removeItem("notepadContents");
        
      }

    return ( 
        <div className="component-border notepad">
            <h2>Notepad Component</h2>
            <textarea id="notepad" name="notepad" rows="12" cols="40"></textarea>
            <div>
                <Button label="Save" id="Save" onClick={saveText} />
                <Button label= "Clear" id="Clear" onClick={clearText} />
            </div>    
        </div>
     );
}

