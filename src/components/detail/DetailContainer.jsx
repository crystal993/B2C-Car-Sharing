import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { convertAmount } from '../../utils/function/convertAmount';
import { fuelConvertName, segConvertName } from '../../utils/function/convertOption';
import { convertUsableDate } from '../../utils/function/convertUsableDate';
import SEOMetaTag from '../metaTag/SEOMetaTag';
import DetailInfoBar from './DetailInfoBar';
import DetailSectionBar from './DetailSectionBar';

export const DetailContainer = () => {
  const { state } = useLocation();
  return (
    <Wrapper>
      <SEOMetaTag props={state} />
      <ImgWrapper>
        <Img src={state.attribute.imageUrl} />
      </ImgWrapper>
      <TitleWrapper>
        <BrandText>{state.attribute.brand}</BrandText>
        <NameText>{state.attribute.name}</NameText>
      </TitleWrapper>
      <DetailInfoBar value={`월 ${convertAmount(state.amount)} 원`} />
      <DetailSectionBar txt={'차량 정보'} />
      <DetailInfoBar name={'차종'} value={segConvertName(state.attribute.segment)} />
      <DetailInfoBar name={'연료'} value={fuelConvertName(state.attribute.fuelType)} />
      <DetailInfoBar name={'이용 가능일'} value={convertUsableDate(state.startDate)} />
      <DetailSectionBar txt={'보험'} />
      {state.insurance &&
        state.insurance.map(insurance => {
          return (
            <>
              <DetailInfoBar name={insurance.name} value={insurance.description} />
            </>
          );
        })}
      <DetailSectionBar txt={'추가 상품'} />
      {state.additionalProducts &&
        state.additionalProducts.map(product => {
          return (
            <>
              <DetailInfoBar name={product.name} value={convertAmount(product.amount)} />
            </>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 31rem;
`;

const TitleWrapper = styled.div`
  margin: 2rem 0rem 3.4rem 2rem;
`;

const BrandText = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
`;

const NameText = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.4rem;
`;

const ImgWrapper = styled.div`
  width: 39rem;
  height: 20.5rem;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 39rem;
  height: 20.5rem;
`;
