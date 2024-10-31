import React from 'react'
import { MdClose, MdEdit } from 'react-icons/md'
interface TodoType{
    id:number,
    title:string
    desc:string
    isComplete:boolean
  }
const AllTodos = ({todos,deleteHandler,editHandler}:{todos:TodoType[],deleteHandler:(id:number)=>void,editHandler:(id:number)=>void}) => {
  return (
    <div className='w-full lg:px-24 py-10'>

                <div className="mb-3">
                    <h1 className="text-4xl">All Todos({todos && todos.length})</h1>
                </div>

                        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-3">
                        {
                       todos && todos.length>0 &&todos.map((cur,i)=>{
                            return <div className='w-full py-3 border shadow-sm shadow-white rounded-md px-4' key={i}>

                                        <div className="mb-3 flex items-center justify-between">
                                            <h1 className={`text-xl
                                                ${cur.isComplete?'line-through':''}
                                              `}>{cur.title}</h1>
                                               <div className="flex items-center gap-x-2">
                                               <button onClick={()=>deleteHandler(cur.id)} className="text-3xl bg-gray-500 p-2 rounded-full">   <MdClose/></button>
                                             {!cur.isComplete &&  <button onClick={()=>editHandler(cur.id)} className="text-3xl bg-orange-500 p-2 rounded-full">   <MdEdit/></button>}
                                               </div>
                                        </div>
                                        <div className="mb-3">
                                           {cur.desc}
                                        </div>

                            </div>
                        })
                    }
                        </div>
                
    </div>
  )
}

export default AllTodos