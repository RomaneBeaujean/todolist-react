import React from 'react';
import Todo from './todo';
import './todolist.css';

class Todolist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            todos: [
                {id: 1, 
                title: "Apprendre React",
                complete: true},
                {id: 2, 
                title: "Apprendre Redux",
                complete: false},
                {id: 3, 
                title: "Chercher du travail",
                complete: false},
            ]
        };
    }
    handleChange = (event) => {
        this.setState({input: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let allToDo = this.state.todos
        let newTodo = {
                    id: this.state.todos.length + 1,
                    title: this.state.input,
                    complete: false
                };
        let newTodoTabb = [...allToDo, newTodo]
        this.setState({
            todos : newTodoTabb,
            input: ''
        })    
    }

    updateComplete = (todo) => {
        let allToDo = this.state.todos;
        let index = allToDo.indexOf(todo);
        todo.complete = !todo.complete;
        allToDo[index] = todo;
        this.setState({
           todos: allToDo
        });
    }

    deleteToDo = (todo) => {
        let allToDo = this.state.todos;
        let index = allToDo.indexOf(todo);
        allToDo.splice(index,1);
        this.setState({
            todos: allToDo
        })
    }

    render() {
        return (
        <div className="todolist-main">    
            <div className="form">
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <input onChange={this.handleChange} value={this.state.input} type="text" placeholder="Nouvelle tâche"/>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
            
            <div> 
                <ul className="todos-list">
                    {this.state.todos.map((todo) => {
                        return <Todo key={todo.title} todo={todo} onComplete={this.updateComplete} onDelete={this.deleteToDo}/>
                    })}
                </ul>
            </div>
        </div>
        )
    }
}

export default Todolist;