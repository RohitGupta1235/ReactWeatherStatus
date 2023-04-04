import React, { useState } from "react"; 
import './style.css';


const UseState = () => {
              const intialData=0;
            const [myNum,setMyNum]= React.useState(intialData);
            // console.log(myNum);
  return (
    <>
    <div className='center_div'>
        <p>{myNum}</p>
        <div class='button2' onClick={()=>setMyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
          INCR
        </div>
      <div class='button2' onClick={()=> myNum > 0?setMyNum(myNum -1):setMyNum(0)}>
        <span></span>
       
           <span></span>
           <span></span>
           <span></span>
           <span></span>
          <span></span>
            DECR
      </div>
    </div>
    </>
  );
};
 
 export default UseState;
