import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import sendData from '../WebService/webservice';


function Form() {
  const [msg, setMsg] = useState('');
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);

  const saveUser = async (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const mobile = mobileRef.current.value;
    const email = emailRef.current.value;
    

    if (!name || !age || !mobile || !email) {
      setMsg('Please fill all details');
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      alert('Mobile number must be 10 digits');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Enter a valid email address');
      return;
    }

    const obj = {
        n:name,
        m:mobile,
        a:age,
        e:email,
    }

       
    try {
               
        const response = sendData("http://localhost:4000/api/save",{name,mobile,age,email});     
        alert('User saved successfully');
        console.log(response.data);
        
        // Clear form fields
        nameRef.current.value = '';
        ageRef.current.value = '';
        mobileRef.current.value = '';
        emailRef.current.value = '';
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center text-danger">Register Here!</h1>
        <form onSubmit={saveUser}>
          <div className="form-group">
            <label>Enter Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" ref={nameRef} />
          </div>
          
          <div className="form-group">
            <label>Enter Contact</label>
            <input type="number" className="form-control" placeholder="Enter Contact" ref={mobileRef} />
          </div>
          <div className="form-group">
            <label>Enter Age</label>
            <input type="number" className="form-control" placeholder="Enter Age" ref={ageRef} />
          </div>
          <div className="form-group">
            <label>Enter Email</label>
            <input type="email" className="form-control" placeholder="Enter Email" ref={emailRef} />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-success form-control" value="Save" />
          </div>
        </form>
        <h1 className="text-danger text-center">{msg}</h1>
      </div>
    </>
  );
}

export default Form;
