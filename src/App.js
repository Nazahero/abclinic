import React from "react";
import Main from "./views/Main";

function App(props) {
  return (
      <div className="wrapper">
        <Main services={props.services} /> 
      </div>
  );
} 

export default App;
