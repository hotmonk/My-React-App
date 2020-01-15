import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



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
 

    if(this.state.showPerson){
      personsexist=<Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;

    }


    return (        
      <div className={styles.App }>                 
        <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPerson}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}   />
        {personsexist}
      </div>     
    );
  }
}

export default App;