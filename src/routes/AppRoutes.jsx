import {Route, Routes} from "react-router-dom";


import {About} from "../pages/About/About.jsx";
import {Careers} from "../pages/Careers/Careers.jsx";
import {Home} from "../pages/Home/Home.jsx";
import {Login} from "../pages/Login/Login.jsx";
import {Security} from "../pages/Security/Security.jsx";
import {SignUp} from "../pages/SignUp/SignUp.jsx";
import {NotFound} from "../pages/NotFound/NotFound.jsx";

export function AppRoutes() {
    return(
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/careers" element={<Careers/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="security" element={<Security/>}/>
           <Route path="signup" element={<SignUp/>}/>
           <Route path="*" element={<NotFound/>}/>
       </Routes>
    )
}