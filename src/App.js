import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Newpassword from './Components/Newpassword';
import Userpg from './Components/Userpg';
import Loginpg from './Components/Loginpg';
import VerifyPg from './Components/Verifypg';
import Frontpg from './Components/Frontpg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Confirmcode from './Components/Confirmcode';
import Newpoll from './Components/Newpoll';
import Comments from './Components/Comments';




function App() {
  return (
   <>
   {/* <Frontpg/>
   <Loginpg/>
   <Signup/>
   <VerifyPg/>
   <Newpassword/> */}

   {/* <Confirmcode/> */}

   {/* <Comments/> */}


   <BrowserRouter>
  
            <Routes>
                <Route path="/" element={<Frontpg />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Loginpg" element={<Loginpg />} />
                <Route path="/VerifyPg" element={<VerifyPg />} />
                <Route path="/Confirmcode" element={<Confirmcode />} />
                <Route path="/Newpassword" element={<Newpassword />} />
                <Route path="/Loginpg" element={<Loginpg />} />
                <Route path="/newpoll" element={<Newpoll />} />
            </Routes>
        
</BrowserRouter>



   {/* <Userpg/> */}

  

   </>
    
   
  );
}

export default App;

