import React from "react";

const Form = ({ setInputText, todos, setTodos, InputText, setFilter })=>{
    const inputTextHandler= (e)=>{
        // console.log(e.target.value);
        setInputText(e.target.value);

    }
    const submitTodoHandler= (e)=>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text: InputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }
    const filterhandler = (e) =>{
        setFilter(e.target.value);
        // console.log(e.target.value)
    }
    return (
        <form>
            <input value={InputText} onChange={ inputTextHandler } type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" onChange={filterhandler}>
                <select name="todo" className="filter-todo">
                    <option value="all">Tous</option>
                    <option value="completed">Complété</option>
                    <option value="uncompleted">Inachevé</option>
                </select>
            </div>
        </form>
    );
}
export default Form;
