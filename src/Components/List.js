import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
export function List({ items, onDelete, onUpdate, onChangeList }) {
    const [sortBy, setSortBy] = useState("amount");
    let sortItems;
    if (sortBy === "amount") sortItems = items.slice().sort((a, b) => a.amount - b.amount);
    // packed first
    if (sortBy === "status")
        sortItems = items.slice().sort((a, b) => a.packed - b.packed)
    if (sortBy === "name")
        sortItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div className='list'>
            <ul>
                {<>{sortItems
                    .map(item => <ListItem
                        key={uuidv4()}
                        task={item}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />)}
                </>}

            </ul>
            <div className='actions'>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="status">Sort by packed status</option>
                    <option value="amount">Sort by amount</option>
                    <option value="name">Sort by name</option>

                </select>
            </div>
        </div>)
}
function ListItem({ task, onDelete, onUpdate }) {
    const [isChecked, setIsChecked] = useState(task.packed);
    const handleChecked = e => {
        onUpdate({ ...task, packed: !isChecked })
        setIsChecked((i) => !i);
    }
    return <li>
        <input id={task.id} type="checkbox" defaultChecked={task.packed} onClick={handleChecked}></input>


        <label
            htmlFor={task.id}
            style={isChecked ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
            {task.amount} {task.name}
        </label>
        <button onClick={() => onDelete(task)}>❌</button>
    </li>
}
