import React from "react";
import { useState, useEffect } from "react";
// import { createClient } from '@supabase/supabase-js'


export default function Q1() {
      
    // SUPABASE DATABASE STUFF START

    // const supabaseUrl = 'https://bmnoqqeetsevniwwexak.supabase.co'
    // const supabaseKey = process.env.SUPABASE_KEY
    // const supabase = createClient(supabaseUrl, supabaseKey)

    // SUPABASE DATABASE STUFF END

    const [q1Input, setQ1Input] = useState(localStorage.getItem("q1Input"));
    useEffect(() => {
        localStorage.setItem('q1Input', q1Input);
      }, [q1Input]);


      useEffect(() => {
        const q1Input = localStorage.getItem('q1Input');
        if (q1Input) {
         setQ1Input(q1Input);
        }
      });

      const isBrowser = typeof window !== "undefined";
      if (!isBrowser) return;

      

      const insertq1Input = () => {
        return q1Input;
      }


    return ( 
        <div className="component-border notepad card">
            
            <h2>Q1 Goals</h2>
            <textarea 
              id="notepad" 
              name="notepad" 
              value={q1Input} 
              rows="12" 
              cols="20"
              onChange={(e) => setQ1Input(e.target.value)}
              placeholder={(q1Input) ? insertq1Input() : "Type Q1 Goals here..."}>
              
            </textarea>
        </div>
     );
}


