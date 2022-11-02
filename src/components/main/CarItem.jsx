import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ConvertAmount } from '../../utils/ConvertAmount';
import { IsCreatedWithinDay } from '../../utils/IsCreatedWithinDay';
import Badge from '../elements/Badge';

export default function CarItem({ car }) {
  const navigate = useNavigate();
  const isLatest = IsCreatedWithinDay(car.createdAt);
  return (
    <Wrapper onClick={() => navigate(`/car/${car.id}`, { state: car })}>
      <TextWrapper>
        <Title>{car.attribute.brand}</Title>
        <Title>{car.attribute.name}</Title>
        <ContentsWrapper>
          <Contents>
            {car.attribute.segment} / {car.attribute.fuelType}
          </Contents>
          <Contents>월 {ConvertAmount(car.amount)}원 부터</Contents>
        </ContentsWrapper>
      </TextWrapper>
      <ImgWrapper>
        {isLatest && <Badge content={'신규'} />}
        <Img src={car.attribute.imageUrl} />
      </ImgWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextWrapper = styled.div``;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.7rem;
`;

const ContentsWrapper = styled.div`
  padding-top: 0.8rem;
`;

const Contents = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
`;

const ImgWrapper = styled.div`
  width: 15.2rem;
  height: 100%;
  position: relative;
`;

const Img = styled.img`
  width: 15.2rem;
  height: 8rem;
`;
