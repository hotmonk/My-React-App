import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';



class App extends Component {
  state={
    persons:[
      {id:'id0',name:'Anubhav', age:19},
      {id:'id1',name:'Avinash', age:20},
      {id:'id2',name:'DevJ', age:18},
    ],
    showPerson:false
  }

nameChangedHandler=(event, id)=>{
  const personIndex=this.state.persons.findIndex(p=>{
    return p.id===id;
  }); 
  const person={
    ...this.state.persons[personIndex]
  };

  //const person=Object.assign({}, this.state.person[personIndex])   can also use this
  
  person.name= event.target.value; 

  const persons=[...this.state.persons];
  persons[personIndex]=person;

  this.setState( {persons:  persons});

}


  deletePersonHandler=(personIndex)=>{
    console.log("deleted"+personIndex);
    // const persons=this.state.persons;
    // cons persons=this.state.persons.slice();    //you cann use this
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

togglePersonHandler=()=>{
  const doesShow=this.state.showPerson;
  this.setState({showPerson: !doesShow});
}
  render() { 

    let personsexist=null;
    let btnClass='';

    if(this.state.showPerson){
      personsexist=(
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          })}
        </div>
      );
      btnClass=styles.red; 
    }

    const classes=[];
    if(this.state.persons.length<=2){
      classes.push(styles.red);    //classs=['red']
    }
    if(this.state.persons.length<=1){
      classes.push(styles.bold);   //classes=['red','bold']
    }

    return (        
      <div className={styles.App }>                 
        <h1>Helllo world</h1>  
        <p className={classes.join(' ')}>More the Merrier</p>  
        <button className={btnClass}  onClick={this.togglePersonHandler}>Switch Name</button>
  
        {personsexist}
      </div>     
    );
  }
}

export default App;