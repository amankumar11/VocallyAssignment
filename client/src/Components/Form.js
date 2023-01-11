import React, {useState} from 'react'
import axios from "axios"
import '../styles/Landing.css';
import { useHistory } from "react-router-dom"

const Form = () => {

    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    const handleInputs = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submit = () => {
        const { name, email } = user
        if( name && email ){
            axios.post("http://localhost:9002/service", user)
            .then( res => {
                alert(res.data.message)
                // history.push("/")
            })
        } else {
            alert("invalid input")
        }
        
    }

  return (
    <div className='form-section'>
        <form>
            <div>
                {/* <label htmlFor='name'>Name</label> */}
                <input className='form-input' type="text" name="name" id="name" placeholder="Enter your Name" value={user.name} onChange={handleInputs}></input>
            </div>
            <div>
                {/* <label htmlFor='email'>Email</label> */}
                <input className='form-input' type="text" name="email" id="email" placeholder="Enter your Email" value={user.email} onChange={handleInputs}></input>
            </div>
            <div className='submit-btn' onClick={submit}>Submit</div>
        </form>
    </div>
  )
}

export default Form