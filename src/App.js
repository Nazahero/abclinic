import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowserMain from "./browser/views/Main";
import MobileMain from "./mobile/views/Main";


function App(props) {
  console.log("pid");

    return (
      <BrowserRouter>

        <MobileView>
          
              <Routes>
                <Route path="/" element={<MobileMain pack={props.ru} />} />
                <Route path="/ru" element={<MobileMain pack={props.ru} />} />
                <Route path="/en" element={<MobileMain pack={props.en} />} />
              </Routes>
      
        </MobileView>

        <BrowserView>
   
              <Routes>
                <Route path="/" element={<BrowserMain pack={props.ru} />} />
                <Route path="/ru" element={<BrowserMain pack={props.ru} />} />
                <Route path="/en" element={<BrowserMain pack={props.en} />} />
              </Routes>
              
        </BrowserView>

      </BrowserRouter>
    );
  
} 

export default App;
 