import { useEffect, useState } from "react";

function MyComponent () {
  const [count, setCount] = useState(0);
  //const [text, setText] = useState("");
  const [date, setDate] = useState(new Date ())  

  const tick = () =>{
    console.log("Clock ticking");
    setDate(new Date ())
  }


  const addClick = () =>{
    setCount((prevCount) => prevCount + 1)
  }

  //useEffect takes a function as parameter where the function runs for rendering like every rendering update,click, add we just name it.

  useEffect(() =>{
    console.log(`Updating documnet title`)
    document.title = `Clicked ${count} times.`;
  },[count])

  useEffect(() =>{
    console.log(`tikcing`);
    const interval = setInterval(tick, 1000);

    return () =>{
      clearInterval(interval);
    }
  },[]) // [] blank array means that has no dependencies so it runs/renders 1st time only but tick function continues after 1 sec each



  return (
    <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        {/* <input type="text" value={text} onChange={(e) => setText(e.target.value)}/> */}
        <p>
            <button type="button" onClick={addClick}>
                Click Me
            </button>
        </p>
    </div>
  );
}

export default MyComponent;