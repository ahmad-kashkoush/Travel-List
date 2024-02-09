export function List({ items, onDelete }) {
    return (
        <div className='list'>
            <ul>
                {<>
                    {items.map(item => <ListItem key={item} task={item} onDelete={onDelete} />)}
                </>}

            </ul>
        </div>)
}
function ListItem({ task, onDelete }) {
    return <li>
        <input id="chkBx" type="checkbox"></input>
        <label for="chkBx">{task.amount}  {task.name}</label>
        <button onClick={() => onDelete(task)}>❌</button>
    </li>
}