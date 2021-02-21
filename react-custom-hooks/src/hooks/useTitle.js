import { useState, useEffect } from "react";

export function useTitle(initialTitle){
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
}

// const titleUpdater = useTitle("loading...");
// setTimeout(()=> titleUpdater("react"),5000);