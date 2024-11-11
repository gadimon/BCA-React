import { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import NewUser from "./NewUser";
import DisplayUsers from "./DisplayUsers";
import { Route, Routes } from "react-router-dom";
import EditUser from "./EditUser";
import User from "../interface/userInterfase";
import { UserContext } from "../providers/UserProvider";
import DeleteUser from "./DeleteUser";



export default function Users() {
  const {users, setUsers} = useContext(UserContext)
  const [stars, setStars] = useState<User[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addNewUser = (newUser: User) => {
    newUser.id = v4();
    setUsers([...users, newUser]);
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  
  const UpdateUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };


  const addNewStar = (newStar: User) => {
    setStars([...stars, newStar]);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DisplayUsers
              deleteUser={deleteUser}
              updateUser={UpdateUser}
              addNewStar={addNewStar}
            />
          }
        />
        <Route path="/adduser" element={<NewUser addUser={addNewUser} />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/delete/:id" element={<DeleteUser deleteUser={deleteUser} />} />
      </Routes>
    </>
  );
}
