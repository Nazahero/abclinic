import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";

function App(props) {

  return (
    <BrowserRouter>
      <div className="wrapper">
          <Routes>
            <Route path="/" element={<Main pack={props.ru} />} />
            <Route path="/ru" element={<Main pack={props.ru} />} />
            <Route path="/en" element={<Main pack={props.en} />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
} 

export default App;
 