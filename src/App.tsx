import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Partner from "./pages/Partner/Partner";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/partner" element={<Partner />} />
    </Routes>
  );
};

export default App;