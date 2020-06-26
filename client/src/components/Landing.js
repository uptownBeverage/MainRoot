import React, { Component } from 'react';
//import axios from 'axios';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import logo from '../assets/images/logo4.png';
import { deviceType } from '../utils';
import { Link } from "react-router-dom";

// import LoginForm from './Login';
// import Register from './Register';
 
const CustomRow = styled(Row)`
height: 100vh;
display:flex;
align-items:center;
text-align:center;
padding: 0;
margin: 0 !important;
width: 100%;
`;
//  background-color: #252525;
const CustomCol = styled(Col)`
padding: 0;
height: 100vh;
background-color: #252525;
&:first-child {
}
&:nth-child(2) {
  background: #fff;
}
`;
const ImgContainer = styled.div`
position: relative;
height: 100%;
`;

const MobileImage = styled.img`
height: auto;
width: 100%;
max-height: 725px;
max-width: 725px;
`;
const TextContainer = styled.div`
position: absolute;
z-index: 999;
margin: 0 auto;
left: 0;
right: 0;
bottom: 2vh;  
text-align: center;
color:#ffff;
`;
class LoginPage extends Component {
  state = {
    deviceType: deviceType()
  }

  updateDimensions = () => {
    this.setState({
      deviceType: deviceType()
    })
  }
  componentDidMount() {
    // this.props.actions.showInfoNotification('hello');
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
  console.log('this.props', this.props);
    return (
      <CustomRow>
        {<CustomCol xs={12} sm={12} md={12} lg={12}> 
          <ImgContainer>
            <MobileImage src={logo} />
            <TextContainer>
              <Row style={{ marginBottom: 0}}>
                <Col xs={6} style={{ textAlign:"right", paddingRight: '2vw'}}>
                  <Link
                    to="/register"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Register
                  </Link>
                </Col>
                <Col xs={6} style={{ textAlign:"left", paddingLeft: '2vw'}} >
                  <Link
                      to="/login"
                      style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px"
                      }}
                      className="btn btn-large btn-flat waves-effect white black-text"
                    >
                      Log In
                    </Link>
                </Col>
              </Row>
            
            </TextContainer>
          </ImgContainer>
        </CustomCol>}
        
        {/*<ImageWrapper></ImageWrapper>
          <CustomCol xs={12} sm={4} md={4} lg={4}> 
          <CustomRow>
            <ColGeneral xs={12}>
            {this.state.deviceType === 'mobile' && <div>
                <MobileImage src={logo} />
            </div>}
              <Text><h4><b>Employee Dashboard</b></h4></Text>
              
              <CustomRow>
                <Col xs={12}>
                  <Link
                    to="/register"
                    style={{
                      width: "140px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px"
                    }}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Register
                  </Link>
                </Col>
                <Col xs={12} >
                  <Link
                      to="/login"
                      style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: '3vh'
                      }}
                      className="btn btn-large btn-flat waves-effect white black-text"
                    >
                      Log In
                    </Link>
                </Col>
              </CustomRow>
            </ColGeneral>
        </CustomRow>
        </CustomCol>*/}
      </CustomRow>
    );
  }
}

export default LoginPage;