export const addTodo=(message)=>{
    return{
        type:"Add_Todo",
        message,
        id:Math.random(),
    }
}

export const deleteTodo=(id)=>{
    return {
        type:"Delete_Todo",
        id
    }
}