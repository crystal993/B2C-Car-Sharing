import styled from 'styled-components';

const NewTag = () => {
  // console.log(text);
  return <Span>신규</Span>;
};

//

const Span = styled.span`
  width: 52px;
  height: 22px;
  background-color: #0094ff;
  padding 4px 14px;
  color: #fff;
  border-radius: 42px;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;

export default NewTag;
