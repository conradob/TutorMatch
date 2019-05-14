import fetch from '../lib/api';
import UpdateTutor from '../components/UpdateTutor';

const Index = ({ tutor }) => <UpdateTutor tutor={tutor} />;

Index.getInitialProps = async ({ query }) => {
  const { data: tutor = {} } = await fetch({ url: `/tutor/${query.id}` });
  return { tutor };
};

export default Index;
