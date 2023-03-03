import ButtonAddToCart from "../ButtonAddToCart";
import IconCard from "./../../assets/icon-card.svg";
import "./styles.css";

const Card = ({ product }: any) => {
  const { image, name, discount, preco, payment, installments } = product;
  return (
    <div className='container__card'>
      <img className='container__card__product' src={image} alt='product' />
      <p className='container__card__name'>{name}</p>
      <span className='container__card__discount'>{discount}</span>
      <span className='container__card__price'>{preco}</span>
      <span className='container__card__payment'>{payment}</span>
      <div className='container__installments'>
        <img src={IconCard} alt='icon-card' />
        <span>{installments}</span>
      </div>
      <ButtonAddToCart />
    </div>
  );
};

export default Card;
