import './App.css';
import User from './Components/Axios/User';
import Main from './Components/condrend/Main';
import Parent1 from './Components/ContextAPI/Parent1';
import FunctionalComp from './Components/FunctionalComp';
import Profile from './Components/Profile';
import Parent from './Components/Props/Parent';
import A from './Components/PropsDrilling/A';
import Nav from './Components/router/Nav';
import StateDemo from './Components/State/StateDemo';
import { Routes, Route } from 'react-router-dom';
import UserInfo from './Components/useeffect/UserInfo'
import Electronics from './Components/router/Electronics';
import Garment from './Components/router/Garment';
import Retails from './Components/router/Retails';
import Jewellery from './Components/router/Jewellery';
import Product from './Components/router/Product';
import ProductReport from './Components/Bootreact/ProductReport';
import AddProduct from './Components/Bootreact/AddProduct';
import DeleteProduct from './Components/Bootreact/DeleteProduct';


function App() {
  return (
    <div className="App">
       <h2>REACT APP</h2>
       {/* <FunctionalComp/> */}
       {/* <Profile/> */}
       {/* <StateDemo/> */}
       {/* <Parent/> */}
       {/* <A/> */}
       {/* <Parent1/> */}
       {/* <Main/> */}
       {/* <User/> */}
       <Nav/>
       <Routes>
         <Route path="/state" element={<StateDemo/>}/>
         <Route path="/profile" element={<Profile/>}/>
         <Route path="/props" element={<Parent/>}/>
         <Route path="/pdrilling" element={<A/>}/>
         <Route path="/context" element={<Parent1/>}/>
         <Route path="/axios" element={<User/>}/>
         <Route path="/useeffect" element={<UserInfo/>}/>
         <Route path="/conrend" element={<Main/>}/>
         <Route path="/preport" element={<ProductReport/>}/>
         <Route path="/addproduct" element={<AddProduct/>}/>
         <Route path="/product" element={<Product/>}>
            <Route path="electronics" element={<Electronics/>}/>
            <Route path="garment" element={<Garment/>}/>
            <Route path="retails" element={<Retails/>}/>
            <Route path="jewellery" element={<Jewellery/>}/>
         </Route>
       </Routes>
       {/* <AddProduct/> */}
       <DeleteProduct/>
       
    </div>
  );
}

export default App;
