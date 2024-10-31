import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'

const AddTodos = ({AddTodoHandler}:{AddTodoHandler:(title:string,desc:string)=>void}) => {


    const [state,setState] = useState({
        title:'',
        desc:''
    })

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const onSubmitHandler = (e:any)=>{
        e.preventDefault();


        try {
                if(!state.desc || !state.title){
                    throw new Error("Fill All Fields")
                }

            AddTodoHandler(state.title,state.desc);
            console.log("todo added");

            setState({
                 title:'',
        desc:''
            }) 
            

            toast.success("Todo Added :)")

        } catch (error:any) {
                    toast.error(error.message);
                    
        }
    }

  return (
    <>
            <form onSubmit={onSubmitHandler} className="container w-[90%] lg:w-[50%] mx-auto lg:px-24 py-10">
                <div className="mb-3">
                    <h1 className="text-5xl text-white">Add Todos</h1>
                </div>
                            <div className="mb-3">
                                <label htmlFor="title">Title</label>
                                <input id='title' onChange={onChangeHandler} name='title' type="text" className="w-full py-3 px-4 text-white border-white border rounded-md" value={state.title} placeholder='Todo Title....' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc">Description</label>
                                <textarea id='desc' onChange={onChangeHandler} name='desc' rows={5} cols={10} value={state.desc} className="w-full py-3 px-4 text-white border-white border rounded-md" placeholder='Todo Description....' />
                            </div>
                            <div className="mb-3 w-full">
                                <button className="py-3 w-full text-white bg-blue-500 rounded-md">Add Todo</button>
                            </div>
            </form>
    </>
  )
}

export default AddTodos