import React,{Component} from 'react'


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
            <div style = {{maxWidth:"10%", margin:"3rem auto"}}>
            <form ref={this.myForm} onSubmit={this.onSubmit}>
                {errorMessage}
            <div className={"form-group"}>
                <level htmlFor="username">Username</level>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    value={this.state.username}/>
            </div>

            <div className={"form-group"}>
                <level htmlFor="password">Password</level>
                <input
                    type="text"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}/>
            </div>
                <input 
                type="submit" 
                className="btn btn-primary"
                value="Login"/>

            </form>
            </div>
            )
    }
}
    
export default Login