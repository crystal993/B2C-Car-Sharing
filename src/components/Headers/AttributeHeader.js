import { AttributeBtnComponent, AttributeBtn } from '../style';
import { AttributeBttons } from '../../constant/AttributeBttons';

const AttributeHeader = () => {
  const ButtonName = Object.keys(AttributeBttons);
  return (
    <AttributeBtnComponent>
      {ButtonName.map((el, idx) => {
        return <AttributeBtn key={idx}>{AttributeBttons[el].name}</AttributeBtn>;
      })}
    </AttributeBtnComponent>
  );
};

export default AttributeHeader;
