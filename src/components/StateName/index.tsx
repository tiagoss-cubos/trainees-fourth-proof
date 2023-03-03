import "./styles.css";

const StateName = ({ name }: any) => {
  return (
    <div className='box__state'>
      <p className='state__name'>{name}</p>
    </div>
  );
};

export default StateName;
