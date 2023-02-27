import { BiStar } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import "./styles.css";

const TopBar = () => {
  const handleClick = () => {
    console.log("teste");
  };

  return (
    <div className='container__topbar'>
      <div>
        <span className='icon__bistar'>
          <BiStar />
        </span>
        <p>Insira aqui o texto ou informação relevante que deseja comunicar</p>
      </div>
      <span className='icon__riCloseCircleLine' onClick={handleClick}>
        <RiCloseCircleLine />
      </span>
    </div>
  );
};

export default TopBar;
