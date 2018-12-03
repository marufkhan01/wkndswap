import React, {Component} from 'react'
import './login.css'

const intialstate = {
    username:'',
    password:'',
    error:false
}

class Login extends Component {
    constructor(){
        super()
        this.myForm = React.createRef()
    }
    
    state={
        ...intialstate
    }

    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault()

        if(this.state.username && this.state.password ){
            this.setState({error:false})
        }else{
            this.setState({error:true})
        }
        console.log(this.state)

        // clean text field
        this.myForm.current.reset()
        this.setState({
            ...intialstate
        })
    }
      
        render() {
            const errorMessage = this.state.error ? <p>Enter Correct Username and password</p>:''


        return(
            <div className="parent">
                <h2>Sign In</h2>
                <div className="login-div" >
                <form className="login-form" ref={this.myForm} onSubmit={this.onSubmit}>
                    {errorMessage}
                <div className="login-header">
                <img className="login-logo" alt="" src=""/>
                </div>
                <div className={"form-group"}>
                    {/* <level htmlFor="username"></level> */}
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="username"
                        onChange={this.onChange}
                        value={this.state.username}/>
                </div>

                <div className={"form-group"}>
                    {/* <level htmlFor="password"></level> */}
                    <input
                        type="text"
                        className="form-control"
                        name="password"
                        placeholder="password"
                        onChange={this.onChange}
                        value={this.state.password}/>
                </div>
                    <input 
                    style = {{ marginBottom: "20px"}}
                    type="submit" 
                    className="btn btn-primary"
                    value="Login"/>

                </form>
                </div>
                <p className="sub-text">Not a member? <a href="">Sign up here.</a></p>
            </div>
            )
    }
}
    
export default Login