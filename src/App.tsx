import { useRoutes } from "react-router";
import Home from "./pages/Home";

const App = () => {
  const routes = useRoutes(
    [
      {path: '/', element: <Home />}
    ]
  )

  return routes
};

export default App;
