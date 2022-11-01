import styled from 'styled-components';

const Button = ({ text, isActive, onClick }) => {
  return (
    <>
      <StyledButton className={isActive && 'active'} onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
};
// active #000
// default #d9d9d9

{
  /* <button
className={`cat_btn hover ${catActive ? "active_btn" : null}`}
onClick={() => handleSetCat(name)}
>
{name}
</button> */
}

// if active
// background: #000;
// color: #fff;

const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  
  width: 62px;
  height: 27px;
  padding 5px 17px;
  border-radius: 62px;
  background: #d9d9d9;

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
