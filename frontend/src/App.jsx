import { Route, Routes } from "react-router-dom";
import {
  Bookmark,
  Explore,
  Home,
  Login,
  NotFound,
  Profile,
  Register,
  Welcome,
} from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id?" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Route>

        <Route path="/welcome" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
