
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useState,useEffect,useRef } from 'react'
import Header from '../components/Head';

export default function Home() {
  const [toDo, setToDo]=useState('');
  const [fetch_todo,setFetch]=useState([]);
  const [comp_todo, setcomp_todo] = useState();
  const firstUpdate = useRef(true);
  const [active,setactive]=useState(true);
  const [loading,setLoading]=useState(true);
  const [all,setAll]=useState(true);
  const [act,setAct]=useState(false);
  const [comp,setComp]=useState(false);
  const [count,setCount]=useState(0);
 
 

  
const fetchToDo=async()=>{
  setLoading(false);
    const response= await fetch('/api/todolist')
    const data=await response.json()
  
    
    
    setLoading(true);
    setFetch(data);
    call_complte(data);
    
    setCount(data.length);
      }
const active_todo=async()=>{
  setLoading(false);
  const response= await fetch('/api/todolist')
  const data=await response.json()
 
      const dataa=data.filter((todo)=>{
       return todo.active===true;
      });
    
     setLoading(true);
      setFetch(dataa);
      setCount(dataa.length);
      
    }
const complete_todo=async()=>{
 
  const response= await fetch('/api/todolist')
  const data=await response.json()
 
      const dataa=data.filter((todo)=>{
        console.log("comp")
    return todo.active===false;
   });

call_complte(dataa);
   setFetch(dataa);
   
   

}
const call_complte=(data)=>{
  data.map((todo)=>{
    if(todo.active==false){
    setcomp_todo(todo.id);
   
    }
  })
}
const submitToDo=async()=>{
  if(toDo===''){
    alert("Enter to do list");
  }
  else{
  const response= await fetch('/api/todolist',{
  method:'POST',
  body:JSON.stringify({toDo}),
  headers:{
    'Content-Type':'application/json',
  },
})
fetchToDo();
}
}

const removeToDo=async(todoid)=>{
    const response= await fetch('/api/todolist',{
    method:'DELETE',
    body:JSON.stringify({todoid}),
    headers:{
      'Content-Type':'application/json',
    },
   })
fetchToDo();
}
const clear_comp=async()=>{
  setLoading(false);
  const response= await fetch('/api/todolist')
  const data=await response.json()
 
      data.map((todo)=>{
    if(todo.active===false){
      removeToDo(todo.id)
    }
   });
setLoading(true);
fetchToDo();
}
const setcomplete=async(todoid)=>{
  
  const response= await fetch('/api/todolist',{
    method:'PUT',
    body:JSON.stringify({todoid}),
    headers:{
      'Content-Type':'application/json',
    },
   })

setCount(count-1);
}


useEffect(async()=>{
  if (firstUpdate.current) {
    firstUpdate.current = false;
    return;

  }
  
 
    const d=document.getElementById(comp_todo);
   d.classList.toggle(styles.tick);
   console.log(d);
   console.log("d");
 d.nextSibling.classList.toggle(styles.la);
  
},[comp_todo,active])

useEffect(()=>{
  const al=document.getElementById("all");
  const acti=document.getElementById("active");
  const compl=document.getElementById("comp");
 
if(all===true){
al.style.color='hsl(220, 98%, 61%)';
acti.style.color='hsl(233, 11%, 84%)';
compl.style.color='hsl(233, 11%, 84%)';
}
else if(act===true){
  al.style.color='hsl(233, 11%, 84%)';
  acti.style.color='hsl(220, 98%, 61%)';
  compl.style.color='hsl(233, 11%, 84%)'
  
  }
 else if(comp===true){
    al.style.color='hsl(233, 11%, 84%)';
    acti.style.color='hsl(233, 11%, 84%)';
    compl.style.color='hsl(220, 98%, 61%)';
    
    }
},[all,comp,act])


  return (
    <div className={styles.container}>
     <Header />

      <main className={styles.main}>
        <div className={styles.flex}>
        <h1 className={styles.title}>
        TO DO
        </h1>
        <div>
        <Image src="/icon-moon.svg" alt="moon icon" height={26} width={26}/>
        </div>
        </div>

        <div className={styles.input}>
        <button className={styles.todo_input} onClick={submitToDo}>

        </button>
  <input type="text" value={toDo}
    onChange={e => { setToDo(e.target.value); }}
    ></input>
         </div>
        <>
        {loading?(
  fetch_todo.map(todo=>{
    return(
      <div key={todo.id} className={styles.inputGroup}>
<button onClick={()=>{
   setcomp_todo(todo.id);
   setactive(()=>active? false:true)
   setcomplete(todo.id);
}} id={todo.id} className={styles.todo_input_comp}
>
 
</button>

    <p className={styles.label} id={todo.id}>
    {todo.text}
    </p>
  
  
  
    
  
   
  
   <span className={styles.remove} onClick={(e)=>{removeToDo(todo.id)}}>
     <Image src="/icon-cross.svg" alt="delete todo" width={15}
     height={15}/>
   </span>
   </div>
    )
  })
  ):(<p>loading</p>)
  }
</>
       
   
<div className={styles.bottom_line}>
<div className={styles.items}>
  <p>{count} items left</p>
  </div>
  <div className={styles.ul}>
  <ul>
    <li id="all" onClick={()=>{
      fetchToDo();
      setAll(true);
      setComp(false);
      setAct(false)}}>All</li>
    <li id="active" onClick={()=>{
      active_todo();
      setAct(true);
      setAll(false);
      setComp(false);}}>Active</li>

    <li id="comp" onClick={()=>{
      complete_todo();
      setComp(true);
      setAct(false);
      setAll(false);}}>
      Completed</li>
  </ul>
</div>
<div className={styles.clear} onClick={clear_comp}>
  <p>Clear Completed</p>
</div>
</div>
   
 
        
        

      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
