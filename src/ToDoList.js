import React, {Component} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './style.css';

class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = {list: []};

    }

    render() {
        return (
            <Formik
                initialValues={{ value: ''}}
                onSubmit={(values) => {
                    const toDo = this.state.list.concat([values.value]);
                    this.setState({list: toDo});
                }}
                render = {props =>(
                    <form onSubmit={props.handleSubmit}>
                        <label>
                            <b>To Do:&nbsp;</b>
                        </label>
                        <input name="toDoInput" type="text" onChange={ (e) => {props.setFieldValue("value", e.target.value)}}
                               onBlur={props.handleBlur}
                               value={props.values.value}
                               className={props.errors.value && props.touched.value ? "text-input error" : "text-input"} />
                        <input type="submit" value="ADD" />
                        {props.errors.value && props.touched.value && <div className="input-feedback">{props.errors.value}</div>}
                        <p>
                            {this.state.list.map((s, index)=> <React.Fragment key={index}><input type="checkbox" />{s}<br/></React.Fragment>)}
                        </p>
                    </form>

                )}

                validationSchema={Yup.object()
                    .shape({value: Yup.string()
                            .min(2, 'To Short!')
                            .max(50, 'To Long!')
                            .required('Required'),
                })}
            />

        );
    }

}

export default ToDoList;