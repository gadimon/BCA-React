import { Route, Routes } from "react-router-dom";
import Users from "../users/Users";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Users App!!!</h1>} />
        <Route path="/users/*" element={<Users />} />
        <Route path="*" element={<h1>404 NOT FOUND?</h1>} />
      </Routes>
    </>
  );
}
