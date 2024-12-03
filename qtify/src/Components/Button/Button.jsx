import styles from "./Button.module.css";
import React from "react";

function Button({children}){

    return (
<div>
<button className={styles.button}>{children}</button>
</div>
    )
    
}

export default Button;