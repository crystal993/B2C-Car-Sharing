import styled from 'styled-components';
export const HeaderContainer = styled.div`
  width: 100vw;
  height: 8vh;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  //position: fixed;
  font-size: 1rem;
`;
export const AttributeBtnComponent = styled.div`
  width: 100vw;
  height: fit-content;
  border-bottom: 1px solid black;
  display: flex;
`;
export const AttributeBtn = styled.button`
  border-radius: 1rem;
  font-size: 1rem;
  width: fit-content;
  height: fit-content;
  border: 1px solid #000000;
  background-color: D9D9D9;
  color: #000000;
  margin: 0.3rem 0rem 0.3rem 0.5rem;
  padding: 5px 15px;
  overflow: hidden;

  &:focus {
    background-color: #000000;
    color: #d9d9d9;
  }
`;
export const NoDataContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
