import ButtonSearch from "../../components/ButtonSearch";
import Card from "../../components/Card";
import Header from "../../components/Header";
import BasicModal from "../../components/BasicModal";
import TopBar from "../../components/TopBar";
import "./styles.css";
import { products } from "../../utills";

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
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      <BasicModal />
    </div>
  );
};

export default Home;
