import  { useState } from 'react'
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {
  const[nameInput,setNameInput]=useState("");
      const[passwordInput,setPasswordInput]=useState("");
      const getNameValue=(e)=>{
          setNameInput(e.target.value)
  
      };
      const getPasswordValue=(e)=>{
          setPasswordInput(e.target.value)
  
      };
      const submitHandler=(e)=>{
         e.preventDefault();
         console.log(nameInput,passwordInput);
  
      };



  return (
    <MDBContainer fluid onSubmit={submitHandler}>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://images.pexels.com/photos/5853354/pexels-photo-5853354.png?auto=compress&cs=tinysrgb&w=600)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' required/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' defultValue={nameInput}
         onChange={getNameValue} />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={getPasswordValue}/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='keep me loging' />
          </div>

          <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

          <div className="text-center">

            <p>or sign up with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

          </div>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;