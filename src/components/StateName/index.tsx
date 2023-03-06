import "./styles.css";

const StateName = ({ name, handleClickSelectState }: any) => {
  return (
    <div className='box__state'>
      <p className='state__name' onClick={handleClickSelectState}>
        {name}
      </p>
    </div>
  );
};

export default StateName;
