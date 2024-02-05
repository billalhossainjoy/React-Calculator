import { useState } from "react";
import photo from '/image/2.webp'

function App() {
  const [state,setState] = useState('');

  function handle(e){
    setState(prev=>`${prev}${e.target.value}`)
  }
  function equal (){
    try {
      setState(eval(state).toString());
    } catch (error) {
      if(error) setState("invalid result press AC");
    }
  }

  return (
    <div className=" bg-gradient-to-l from-pink-500 to-orange-300 h-screen flex justify-around items-center"> 
    <div>
      <div className="cal-bg">
        <div><img src={photo} alt="" className=" w-[700px]" /></div>
      </div>
    </div>
      <div className="Calculator grid grid-cols-4 text-xl p-3 rounded-xl border border-black/50">
        <div className="display bg-white col-span-4 row-span-1 rounded-xl h-24 m-1 px-3 flex flex-col items-end">
          <div className="icons text-sm w-full"><div className="transform rotate-90 inline-block">🔋</div></div>
          <input type="text" className=" w-full flex outline-none text-right cursor-default pointer-events-none text-2xl" value={state}/>
        </div>
          <button onClick={()=>{setState("")}} className=" col-span-2 bg-red-600 text-white">AC</button>
          <button onClick={()=>setState(state.slice(0,-1))} className=" bg-pink-600 text-white">DEL</button>
          <button value={'/'} onClick={(e)=>{handle(e)}} className=" bg-blue-800 text-white hover:text-black">÷</button>
          <button value={'1'} onClick={(e)=>{handle(e)}}>1</button>
          <button value={'2'} onClick={(e)=>{handle(e)}}>2</button>
          <button value={'3'} onClick={(e)=>{handle(e)}}>3</button>
          <button value={'*'} onClick={(e)=>{handle(e)}} className=" bg-blue-800  text-white hover:text-black">*</button>
          <button value={'4'} onClick={(e)=>{handle(e)}}>4</button>
          <button value={'5'} onClick={(e)=>{handle(e)}}>5</button>
          <button value={'6'} onClick={(e)=>{handle(e)}}>6</button>
          <button value={'+'} onClick={(e)=>{handle(e)}} className=" bg-blue-800  text-white hover:text-black">+</button>
          <button value={'7'} onClick={(e)=>{handle(e)}}>7</button>
          <button value={'8'} onClick={(e)=>{handle(e)}}>8</button>
          <button value={'9'} onClick={(e)=>{handle(e)}}>9</button>
          <button value={'-'} onClick={(e)=>{handle(e)}} className=" bg-blue-800  text-white hover:text-black">-</button>
          <button value={'.'} onClick={(e)=>{handle(e)}}>.</button>
          <button value={'0'} onClick={(e)=>{handle(e)}}>0</button>
          <button onClick={()=>{equal()}} className="col-span-2 bg-blue-800  text-white hover:text-black">=</button>
        </div>
    </div>
  );
}

export default App;
