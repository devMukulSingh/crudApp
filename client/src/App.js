import './App.css';
import AddUser from "./components/AddUser"
import Navbar from './components/Navbar';
import Home from "./components/Home";
import { BrowserRouter, Route , Routes, useParams } from "react-router-dom";
import AllUser from './components/AllUser';
import EditUser from "./components/EditUser";


function App() {

  const { id } = useParams();
   return (

    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path ="/" element={ <Home/>}/>
          <Route path = "/getusers" element= { <AllUser/>} />
          <Route path = "/addusers" element= { <AddUser/>} />
          <Route path = {`/edituser/:id`} element = { < EditUser/>} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
