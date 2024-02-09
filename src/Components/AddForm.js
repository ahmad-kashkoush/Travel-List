export function AddForm({ onAdd }) {
    const handleAdding = (e) => {
        e.preventDefault();
        if (e.target[1].value === "") return;
        onAdd({
            amount: e.target[0].value,
            name: e.target[1].value
        });
        e.target.reset();

    }
    return (
        <form onSubmit={handleAdding} className='add-form'>
            <h3>Add Item🍕</h3>
            <select defaultValue={1}>
                <Options cnt={10} />
            </select>
            <input type="text" placeholder='Item...'></input>
            <button type="submit" >Add</button>
        </form>);
}
function Options({ cnt }) {
    const arr = [];
    for (let i = 0; i < cnt; i++)arr.push(i + 1);
    return <>
        {arr.map(i => <option>{i}</option>)}
    </>
}
