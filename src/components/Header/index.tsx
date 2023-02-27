import "./styles.css";
import { FiSearch, FiUser } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrCart } from "react-icons/gr";

import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className='container__header'>
      <img src={Logo} alt='logo' />
      <div className='container__input'>
        <input type='text' placeholder='O que você procura?' />
        <FiSearch className='container__input__search' />
      </div>
      <div className='container__myaccount'>
        <FiUser />
        <span>Minha conta</span>
        <RiArrowDropDownLine />
      </div>
      <GrCart className='cart' />
    </div>
  );
};

export default Header;
