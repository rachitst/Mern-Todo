import Todo from "../model/Todo.js"

export const addTodo = async (request,response)=>{
    try {
        const newTodo = await Todo.create({
            text: request.body.text,
            content : request.body.content,
            createdAt : Date.now()
        })
    
        await newTodo.save()
        response.status(200).json(newTodo)
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getTodos = async (request,response)=>{
    try {
        const Todos = await Todo.find({}).sort({'createdAt': -1})
        return response.status(200).json(Todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const toggleTodoDone = async (request,response)=>{
    try {
        const todoRef = await Todo.findById(request.params.id);
        const todo = await Todo.findOneAndUpdate({_id : request.params.id},{done : !todoRef.done})
        await todo.save();
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const updateTodo = async (request,response)=>{
    try {
        await Todo.findOneAndUpdate(
            {_id : request.params.id},
            {text : request.body.text,content: request.body.content},
        )
        const todo = await Todo.findById(request.params.id);

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const deleteTodo = async (request,response)=>{
    try {
        const todo = await Todo.findByIdAndDelete(request.params.id)
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}