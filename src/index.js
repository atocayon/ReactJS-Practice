import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import ToDoList from './ToDoList';
import UserForms from './UserForm';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {result: "", val1: "", val2: ""}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        const sum = this.state.val1 + this.state.val2;
        this.setState({result: sum});
    }

    render(){
        return (
            <div>
                <form className="Card" onSubmit={this.handleSubmit}>
                    <label><b>Enter first number:</b></label>
                    <input className="Input" type="text" value={this.state.val1} onChange={evt => this.setState({val1: Number(evt.target.value) })} /><br/><br/>
                    <label><b>Enter second number:</b></label>
                    <input className="Input" type="text" value={this.state.val2} onChange={evt => this.setState({val2: Number(evt.target.value) })}  /><br/><br/>
                    <input className="Button" type="submit" value="Add"/>
                    <p>Result: {this.state.result}</p>
                </form>
                <br/>

                    <div className="Card">
                        <ToDoList />
                    </div>
                <br/>
                <div className="Card">
                    <UserForms />

                </div>

            </div>

        );

    }
}

ReactDOM.render(
    <Add />,
    document.getElementById('root')
);

export default Add;