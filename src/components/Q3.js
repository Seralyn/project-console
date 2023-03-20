import React from "react";
import { useState, useEffect } from "react";


export default function Q3() {
      
    const [q3Input, setQ3Input] = useState(localStorage.getItem("q3Input"));
    
    useEffect(() => {
        localStorage.setItem('q3Input', q3Input);
      }, [q3Input]);


    useEffect(() => {
      const q3Input = localStorage.getItem('q3Input');
      if (q3Input) {
        setQ3Input(q3Input);
      }
    });

      const isBrowser = typeof window !== "undefined";
      if (!isBrowser) return;

      

      const insertq3Input = () => {
        return q3Input;
      }


    return ( 
        <div className="component-border notepad card">
            
            <h2>Q3 Goals</h2>
            <textarea 
              id="notepad" 
              name="notepad" 
              value={q3Input} 
              rows="12" 
              cols="40"
              onChange={(e) => setQ3Input(e.target.value)}
              placeholder={(q3Input) ? insertq3Input() : "Type Q3 Goals here..."}>
              
            </textarea>
        </div>
     );
}


