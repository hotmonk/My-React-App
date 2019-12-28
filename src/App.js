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


  deletePersonHandler=(personIndex)=>{
    console.log("deleted"+personIndex);
    const persons=this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }
//   switchNameHandler=(newName)=>{
//     this.setState({
//       persons:[
//         {name:newName, age:19},
//         {name:'Avinash', age: 20},
//         {},
//       ]
//     })                       //to have changes in state property
//   }
// // HOOKS change value

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
          {this.state.persons.map((person, index)=>{
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}/>
          })}
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
