import React from 'react';
import {MDBFooter,MDBContainer,MDBIcon,MDBBtn} from 'mdb-react-ui-kit';

export default function Thefooter() {
  return (
    <MDBFooter className='bg-dark w-100 text-white mb-0'>
        <MDBContainer className='p-4 pb-0'>

       
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/basma.reda.904108' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/basmarreda?s=35' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com.eg/' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
         
          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/basma-reda-b60847209' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/basmareda' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          Copyright reserved ©
        
      </div>
    </MDBFooter>
  );
}