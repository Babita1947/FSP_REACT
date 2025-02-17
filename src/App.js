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
         {/* <Route path="/useeffect" element={<UserInfo/>}/> */}
         <Route path="/conrend" element={<Main/>}/>
       </Routes>
    </div>
  );
}

export default App;
