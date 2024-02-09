import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
export function List({ items, onDelete, onUpdate, onChangeList }) {
    return (
        <div className='list'>
            <ul>
                {<>{items
                    .map(item => <ListItem
                        key={uuidv4()}
                        task={item}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />)}
                </>}

            </ul>
            <Sort items={items} onChangeList={onChangeList} />
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