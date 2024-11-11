import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';

interface Props {
    deleteUser: (id: string) => void;
}
const DeleteUser = (props: Props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       props.deleteUser(id!)
       navigate("/users");
      };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h2>Warning</h2>
        <h3>Are you sure you want to remove it?</h3>
        <button type='submit'>Delete</button>
        </form>
        <button>
            <Link to={'/users'}>Cansel</Link>
        </button>
    </div>
  )
}

export default DeleteUser