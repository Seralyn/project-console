import React from "react";
import { useState, useEffect } from "react";


export default function Q2() {
      
    const [q2Input, setQ2Input] = useState(localStorage.getItem("q2Input"));
    
    useEffect(() => {
        localStorage.setItem('q2Input', q2Input);
      }, [q2Input]);


    useEffect(() => {
      const q2Input = localStorage.getItem('q2Input');
      if (q2Input) {
        setQ2Input(q2Input);
      }
    });

      const isBrowser = typeof window !== "undefined";
      if (!isBrowser) return;

      

      const insertq2Input = () => {
        return q2Input;
      }


    return ( 
        <div className="component-border notepad card">
            
            <h2>Q2 Goals</h2>
            <textarea 
              id="notepad" 
              name="notepad" 
              value={q2Input} 
              rows="12" 
              cols="40"
              onChange={(e) => setQ2Input(e.target.value)}
              placeholder={(q2Input) ? insertq2Input() : "Type Q2 Goals here..."}>
              
            </textarea>
        </div>
     );
}


