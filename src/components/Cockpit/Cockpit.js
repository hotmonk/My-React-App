import React from 'react';
import styles from './Cockpit.module.css';

export default function Cockpit(props) {
    let btnClass='';
    if(props.showPersons){
        btnClass=styles.red;
    }
    const classes=[];
    if(props.persons.length<=2){
      classes.push(styles.red);    //classs=['red']
    }
    if(props.persons.length<=1){
      classes.push(styles.bold);   //classes=['red','bold']
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>  
            <p className={classes.join(' ')}>More the Merrier</p>  
            <button className={btnClass}  onClick={props.clicked}>Switch Name</button>
  
            
        </div>
    );
}
