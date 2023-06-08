import './App.css';
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from  './components/Footer';
import SignUp from './components/signup';
import PtComponent from './components/PtComponent';
import Login from './components/login';
import AddProduct from './components/AddProduct';
function App() {
  return (
  <div classname="App">
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route element={<PtComponent/>}>
      <Route path ="/" element={<h1>Product Listing Component</h1>}/>
      <Route path ="/add" element={<AddProduct/>}/> 
      <Route path ="/update" element={<h1>Update Product Component</h1>}/>
      <Route path ="/logout" element={<h1>Logout </h1>}/>
      <Route path ="/profile" element={<h1>Profile Component</h1>}/>
</Route>
<Route path ="/signup" element={<SignUp/>}></Route>
<Route path = "/login" element={<Login/>}></Route>
    </Routes>
</BrowserRouter>
<Footer></Footer>
    </div>
  );
}

export default App;
