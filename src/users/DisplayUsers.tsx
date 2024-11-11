import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import User from "../interface/userInterfase";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";


interface Props {
  deleteUser: (id: string) => void;
  updateUser: (user: User) => void;
  addNewStar: (user: User) => void;
}

export default function DisplayUsers({ updateUser, addNewStar, deleteUser }: Props) {
  const {users, setUsers} = useContext(UserContext)
  return (
    <>
      <PageHeader
        title="Users Page"
        subtitle="This is the main page of users"
      />
      <NavLink to={"/users/adduser"} className="add-user-link">
        Add user
      </NavLink>

      <div className="card-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={user.img}
              alt={`${user.username}'s avatar`}
              className="user-avatar"
            />
            <div className="user-info">
              <h3>{user.username}</h3>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
            </div>
            <div className="user-actions">
              <button onClick={() => { updateUser(user)}}
              >
                <NavLink to={`/users/edit/${user.id}`}>Edit</NavLink>
              </button>

              <button onClick={() => addNewStar(user)} className="star-button">
                Add Star
              </button>

              <button onClick={() => {}}><NavLink to={`/users/delete/${user.id}`}>Delete</NavLink></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
