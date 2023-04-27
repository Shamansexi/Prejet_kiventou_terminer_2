import { RouterProvider } from "react-router-dom";
import router from "./Pages/router";
import Home from "./Pages/Home";

function App() {
  return (
    
    <RouterProvider router={router} />
  );
}

export default App;
