import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import SingleUser from "./Pages/SingleUser";
function App() {
  return (
    <>
      <BrowserRouter>
       
       <div className=" flex justify-center items-center bg-blue-950 text-white font-bold" >
       <nav className=" ">

          < a href="/" className="ml-5 hover:bg-red-500" >Home</a>
          < a href="About"className="ml-5 hover:bg-red-500">About</a>
          < a href="Contact"className="ml-5 hover:bg-red-500">Contact</a>
          < a href="Service"className="ml-5 hover:bg-red-500">Services</a>

       </nav>
       </div>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Users" element={<Users />} >
              <Route path=":id" element={<SingleUser />} />
              <Route path="create" element={<h1>Create User</h1>} />
            </Route>

            <Route path="/contact" element={<h1>Contact</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;