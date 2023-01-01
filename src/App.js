import { Route, Routes } from "react-router-dom";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
