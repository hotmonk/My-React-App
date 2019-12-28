import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'Anubhav', age:19},
      {name:'Avinash', age:20},
      {name:'DevJ', age:18},
    ],
    showPerson:false
  }

ageChangedHandler=(event=>{
  this.setState({
    persons:[
      {name:"Anubhav", age:19},
      {name:'Avinash', age: event.target.value},
      {},
    ]
  }) 
})

  switchNameHandler=(newName)=>{
    this.setState({
      persons:[
        {name:newName, age:19},
        {name:'Avinash', age: 20},
        {},
      ]
    })                       //to have changes in state property
  }
// HOOKS change value

togglePersonHandler=()=>{
  const doesShow=this.state.showPerson;
  this.setState({showPerson: !doesShow});
}
  render() {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '10px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let personsexist=null;

    if(this.state.showPerson){
      personsexist=(
        <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>                          
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"Tatya Vichu")}                     // to pass the variable we can use bind or we an use what we did above with button onclick
          changed={this.ageChangedHandler}>show me da way</Person> 
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>  
        </div>
      );
    }


    return (                                //this is jsx not html so class word cannot be used
      <div className="App">                 
        <h1>Helllo world</h1>  
        <p>does this works?Should be a paragrapgh</p>  
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
  
        {personsexist}
      </div>
    );
  }
}

export default App;
