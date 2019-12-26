import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'Anubhav', age:19},
      {name:'Avinash', age:20},
      {name:'DevJ', age:18},
    ]
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
    // console.log('was Clicked') 
    // DONT DO THIS this.state.persons[0].name="Anubhav Mittal";
    this.setState({
      persons:[
        {name:newName, age:19},
        {name:'Avinash', age: 20},
        {},
      ]
    })                       //to have changes in state property
  }
// HOOKS change value

  render() {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '10px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (                                //this is jsx not html so class word cannot be used
      <div className="App">                 
        <h1>Helllo world</h1>  
        <p>does this works?Should be a paragrapgh</p>  
        <button style={style} onClick={()=>this.switchNameHandler("Anubhav with arraw func")}>Switch Name</button>
        {/* we can also activate a function like we did here, but this is considered to be inefficient               */}
        {/****IMP**** dont use paranthesis on switchNameHandler bcs otherwise it will activate it */}
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
      // <h1>can be added?</h1>             cant be done bcs oly one element in app
    );

    //return React.createElement('div',null,'h1','Hiw adiwns');    wont work this way
    //return React.createElement('div',null,React.createElement('h1',{className:'App'},'This should be in bigger size'))
    // this will work but it willl be cumbersome to do so that is why we use above class name thingy
  }
}

export default App;
