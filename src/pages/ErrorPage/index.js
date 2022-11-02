import { ErrorImgContainer } from './style';
import { ErrorPageImageLink } from '../../constant/ErrorPageImgLink';

const ErrorPage = () => {
  return (
    <ErrorImgContainer>
      <img src={ErrorPageImageLink} alt="" />
    </ErrorImgContainer>
  );
};

export default ErrorPage;
