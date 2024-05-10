import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login/login";
import ForgetPassword from "./forgetPassword/forgetPassword";
import GetOtp from "./getotp/getotp";
import Reset from "./resetPass/resetPass";
import Success from "./PassSuccess/PassSuccess";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword/>}></Route>
          <Route path="/getotp" element={<GetOtp />}></Route>
          <Route path="/resetPass" element={<Reset />}></Route>
          <Route path="/PassSuccess" element={<Success />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
