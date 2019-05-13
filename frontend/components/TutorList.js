const TutorList = ({ list = [] }) => {
  return (
    <>
      {list.map(el => (
        <span key={el.id}>{el.name}</span>
      ))}
    </>
  );
};

export default TutorList;
