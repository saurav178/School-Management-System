// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { RecoveryContext } from './RecoveryContext';
// import { useContext } from "react";
// import axios from 'axios';
// const PasswordForm = ()=>{
//   const { email, otp, setPage } = useContext(RecoveryContext);
//   const [timerCount, setTimer] = React.useState(60);
//   const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
//   const [disable, setDisable] = useState(true);

//   function resendOTP() {
//     if (disable) return;
//     axios
//       .post("http://localhost:5000/email-send", {
//         OTP: otp,
//         recipient_email: email,
//       })
//       .then(() => setDisable(true))
//       .then(() => alert("A new OTP has succesfully been sent to your email."))
//       .then(() => setTimer(60))
//       .catch(console.log);
//   }
  

//   function verfiyOTP() {
//     if (parseInt(OTPinput.join("")) === otp) {
//       setPage("reset");
//       return;
//     }
//     alert(
//       "The code you have entered is not correct, try again or re-send the link"
//     );
//     return;
//   }

//   React.useEffect(() => {
//     let interval = setInterval(() => {
//       setTimer((lastTimerCount) => {
//         lastTimerCount <= 1 && clearInterval(interval);
//         if (lastTimerCount <= 1) setDisable(false);
//         if (lastTimerCount <= 0) return lastTimerCount;
//         return lastTimerCount - 1;
//       });
//     }, 1000); //each count lasts for a second
//     //cleanup the interval on complete
//     return () => clearInterval(interval);
//   }, [disable]);

//   return (
//     <StyledVerificationContainer>
//       <StyledVerificationBox>
//         <StyledTitle>Email Verification</StyledTitle>
//         <StyledMessage>
//           We have sent a code to your email {email}
//         </StyledMessage>
//         <form autoComplete="off">
//           <StyledInputContainer>
//             {Array.from({ length: 4 }, (_, index) => (
//               <StyledInput
//                 key={index}
//                 maxLength="1"
//                 value={initializedOTPinput[index]}
//                 onChange={(e) => {
//                   const newOTPInput = [...initializedOTPinput];
//                   newOTPInput[index] = e.target.value;
//                   setOTPinput(newOTPInput);
//                 }}
//               />
//             ))}
//           </StyledInputContainer>
//           <div>
//             <StyledButton onClick={() => verifyOTP()}>Verify Account</StyledButton>
//           </div>
//           <div>
//             <StyledResendLink
//               disable={disable}
//               onClick={handleResendClick}
//             >
//               {disable ? `Resend OTP in ${timerCount}s` : 'Resend OTP'}
//             </StyledResendLink>
//           </div>
//         </form>
//       </StyledVerificationBox>
//     </StyledVerificationContainer>
//   );
// };
// const StyledVerificationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f0f0f0;
// `;

// const StyledVerificationBox = styled.div`
//   background-color: white;
//   padding: 24px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
//   border-radius: 16px;
//   margin: 0 auto;
// `;

// const StyledTitle = styled.div`
//   font-weight: bold;
//   font-size: 24px;
//   margin-bottom: 16px;
//   text-align: center;
// `;

// const StyledMessage = styled.div`
//   font-size: 16px;
//   color: #555;
//   margin-bottom: 24px;
//   text-align: center;
// `;

// const StyledInputContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const StyledInput = styled.input`
//   width: 60px;
//   height: 60px;
//   font-size: 18px;
//   text-align: center;
//   outline: none;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   margin-right: 8px;

//   &:last-child {
//     margin-right: 0;
//   }
// `;

// const StyledButton = styled.button`
//   cursor: pointer;
//   width: 100%;
//   border: none;
//   background-color: blue;
//   color: white;
//   font-size: 16px;
//   padding: 16px;
//   margin-top:20px;
//   border-radius: 8px;
//   text-decoration: none;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: darkblue;
//   }
// `;

// const StyledResendLink = styled.a`
//   color: ${(props) => (props.disable ? 'gray' : 'blue')};
//   cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
//   text-decoration-line: ${(props) => (props.disable ? 'none' : 'underline')};
//   text-align: center;
//   display: block;
//   margin-top: 16px;
// `;

// export default PasswordForm;



// ------------------------------------------------------------




// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { RecoveryContext } from './RecoveryContext';
// import { useContext } from "react";
// import axios from 'axios';

// const PasswordForm = () => {
//   const { email, otp, setPage } = useContext(RecoveryContext);
//   const [timerCount, setTimerCount] = React.useState(60);
//   const [OTPinput, setOTPinput] = useState(["", "", "", ""]);
//   const [disable, setDisable] = useState(true);

//   function resendOTP() {
//     if (disable) return;
//     axios
//       .post("http://localhost:5000/email-send", {
//         OTP: otp,
//         recipient_email: email,
//       })
//       .then(() => setDisable(true))
//       .then(() => alert("A new OTP has successfully been sent to your email."))
//       .then(() => setTimerCount(60))
//       .catch(console.log);
//   }

//   function verifyOTP() {
//     if (parseInt(OTPinput.join("")) === otp) {
//       setPage("reset");
//       return;
//     }
//     alert(
//       "The code you have entered is not correct, try again or re-send the link"
//     );
//     return;
//   }

//   React.useEffect(() => {
//     let interval = setInterval(() => {
//       setTimerCount((lastTimerCount) => {
//         lastTimerCount <= 1 && clearInterval(interval);
//         if (lastTimerCount <= 1) setDisable(false);
//         if (lastTimerCount <= 0) return lastTimerCount;
//         return lastTimerCount - 1;
//       });
//     }, 1000); // each count lasts for a second
//     // cleanup the interval on complete
//     return () => clearInterval(interval);
//   }, [disable]);

