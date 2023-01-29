import { useEffect } from 'react';
import { jsScript } from './script';
import Main from "./views/Main";

function App(props) {
  useEffect(() => {
    jsScript();
  }, []);

  return (
      <div className="wrapper">
        <Main services={props.services} /> 
      </div>
  );
} 

export default App;
 