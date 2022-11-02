import styled from 'styled-components';

const Empty = () => {
  return <EmptyDiv>차량이 없습니다.</EmptyDiv>;
};

const EmptyDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  font-weight: 700;
`;

export default Empty;
