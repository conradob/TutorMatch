import Link from 'next/link';
import styled from 'styled-components';
import Button from './styles/Button';

const ListTitle = styled.h2`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const TutorUl = styled.ul`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: auto-fit;
`;

const TutorItemStyle = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  box-shadow: ${props => props.theme.bs};
  list-style: none;
  padding: 2rem;
  border: 1px solid ${props => props.theme.offWhite};
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
  .tutor-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    grid-gap: 1rem;
    text-align: center;
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.03);
    }
    small {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

const DeleteButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

const TutorList = ({ list = [] }) => {
  return (
    <div>
      <ListTitle>
        You have {list.length} tutor{list.length > 1 ? 's' : ''}.
        <Link
          href={{
            pathname: '/add',
          }}
        >
          <Button>Add Tutor</Button>
        </Link>
      </ListTitle>
      <TutorUl>
        {list.map(tutor => (
          <TutorItemStyle key={tutor.id}>
            <Link
              href={{
                pathname: '/tutor',
                query: { id: tutor.id },
              }}
            >
              <a>
                <div className="order-meta">
                  <p>{tutor.name}</p>
                  <small>{tutor.description}</small>
                </div>
              </a>
            </Link>
            <DeleteButton>&times;</DeleteButton>
          </TutorItemStyle>
        ))}
      </TutorUl>
    </div>
  );
};

export default TutorList;
