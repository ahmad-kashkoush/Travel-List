// import './App.css';
import './index copy.css';
import { useState } from 'react';
import { List } from './Components/List';
import { AddForm } from './Components/AddForm';
function App() {
  const [items, setItems] = useState([
    { amount: 10, name: "Ahmed", id: 1, packed: true },
    { amount: 5, name: "Said", id: 2, packed: false },
    { amount: 1, name: "Zeid", id: 3, packed: true }
  ]);
  const addItem = (item) => {
    item.id = items.length + 1;
    setItems((curItems) => [...curItems, item]);
  }
  const deleteItem = (item) => {
    setItems(curItems => {
      return [...curItems].filter(it => it !== item);
    })
  }
  const onUpdate = (item) => {
    setItems(curItems => {
      let correspondingItem = curItems.find(it => it.id === item.id);
      let index = curItems.indexOf(correspondingItem);
      curItems[index] = { ...item };
      return curItems;
    })
  }
  const onChangeList = newItems => {
    setItems(() => newItems);
    console.log(newItems);
  }


  return (
    <div className='app'>
      <Logo />
      <AddForm onAdd={addItem} />
      <List
        items={items}
        onDelete={deleteItem}
        onUpdate={onUpdate}
      />
    </div>);

}
function Logo() {
  return <h1>Travel List App</h1>
}

export default App;
