

import React, {useState, useEffect } from 'react';
import './style.css';


const UseEffect = () => {
              const intialData=0;
            const [myNum,setMyNum]= React.useState(intialData);
            // console.log(myNum);

            
            useEffect(()=>{
                document.title = `Chats(${myNum})`;
            });
              /*hum array dependency ka bhi use kr skte hien use kya hog jabhi users k notification aayege bas ek bhi hoga 
              to agr merea useState ka intial data myNum m hein to document.write krne p mujhe bas etna milega kin 
              */ 
            //  //with array dependecy
            //  useEffect(()=>{
            //     document.write=`Chats(${myNum})`;
            //  },[]);
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
    
     
    </div>
    </>
  );
};
 
 export default UseEffect;
