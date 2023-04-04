import React,{useState,useEffect } from "react";
import "./style.css";
//get the local sto('rage data back
const getLocalData =()=>{
  const lists =localStorage.getItem("mytodolist");
  if(lists)
  return JSON.parse(lists);
  else{
    return [];
  }
};

const Todo = () => {
  const [inputdata,setInputData]=useState("");
  const [items,setItems]=useState(getLocalData());
  const [isEditItem,setISEditItem]=useState("");
  const[toggleButton,setToggleButton]=useState(false);
  // add the item function
  const addItem =()=>{
    if(!inputdata)
    alert("plzz fill the data");
    else if(inputdata && toggleButton){
         setItems(
          items.map((currElem)=>{
          if(currElem.id===isEditItem){
            return{...currElem,name:inputdata};

          }
          return currElem;
        }
          )
         )
         setInputData("");
         setISEditItem([]);
         setToggleButton(false);

    }
    else{
      const myNewInputData ={
           id: new Date().getTime().toString(),
           name:inputdata,
      };
      setItems([...items,myNewInputData]);
      setInputData(""); 
    }
  };
  //how to delete item section 
  //delete item ke andar jo merea argument hein usme hum id pass kar rhe hein to we check whether that id will m atch to the item 
  const deleteItem =(index)=>{
   const updatedItems=items.filter((currElem)=>{
    return currElem.id !==index;

   });
     setItems(updatedItems);
  };

  const removeAll =()=>{
    setItems([]);
  };
//how to edit the item section
const editItem=(index)=>{
   const item_todo_edited = items.find((currElem)=>{
           return currElem.id===index;
});

 setInputData(item_todo_edited.name);
setISEditItem(index);
setToggleButton(true);

};
//adding local storage
useEffect(()=>{
   localStorage.setItem("mytodolist",JSON.stringify(items));
},[items])

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todolog" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️Add Item"
              className="form-control"
              value={inputdata}
              onChange={(event)=>setInputData(event.target.value)}
            />
            {/* <i className="fa fa-plus add-btn"></i> */}
          
              {toggleButton ?(  <i className="far fa-edit add-btn" onClick={addItem}></i>): (  <i className="fa fa-plus add-btn" onClick={addItem}></i>
              )}
          </div>
                {/* show our items */}
                 <div className="showItems">
                  {items.map((currElem)=>{
                    return(
                      <div className="eachItem" key={currElem.id}>
                      <h3>{currElem.name}</h3>
                      <div className="todo-btn">
                      <i className="far fa-edit add-btn" onClick={()=>editItem(currElem.id)}></i>
                      <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currElem.id)}></i>
                      </div>
                    </div>
                  
  
                    );
                  })}
                   </div>
  
                 

            {/* remove all button */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span>CHECK LIST</span>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
