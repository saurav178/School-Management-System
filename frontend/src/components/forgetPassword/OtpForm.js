import React, { useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PasswordForm from './PasswordForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Light gray background */
`;

const FormWrapper = styled.div`
  width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff; /* White background */
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h3`
  color: #333; /* Dark gray text color */
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 96%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PrimaryButton = styled(StyledButton)`
  background-color: #007bff; /* Primary color */
  color: #fff; /* White text color */
`;

const SuccessButton = styled(StyledButton)`
  background-color: #7f56da; /* Success color */
  color: #fff; /* White text color */
`;

const OtpForm = () => {

const emailRef = useRef();
const [OtpForm,showForm] = useState(true)
const sendOtp = async () => {
    try {
        let url = 'http://localhost:5000/email-send'
        let options = {
            method:'POST',
            url:url,
            data:{email:emailRef.current.value}
        }
        let response = await axios(options)
        let record = response.data;
        if(record.statusText == 'Success'){
            toast.success(record.message);
            showForm(false);
        }else{
            toast.error(record.message);
        }
    } catch (error) {
        toast.error("Something Went Wrong !");
    }
}

  return (
    <Container>
      <FormWrapper>
        <ToastContainer />
        <Heading>Reset Password</Heading>
       { OtpForm ? <form autoComplete='off' method='post'>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <Input type='email' className='form-control' name='email' autoComplete='off' ref={emailRef}/>
          </div>
          <ButtonGroup>
            <PrimaryButton type="button" onClick={sendOtp}>
              Send OTP
            </PrimaryButton>
            <Link to="/choose">
              <SuccessButton type="button">
                Back
              </SuccessButton>
            </Link>
          </ButtonGroup>
        </form>
         : <PasswordForm />
}
      </FormWrapper>
    </Container>
  );
};

export default OtpForm;
