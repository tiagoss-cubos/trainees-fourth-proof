import ButtonSearch from "../../components/ButtonSearch";
import Card from "../../components/Card";
import Header from "../../components/Header";
import BasicModal from "../../components/Modal";
import Modal from "../../components/Modal";
import TopBar from "../../components/TopBar";
import Product from "./../../assets/product.svg";
import Product2 from "./../../assets/product2.svg";
import Product3 from "./../../assets/product3.svg";
import "./styles.css";

const Home = () => {
  return (
    <div className='container__home'>
      <TopBar />
      <Header />
      <div className='container__main'>
        <div className='container__information'>
          <h1 className='container__information__title'>
            Ofertas especiais pra você não perder nada!
          </h1>
          <ButtonSearch name='Buscar Estado' />
        </div>
        <div className='container__content'>
          <Card product={Product} />
          <Card product={Product2} />
          <Card product={Product3} />
          <Card product={Product} />
        </div>
      </div>
      <BasicModal />
    </div>
  );
};

export default Home;
