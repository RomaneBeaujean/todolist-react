import React,{Component} from 'react'

class Todo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let todo = this.props.todo
        return (
        <li className="todo" key={todo.id}>
            {todo.title} {todo.complete ?<span className="imgClick" onClick={() => this.props.onComplete(todo)} role="img">✅</span> : <span className="imgClick" role="img" onClick={() => this.props.onComplete(todo)}>❌</span>} <span className="imgClick" onClick={() => this.props.onDelete(todo)}>🗑</span>
        </li>
        )
    }
}

export default Todo