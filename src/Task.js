import './Task.css'
const Task = ({items, setItems, count, setCount}) => {
    const handleClick = (event, index) => {
        let temp = [...items]
        if(!temp[index].done) setCount(count-1)
        else setCount(count+1)
        temp[index].done = !temp[index].done
        setItems(temp)
    }
    const handleEdit = (event, index) => {
        let newTask = prompt('Enter the change')
        if(newTask){
            let temp = [...items]
            temp[index].task = newTask
            setItems(temp)
        }
    }
    const handleDelete = (event, index) => {
        let temp = [...items]
        if(!items[index].done)
            setCount(count-1)
        temp.splice(index, 1)
        setItems(temp)
    }

    return ( 
        <>
            {items.map((item, index) => (
                <li key={index}>
                    <input type="checkbox" checked={items[index].done} onChange={(event) => handleClick(event, index)} />
                    {item.task}
                    <div className="btns">
                        <button onClick={(event) => handleEdit(event, index)}>Edit</button>
                        <button onClick={(event) => handleDelete(event, index)}>Delete</button>
                    </div>
                </li>
            ))}
        </>
     );
}
 
export default Task;