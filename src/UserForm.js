import React, {Component} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './style.css';

class UserForm extends Component{
    constructor(props) {
        super(props);
        this.state = {username: ""};
    }

    render() {
        return(
            <Formik
                initialValues={{ username: '', password: ''}}
                onSubmit={(values) => {
                    this.setState({username: this.state.username, password: this.state.password});
                }}

                render = {props => (
                    <form onSubmit={props.handleSubmit}>
                        <label>Username: </label>
                        <input name="username" type="text" onChange={props.handleChange}
                               onBlur={props.handleBlur}
                               value={props.values.username}
                               className={
                                   props.errors.username && props.touched.username
                                       ? "text-input error"
                                       : "text-input"} />

                                       {props.errors.username && props.touched.username ? (<div className="input-feedback">{props.errors.username}</div>): null}
                                       <br/><br/>

                        <label>Password: </label>
                        <input name="password" type="text" onChange={props.handleChange}
                               onBlur={props.handleBlur}
                               value={props.values.password}
                               className={props.errors.password && props.touched.password ? "text-input error" : "text-input"} />
                               {props.errors.password && props.touched.password ? (<div className="input-feedback">{props.errors.password}</div>): null}
                               <br/><br/>
                        <input type="submit" value="Login" />

                    </form>
                )}

                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(5, 'To Short!')
                        .max(50, 'To Long!')
                        .required('Required'),
                    password: Yup.string()
                        .min(3, 'To Short!')
                        .max(50, 'To Long!')
                        .required('Required')
                })}

            />

        );
    }


}

export default UserForm;