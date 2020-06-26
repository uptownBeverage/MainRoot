import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { deviceType, setPageTitle } from '../utils';

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

const FormSelect = styled.select`
background-color: rgba(255,255,255,0.9);
width: 100%;
padding: 5px;
border: 1px solid #f2f2f2;
border-radius: 2px;
height: 3rem;
text-transform: none;
font-size: 100%;
line-height: 1.18;
margin: 0;
`;

const FormSelectOption = styled.option`
font-weight: normal;
display: block;
white-space: pre;
min-height: 1.4em;
`;

const FieldContainer = styled.div`
width: 100%;
height: 100%;
display: block;
padding-bottom: 2.5vh;
`;

const ButtonGroup = styled.div`
display: flex:
`;
const ButtonInnerGroup = styled.div`
flex-direction: row;
`;

const maxLength = (value) => {
  if (!value) {
    return value;
  }
  return value.slice(0, 12);
}

const validate = (values) => {
  const errors = {}
 const { first_name, last_name, user_name, email, phone, password, confirmpassword} = values;

  
  if (!first_name) {
    errors.first_name = 'First name is required';
  } else if (!/^[a-zA-Z\- ',\s]+$/i.test(first_name.trim())) {
    errors.first_name = 'Please enter a valid first name';
  }

  if (!last_name) {
    errors.last_name = 'Last name is required';
  } else if (!/^[a-zA-Z\- ',\s]+$/i.test(last_name.trim())) {
    errors.last_name = 'Please enter a valid last name';
  }

  if (!email) {
    errors.email = 'Email address is required';
  } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email.trim())) {
    errors.email = 'Please enter a valid email address';
  }
  if (!phone) {
    errors.phone = 'Phone number is required';
  } // else if (!/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9])).?[2-9]([02-9]\d|1[02-9]).?\d{4}$/i.test(phone.trim())) {
  //   errors.phone = 'Please enter a valid 10 digit phone number.';
  // }
  if (!user_name) {
    errors.user_name = 'User name is required';
  } else if (!/^[a-zA-Z\- ',\s]+$/i.test(user_name.trim())) {
    errors.user_name = 'Please enter a valid user name';
  }
  
  if (!password) {
    errors.password = 'Password is required';
  } 
  // else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/i.test(password.trim())){
  //   errors.password = 'Please enter a valid password.';
  // }

  if (!confirmpassword) {
    errors.confirmpassword = 'Confirm Password is required';
  }
  
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <FieldContainer>
    <FormLabels>{label}</FormLabels>
    <FormInput {...input} type={type} />
    {touched && error && <FormError>{error}</FormError>}
  </FieldContainer>
)

const renderDropdown = ({ input, label, meta: { touched, error } }) => (
  <FieldContainer>
    <FormLabels>{label}</FormLabels>
    <FormSelect style={{display: 'block'}} {...input}>
      <FormSelectOption value="">Select Role</FormSelectOption>
      {colors.map(val => (
        <FormSelectOption value={val} key={val}>
          {val}
        </FormSelectOption>
      ))}
    </FormSelect>
    {touched && error && <FormError>{error}</FormError>}
  </FieldContainer>
)


const colors = ['Owner', 'Manager', 'Employee', 'Servant', 'Unwanted', 'Enemy'];

const RegisterUser = (props) => {
  //props.actions.showInfoNotification('hello');
  const { error, handleSubmit, pristine, reset, submitting } = props
  const columnSize = deviceType() === 'desktop' ? 6 : 12;
  const offset = deviceType() === 'desktop' ? 3 : 0;
  const handleFormSubmit = (values) =>{
    props.actions.registerUser(values, (response) => {
      // const userName = `${response.first_name} ${response.last_name}`;
      // sessionStorage.setItem('userName', userName);
      if(response && !response.errors && (response.existingUser || response.newUser)){
        props.history.push('/login')
      }
      /**
       * errors: null
        existingUser: false
        first_name: "Gagandeep"
        last_name: "Bawa"
        message: "User Gagandeep Bawa  has been created successfully with user name as sssssssss."
        newUser: true
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVmNGIyMGNjNmVhYzJkY2VjYmNhNGI1In0sImlhdCI6MTU5MzA5NDY2OCwiZXhwIjoxNTkzMTA0NjY4fQ.IlXeVkBotazzChkeawR-4f4qO3C-N8zP0HW_-GFMhSE"
        user_name: "sssssssss"
       */
    });
  }
  return (
    <CustomRow>
        
      <Col xs={12} style={{textAlign: 'left'}}>
        <Link to="/" className="btn-flat waves-effect">
          <i className="material-icons left">keyboard_backspace</i> Back to home
        </Link>
      </Col>
      <Col xs={12}>
          <h4><b>Register</b> below</h4>
          <p className="grey-text text-darken-1">Already have an account? <Link to="/login">Log in</Link></p>
          
      </Col>
      
      <Col xs={columnSize} xsOffset={offset} style={{ padding: '2vh' }}>
        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <RowNoMargin>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Field
                name="first_name"
                id="first_name"
                type="text"
                component={renderField}
                label="First name"
               
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Field
                name="last_name"
                id="last_name"
                type="text"
                component={renderField}
                label="Last name"
              />
            </Col>
          </RowNoMargin>
          <RowNoMargin>
            <Col xs={12} sm={8} md={8} lg={8}>
              <Field
                name="user_name"
                id="user_name"
                type="text"
                component={renderField}
                label="User name"
               
              />
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <div>
                <Field 
                  id="userRole" 
                  name="userRole" 
                  component={renderDropdown}
                  label="Role"
                />
            </div>
            </Col>
          </RowNoMargin>
          <RowNoMargin>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Field
                name="email"
                id="email"
                type="text"
                component={renderField}
                label="Email"
               
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <div>
                <Field 
                  id="phone" 
                  name="phone" 
                  component={renderField}
                  type="tel"
                  label="Phone"
                  pattern="[0-9]*"
                  mask="999.999.9999"
                  normalize={maxLength} 
                />
            </div>
            </Col>
          </RowNoMargin>
          <RowNoMargin>
            <Col xs={12} sm={6} md={6} lg={6}>
              <Field
                name="password"
                id="email"
                type="password"
                component={renderField}
                label="Password"
               
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <div>
                <Field 
                  id="confirmpassword" 
                  name="confirmpassword" 
                  type="password"
                  component={renderField}
                  label="Confirm Password"
                />
            </div>
            </Col>
          </RowNoMargin>
          {error && <strong>{error}</strong>}
          <ButtonGroup>
            <ButtonInnerGroup>
              <button 
                type="submit" 
                disabled={submitting}
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  marginRight: "1rem",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                Sign up
              </button>
              <button 
                type="button" 
                disabled={pristine || submitting} 
                onClick={reset}
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  lineHeight: '1.2rem'
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Clear Values
              </button>
            </ButtonInnerGroup>
          </ButtonGroup>
        </form>
      </Col>
    </CustomRow>

  )
}

// class RegisterUser extends Component {
//   constructor() {
//     super();
//     this.state = {
//       first_name: '',
//       last_name: '',
//       user_name: '',
//       password: '',
//       password2: '',
//       phone: '',
//       errors: {},
//       email: '',
//       confirmationMessage: null,
//       deviceType: deviceType()
//     };
//   }
//   updateDimensions = () => {
//     this.setState({
//       deviceType: deviceType()
//     })
//   }
//   componentDidMount() {
//     setPageTitle('Employee login');
//     this.updateDimensions();
//     window.addEventListener("resize", this.updateDimensions);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.updateDimensions);
//   }


export default reduxForm({
  form: 'registrationForm',
  enableReinitialize: true,
  validate
})(RegisterUser)


