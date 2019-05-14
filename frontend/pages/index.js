import fetch from '../lib/api';
import List from '../components/List';

const Index = ({ list }) => <List list={list} />;

Index.getInitialProps = async () => {
  const { data: list = [] } = await fetch({ url: '/list' });
  return { list };
};

export default Index;
