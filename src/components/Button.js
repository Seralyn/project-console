import React from "react";
// import PropTypes from "prop-types"

function Button( { label, backgroundColor = 'blue', size = 'md', onClick }) {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
        color: "white"
    }
    return ( 
    <button onClick={onClick} style={style}>
        {label}
    </button> 
    );
}

export default Button;