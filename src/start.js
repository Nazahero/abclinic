import { useLayoutEffect , useState } from 'react';
import { isMobile } from "react-device-detect";
import {BrowserJs} from "./browser/script";
import {MobileJs} from "./mobile/script";


function useStart() {
    const [count, setCount] = useState(0);
    function Js() {
      if (count < 1) {
        if (isMobile) {
          MobileJs();
        } else {
          BrowserJs();
        }
        setCount(2);
      }
    }
    return Js;
}

export default useStart;