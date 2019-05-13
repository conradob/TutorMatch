import fetch from 'axios';

const Index = props => {
  return (
    <div>
      {props.data.map(el => (
        <span key={el.id}>{el.name}</span>
      ))}
    </div>
  );
};

Index.getInitialProps = async () => {
  const { API_ENDPOINT } = process.env

  const { data } = await fetch(`${API_ENDPOINT}/list`);
  return { data };
};

export default Index;
