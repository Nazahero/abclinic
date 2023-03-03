import { useLayoutEffect , useState } from 'react';
import { isMobile } from "react-device-detect";
import {BrowserJs} from "./browser/script";
import {MobileJs} from "./mobile/script";


function Start() {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => { 
      console.log('effect')
      if (count < 1) {
        if (isMobile) {
          MobileJs();
        } else {
          BrowserJs();
        }
        setCount(2);
      }
    }, []);
}

export default Start;