import "./App.css";
import AlbumSongsPage from "./Components/Album Songs Page/AlbumSongsPage";
import HomePage from "./Components/Home Page/HomePage";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routes = useRoutes([
    {  path:"/", element:<HomePage/> },
    { path:"/album/:title" , element:<AlbumSongsPage/>},

  ]);

  return routes; 
    
};

export default App;