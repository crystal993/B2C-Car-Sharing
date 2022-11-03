import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { convertAmount } from '../../utils/function/convertAmount';

const SEOMetaTag = () => {
  const { state } = useLocation();
  if (state)
    return (
      <Helmet>
        <title>{`${state.attribute.brand} ${state.attribute.name}`}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${state.attribute.brand} ${state.attribute.name}`} />
        <meta property="og:description" content={`월 ${convertAmount(state.amount)} 원`} />
        <meta property="og:image" content={state.attribute.imageUrl} />

        <link rel="canonical" href={state.url} />
      </Helmet>
    );
};

export default SEOMetaTag;
