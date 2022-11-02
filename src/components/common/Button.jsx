import styled from 'styled-components';

const Button = ({ text, onClick, value, isActive }) => {
  return (
    <>
      <StyledButton className={isActive && 'active'} value={value} onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  
  width: 62px;
  height: 27px;
  padding 5px 17px;
  margin: 0 4px;
  border-radius: 62px;
  background: #d9d9d9;

  color: #000;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  &.active {
    background: #000;
    color: #fff;
  }
`;

export default Button;