//   return (
//     <StyledVerificationContainer>
//       <StyledVerificationBox>
//         <StyledTitle>Email Verification</StyledTitle>
//         <StyledMessage>
//           We have sent a code to your email {email}
//         </StyledMessage>
//         <form autoComplete="off">
//           <StyledInputContainer>
//             {Array.from({ length: 4 }, (_, index) => (
//               <StyledInput
//                 key={index}
//                 maxLength="1"
//                 value={OTPinput[index]}
//                 onChange={(e) => {
//                   const newOTPInput = [...OTPinput];
//                   newOTPInput[index] = e.target.value;
//                   setOTPinput(newOTPInput);
//                 }}
//               />
//             ))}
//           </StyledInputContainer>
//           <div>
//             <StyledButton onClick={verifyOTP}>Verify Account</StyledButton>
//           </div>
//           <div>
//             <StyledResendLink
//               disable={disable}
//               onClick={resendOTP}
//             >
//               {disable ? `Resend OTP in ${timerCount}s` : 'Resend OTP'}
//             </StyledResendLink>
//           </div>
//         </form>
//       </StyledVerificationBox>
//     </StyledVerificationContainer>
//   );
// };

// const StyledVerificationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f0f0f0;
// `;

// const StyledVerificationBox = styled.div`
//   background-color: white;
//   padding: 24px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   max-width: 400px;
//   border-radius: 16px;
//   margin: 0 auto;
// `;

// const StyledTitle = styled.div`
//   font-weight: bold;
//   font-size: 24px;
//   margin-bottom: 16px;
//   text-align: center;
// `;

// const StyledMessage = styled.div`
//   font-size: 16px;
//   color: #555;
//   margin-bottom: 24px;
//   text-align: center;
// `;

// const StyledInputContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const StyledInput = styled.input`
//   width: 60px;
//   height: 60px;
//   font-size: 18px;
//   text-align: center;
//   outline: none;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   margin-right: 8px;

//   &:last-child {
//     margin-right: 0;
//   }
// `;

// const StyledButton = styled.button`
//   cursor: pointer;
//   width: 100%;
//   border: none;
//   background-color: blue;
//   color: white;
//   font-size: 16px;
//   padding: 16px;
//   margin-top: 20px;
//   border-radius: 8px;
//   text-decoration: none;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: darkblue;
//   }
// `;

// const StyledResendLink = styled.a`
//   color: ${(props) => (props.disable ? 'gray' : 'blue')};
//   cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
//   text-decoration-line: ${(props) => (props.disable ? 'none' : 'underline')};
//   text-align: center;
//   display: block;
//   margin-top: 16px;
// `;

// export default PasswordForm;




// -----------------------------------------------------------------------------









import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { RecoveryContext } from '../forgetPassword/RecoveryContext';  // Make sure the path is correct
import axios from 'axios';

const PasswordForm = () => {
  const { email, otp, setPage } = useContext(RecoveryContext);
  const [timerCount, setTimer] = useState(60);
  const [OTPinput, setOTPinput] = useState(['', '', '', '']);
  const [disable, setDisable] = useState(true);

  function resendOTP() {
    if (disable) return;
    axios
      .post("http://localhost:5000/email-send", {
        OTP: otp,
        recipient_email: email,
      })
      .then(() => setDisable(true))
      .then(() => alert("A new OTP has successfully been sent to your email."))
      .then(() => setTimer(60))
      .catch(console.log);
  }

  function verifyOTP() {
    if (parseInt(OTPinput.join('')) === parseInt(otp)) {
      setPage("reset");
    } else {
      alert("The code you have entered is not correct, try again or re-send the link");
    }
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); // each count lasts for a second

    // cleanup the interval on complete
    return () => clearInterval(interval);
  }, [disable]);

  return (
    <StyledVerificationContainer>
      <StyledVerificationBox>
        <StyledTitle>Email Verification</StyledTitle>
        <StyledMessage>
          We have sent a code to your email {email}
        </StyledMessage>
        <form autoComplete="off">
          <StyledInputContainer>
            {Array.from({ length: 4 }, (_, index) => (
              <StyledInput
                key={index}
                maxLength="1"
                value={OTPinput[index]}
                onChange={(e) => {
                  const newOTPInput = [...OTPinput];
                  newOTPInput[index] = e.target.value;
                  setOTPinput(newOTPInput);
                }}
              />
            ))}
          </StyledInputContainer>
          <div>
            <StyledButton onClick={verifyOTP}>Verify Account</StyledButton>
          </div>
          <div>
            <StyledResendLink
              disable={disable}
              onClick={resendOTP}
            >
              {disable ? `Resend OTP in ${timerCount}s` : 'Resend OTP'}
            </StyledResendLink>
          </div>
        </form>
      </StyledVerificationBox>
    </StyledVerificationContainer>
  );
};

const StyledVerificationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const StyledVerificationBox = styled.div`
  background-color: white;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  margin: 0 auto;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
`;

const StyledMessage = styled.div`
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
  text-align: center;
`;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 60px;
  height: 60px;
  font-size: 18px;
  text-align: center;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 16px;
  margin-top: 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkblue;
  }
`;

const StyledResendLink = styled.a`
  color: ${(props) => (props.disable ? 'gray' : 'blue')};
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
  text-decoration-line: ${(props) => (props.disable ? 'none' : 'underline')};
  text-align: center;
  display: block;
  margin-top: 16px;
`;

export default PasswordForm;
