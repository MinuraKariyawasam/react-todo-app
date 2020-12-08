import { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component{

    state = {
        todos: [

            {
                id: 1,
                title: 'HTML tutorials',
                completed: false
            },

            {
                id: 2,
                title: 'Java tutorials',
                completed: false
            },

            {
                id: 3,
                title: 'JS tutorials',
                completed: false
            }
        ]
    }
    render(){
        // console.log(this.state.todos);
    return ( 
       <div className = "App" >
        <Todos todos= {this.state.todos}/>
       </div>
    );
    }
}


export default App;