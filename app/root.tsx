// "use client";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import AddTodos from "./components/AddTodos";
import AllTodos from "./components/AllTodos";
import { useEffect, useState } from "react";
import { toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {

 
      interface TodoType{
        id:number,
        title:string
        desc:string
        isComplete:boolean
      }


      //
    const [todos,setTodos] = useState<TodoType[]>([])


      useEffect(()=>{
            setTodos(JSON.parse(localStorage.getItem("todos")||"[]"))

      },[])

      const AddTodo=(title:string,desc:string)=>{
        const items:TodoType = {
          id:new Date().getTime(),
          title,
          desc,
          isComplete:false
        }
        setTodos([
          ...todos,
          items
      ])

            localStorage.setItem("todos",JSON.stringify([...todos,items]));

      }

      const DeleteTodo =(id:number)=>{
        const filterTodos =todos.filter((cur)=>cur.id!==id)
        setTodos(filterTodos);

        localStorage.setItem("todos",JSON.stringify(filterTodos));
          toast.warn("Todo Deleted :)")

      }

      const EditTodo =(id:number)=>{
        const filterTodos =todos.map((cur)=>{
            if(cur.id ===id){
              return {
                ...cur,
                isComplete:true
              }
            }
          return cur;
        })
        setTodos(filterTodos);

        localStorage.setItem("todos",JSON.stringify(filterTodos));
          toast.warn("Todo Edited :)")

      }



  return <>
    <ToastContainer/>
      <AddTodos AddTodoHandler={AddTodo} />
      <AllTodos todos={todos} deleteHandler={DeleteTodo} editHandler={EditTodo} />
  {/* <Outlet /> */}
  </>;
}
