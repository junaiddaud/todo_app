import {todolist} from '../../../data/todolist'
export default function handler(req,res){

    if(req.method==='GET'){
        res.status(200).json(todolist)
       
        }
        else if(req.method==='POST') {
            const todo=req.body.toDo
            const newToDo={
            id:Date.now(),
            
             text:todo,
             active:true
            }
            todolist.push(newToDo)
            res.status(201).json(newToDo)
    }
    else if(req.method==='DELETE'){
        const dlt=req.body.todoid
        const dltToDo=todolist.find((todo)=>{
            todo.id===parseInt(dlt)
        });
        const index=todolist.findIndex(
            (todo)=> todo.id===parseInt(dlt)
        )
       
        todolist.splice(index,1)
        res.status(200).json(dltToDo)
    }
    else if(req.method==='PUT'){
        const dlt=req.body.todoid
        const dltToDo=todolist.find((todo)=>{
            todo.id===parseInt(dlt)
        });
        const index=todolist.findIndex(
            (todo)=> todo.id===parseInt(dlt)
        )
       if(todolist[index].active===false){
        todolist[index].active=true;
       }
       else{
        todolist[index].active=false;
       }
       res.status(204).json(dltToDo);
     
     
    }
   
}