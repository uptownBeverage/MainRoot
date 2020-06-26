import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';



const CustomRow = styled(Row)`
height: 100%;
display:flex;
align-items:center;
text-align:center;
padding: 0;
margin: 0 !important;
width: 100%;
`;

const CustomCol = styled(Col)`
flex-grow: 0;
padding: 0;
height: 100vh;
&:first-child {
  
}
&:nth-child(2) {
  background: #fff;
}
`;

const ColGeneral = styled(Col)`
text-align: center;
padding: 0;
`;

const RowNoMargin = styled(Row)`
margin-bottom: 0 !important;
`;

const FormLabels = styled.div`
text-align:left;
font-size: .8rem;
color: #9e9e9e;
`;
const FormError = styled.div`
text-align:left;
font-size: .8rem;
color: #e51c23 !important;
`;

const FormInput = styled.input`
background-color: transparent;
border: none;
border-bottom: 1px solid #9e9e9e;
border-radius: 0;
outline: none;
height: 3rem;
width: 100%;
font-size: 16px;
margin: 0 0 0 0 !important;
padding: 0;
-webkit-box-shadow: none;
box-shadow: none;
-webkit-box-sizing: content-box;
box-sizing: content-box;
-webkit-transition: border .3s, -webkit-box-shadow .3s;
transition: border .3s, -webkit-box-shadow .3s;
transition: box-shadow .3s, border .3s;
transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;
`;

const FieldContainer = styled.div`
width: 100%;
height: 100%;
display: block;
padding-bottom: 2.5vh;
`;



function onSubmitForm(evt, formData) {
  evt.preventDefault();
  console.log("The status of formData", formData);
  // alert("Hi your phone number is: " + formData.phoneNumber);
}

export default function MyForm() {
  const { register, handleSubmit, errors } = useForm();
  console.log("SUBMIT ERRORS", errors);
  // const showDatePicker = watch("showDatePicker");
  return (
    <CustomRow>
      
      <Col xs={12} style={{textAlign: 'left'}}>
        <Link to="/" className="btn-flat waves-effect" >
          <i className="material-icons left">keyboard_backspace</i> Back to home
        </Link>
      </Col>
      <Col xs={12}>
        <h4>
          <b>Login</b> below
        </h4>
        <p className="grey-text text-darken-1">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Col>

      <Col xs={6} xsOffset={3} style={{ padding: '2vh' }}>
       
        {/*
           <p>  Your phone number is:
          <br /> {watch("phoneNumber")}
        </p>
          <form onSubmit={handleSubmit(onSubmitForm)}>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              ref={register({
                required: {
                  value: true,
                  message: "Phone number is required",
                },
                minLength: {
                  value: 12,
                  message: "Phone number should be minimum length of 12",
                },
              })}
            />
          </label>
          <br />
          <label>
            Show the Date picker:
            <input type="checkbox" ref={register} name="showDatePicker" />
          </label>
          <br />
          {showDatePicker && <input type="date" ref={register} name="dob" />}
          <br />
          <input type="submit" value="Submit" />
            </form>*/}

        <form noValidate onSubmit={handleSubmit(onSubmitForm)}>
            <div className="input-field col s12">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                ref={register({
                  required: {
                    value: true,
                    message: "User name is required",
                  },
                  minLength: {
                    value: 5,
                    message: "user name should be minimum length of 5",
                  },
                })}
              />
              <p className="grey-text text-darken-1">
                <Link to="/register">Log in with Email Address</Link>
              </p>
              <span className="red-text">
              {errors &&  Object.keys(errors).length && errors['username'].message ?  errors['username'].message : ''}
            </span>
            </div>
            <div className="input-field col s12">
              <input
                
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                ref={register({
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  minLength: {
                    value: 5,
                    message: "user name should be minimum length of 5",
                  },
                })}
              />
              <span className="red-text">
              {errors &&  Object.keys(errors).length && errors['email'].message ? errors['email'].message : ''}
            </span>
            </div>
            <div className="input-field col s12">
              <label htmlFor="password" style={{display:'none'}}>Password</label>
              <input
                name="password" 
                id="password"
                type="password"
                placeholder="Password"
                ref={register({
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 5,
                    message: "user name should be minimum length of 5",
                  },
                })}
                
              />
              
              <span className="red-text">
                {errors &&  Object.keys(errors).length && errors['password'].message ? errors['password'].message : ''}
              </span>
              <p className="grey-text text-darken-1" style={{textAlign: 'left', marginTop: '0.5vh'}}>
                <Link to="/register">Forgot password?</Link>
              </p>
            </div>
            <div className="col s12">
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "3.5rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Login
              </button>
            </div>
          </form>
      </Col>
    </CustomRow>
    
  );
}