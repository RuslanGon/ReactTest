import { useRef} from "react";

const RefExample = () => {
  const buttonRef = useRef(null);

  
    console.log(buttonRef); 
  

  return (
    <div>
      <button ref={buttonRef}>Click to do</button>
      <input type="text" placeholder="enter something" />
    </div>
  );
};

export default RefExample;