import Main from "./Components/Main";
import Contact from "./Components/Contact";
import UpdateItems from "./Components/UpdateItems";
import Footer from "./Components/Footer";
import DeleteItems from "./Components/DeleteItems";
import AddNewItems from "./Components/AddNewItems";
import Home from "./Components/Home";
import About from "./Components/About";
import DisplayAllItems from "./Components/DisplayAllItems";
import Updateshow from "./Components/Updateshow";
import {Routes , Route} from 'react-router-dom';


function App(){
  return(
    <>
    <Main/>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/updateshow" element={<Updateshow/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/delete" element={<DeleteItems/>} />
      <Route path="/add" element={<AddNewItems/>} />
      <Route path="/update/:id" element={<UpdateItems/>} />
      <Route path="/display" element={<DisplayAllItems/>} />
    </Routes>
    <Footer/>

    </>
  )
}
export default App;
