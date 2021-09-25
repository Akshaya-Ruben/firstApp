import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {

state ={
    tags : [],

    counters: [
        {id : 1 , value : 0},
        {id : 2 , value : 0},
        {id : 3 , value : 0}
    ]
}

renderTags()
{
    if (this.state.tags.length === 0) return <p>there are no tags</p>

    return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
}


handleIncrement = counter => {
    console.log("handle increment called ",counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
      
         
}

handleDelete = (counterID) => {
    console.log('handle delete event called',counterID);
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({counters : counters})
   
}

    render() { 
        return <div>
            <h1>Welcome to my cart</h1>
            {this.state.tags.length === 0 && "Please add tags!"}
            {this.renderTags()}

        {this.state.counters.map(counter => ( <Counter key = {counter.id}
        onIncrement = {this.handleIncrement}
         onDelete = {this.handleDelete} counter = {counter}/>
         ) )}

        </div>;
    }
}
 
export default Counters;