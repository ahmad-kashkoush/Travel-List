export function AddForm({ onAdd }) {
    const handleAdding = (e) => {
        e.preventDefault();
        if (e.target[1].value === "") return;
        onAdd({
            amount: parseInt(e.target[0].value),
            name: e.target[1].value,
            packed: false
        });
        e.target.reset();

    }
    return (
        <form onSubmit={handleAdding} className='add-form'>
            <h3>Add Item🍕</h3>
            <select defaultValue={1}>
                {
                    // Use Array.From Instead of normal For LOOP:star
                    Array.from({ length: 20 }, ((_, i) => i + 1)).map(i => <option key={i}>{i}</option>)
                }
            </select>
            <input type="text" placeholder='Item...'></input>
            <button type="submit" >Add</button>
        </form>);
}
