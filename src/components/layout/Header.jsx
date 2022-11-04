import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../../assets/icons/icon_back.svg';
import { useCarDispatch } from '../../context/CarListProvider';
import { CarActionType } from '../../context/actionTypes';

const Header = ({ title }) => {
  const dispatch = useCarDispatch();
  const onClickHandler = () => {
    dispatch({ type: CarActionType.SET_SEGMENT, segment: '' });
    dispatch({ type: CarActionType.SET_FUEL_TYPE, fuelType: '' });
  };
  return (
    <Wrapper>
      {title === '차량상세' && (
        <Link to="/">
          <StyledBackIcon onClick={onClickHandler} />
        </Link>
      )}
      <TitleWrapper>
        <h1>{title}</h1>
      </TitleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.subColor};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 6rem;
  color: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.black};
`;

const StyledBackIcon = styled(BackIcon)`
  position: absolute;
  left: 1rem;
  top: 2rem;
`;

export default Header;
