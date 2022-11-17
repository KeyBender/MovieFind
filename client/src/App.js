import "./App.css";
import SignInSide from "./views/SignIn";
import SignUpSide from "./views/SignUp";
import Index from "./views/Index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/signin" element={<SignInSide/>}/>
        <Route path="/signup" element={<SignUpSide/>}/>
      </Routes>
    </div>
  );
}

export default App;
