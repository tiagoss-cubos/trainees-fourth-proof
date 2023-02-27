import { GrLocation } from "react-icons/gr";
import "./styles.css";

const ButtonSearch = ({ name }: any) => {
  const handleClickModal = () => {
    console.log("Abrir modal");
  };
  return (
    <div className='container__button'>
      <button type='button' onClick={handleClickModal}>
        <GrLocation className='icon__location' />
        {name}
      </button>
    </div>
  );
};

export default ButtonSearch;
