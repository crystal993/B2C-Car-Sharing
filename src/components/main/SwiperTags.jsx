import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/swiper.min.css';
import Button from '../elements/Button';
import segmentOption from '../../utils/constant/segmentOption';
import fuelTypeOption from '../../utils/constant/fuelTypeOption';
import { useCarState } from '../../context/CarListProvider';

const SwiperTags = props => {
  const { segment, fuelType } = useCarState();

  return (
    <Wrapper>
      <Swiper slidesPerView={5} spaceBetween={-1} initialSlide={2} centeredSlides={true}>
        {segmentOption &&
          segmentOption.map((option, idx) => (
            <SwiperSlide key={idx}>
              <Button
                key={idx}
                value={option.value}
                content={option.name}
                active={option.value === segment ? 'active' : ''}
                onClick={props.onSegClickHandler}
              />
            </SwiperSlide>
          ))}
        {fuelTypeOption &&
          fuelTypeOption.map((option, idx) => (
            <SwiperSlide key={idx}>
              <Button
                key={idx}
                value={option.value}
                content={option.name}
                active={option.value === fuelType ? 'active' : ''}
                onClick={props.onFuelClickHandler}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export default SwiperTags;
