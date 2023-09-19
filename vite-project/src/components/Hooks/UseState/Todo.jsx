import {useState}   from "react";

export default function Todo() {
    const [todo,setTodo] = useState({
        title: '',
        description: '',
    });
    const {title,description} = todo;
    // const [warning,setWarning] = useState(null);

    // const handleinput = (e) => {
    //     const inputValue = e.target.value;
    //     const warning = inputValue.includes('.js') 
    //     ?"You need JavaScript skill to complete the task. Do you have it?"
    //     :null;
    //     setTodo(inputValue);
    //     setWarning(warning);
    // };
    return (
        <div>
            <p>{title}</p>
            <p>
                <textarea name="title" 
                    value={title} 
                    onChange={(e)=>setTodo({...todo,title:e.target.value})}
                />
                <hr/>
                {/* <h2>{warning || 'Good choice!'}</h2> */}
            </p>
            <p>
                <textarea name="description" 
                    value={description} 
                    onChange={(e)=>setTodo({...todo,description:e.target.value})}
                />
                <hr/>
                {/* <h2>{warning || 'Good choice!'}</h2> */}
            </p>
        </div>
    );
}