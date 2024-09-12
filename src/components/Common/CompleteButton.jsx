import styled from "styled-components";
import { useNavigate } from 'react-router-dom'; 

const CompleteButton = (props) => {
const StyledCompleteButton = styled.button`
  margin-top: 24px;
  margin-left: 16px;
  width: 360px;
  height: 54px;
  border-radius: 12px;
  border: 1px solid #ECEFF0;
  background-color: ${(props) => (props.disabled ? '#0D0E10' : '#ECEFF0')};
  color: ${(props) => (props.disabled ? '#6A6D6E' : '#0D0E10')};
  font-size: 18px;
  font-family: "GothicA1-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  text-align: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  filter: drop-shadow(0px 6px 8px rgba(236, 239, 240, 30%)); 
`;

const navigate = useNavigate(); 

const handleButtonClick = () => {
  console.log('Navigating to /welcome'); 
  navigate("/welcome"); 
};

  return (
    <div>
      <StyledCompleteButton disabled={props.disabled} onClick={handleButtonClick}>
        완료
      </StyledCompleteButton>
    </div>
  );
};

export default CompleteButton;
