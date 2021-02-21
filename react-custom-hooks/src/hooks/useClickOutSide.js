import { useRef, useEffect } from 'react';

export function useClickOutSide(fn){
  const ref = useRef(null);
  const handleClick = e => {
    if(ref.current && !ref.current.contains(e.target)){
      // console.log("clicked outside");
      fn();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click",handleClick, true);
    };
  },[]);
  return ref;
}