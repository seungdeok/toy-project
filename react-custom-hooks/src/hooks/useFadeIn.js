import React, { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  if(typeof duration !== 'number' || typeof delay !== 'number'){
    return;
  }
  const el = useRef();
  useEffect(() => {
    if(el.current){
      const { current } = el;
      current.style.transition = `opacity ${duration}s easy-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: el, style: { opacity: 0 } };
};

const App = () => {
  const fadeInDiv = useFadeIn(3,0);
  return (
    <div {...fadeInDiv} >FADE IN</div>
  )
}