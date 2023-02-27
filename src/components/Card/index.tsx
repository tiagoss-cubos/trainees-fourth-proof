import ButtonAddToCart from "../ButtonAddToCart";
import "./styles.css";

const Card = ({ product }: any) => {
  return (
    <div className='container__card'>
      <img src={product} alt='product' />
      <p className='container__card__name'>
        Smartphone Samsung Galaxy Z Flip4 5G Tela dobrável de 6.7" 256GB
        <br />
        Processador Snapdragon 8GB de RAM Câmera Dupla Traseira Violeta
      </p>
      <span className='container__card__discount'>R$ 7.498,89</span>
      <span className='container__card__price'>R$ 6.749,00</span>
      <span className='container__card__payment'>
        à vista no pix ou cartão de crédito
      </span>
      <div className='container__installments'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.1591 3.75H2.84091C1.96227 3.75 1.25 4.44956 1.25 5.3125V14.6875C1.25 15.5504 1.96227 16.25 2.84091 16.25H17.1591C18.0377 16.25 18.75 15.5504 18.75 14.6875V5.3125C18.75 4.44956 18.0377 3.75 17.1591 3.75Z'
            stroke='black'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M1.25 8.4375H18.75'
            stroke='black'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
        <span>R$ 7.498,89 em até 8x de R$ 937,36</span>
      </div>
      <ButtonAddToCart />
    </div>
  );
};

export default Card;
