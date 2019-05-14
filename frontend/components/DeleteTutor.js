import styled from 'styled-components';
import fetch from '../lib/api';

const DeleteButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

export default ({ id, onDelete = () => {} }) => {
  return (
    <DeleteButton
      onClick={async () => {
        if (confirm('Are you sure you want to delete this tutor?')) {
          try {
            await fetch({ url: `/delete/${id}`, method: 'put' });
            onDelete(id);
          } catch (err) {
            console.error(err);
          }
        }
      }}
    >
      &times;
    </DeleteButton>
  );
};
