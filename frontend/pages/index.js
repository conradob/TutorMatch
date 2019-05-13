import api from '../lib/api';
import TutorList from '../components/TutorList';

const Index = ({ list }) => <TutorList list={list} />;

Index.getInitialProps = async () => {
  const { data: list = [] } = await api({ url: '/list' });
  return { list };
};

export default Index;
