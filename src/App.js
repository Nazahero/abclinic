import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect , useState } from 'react'
import Main from "./views/Main";
import {MainJs} from "./script";

function App(props) {
    const [count, setCount] = useState(0);
    useEffect(() => { 
      console.log('effect')
      if (count < 1) {
        MainJs();
        setCount(count + 1);
      }
    })
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
 