// import './App.css';
import './index copy.css';
import { useState } from 'react';
import { List } from './Components/List';
import { AddForm } from './Components/AddForm';
function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems((curItems) => [...curItems, item]);
  }
  const deleteItem = (item) => {
    setItems(curItems => {
      return [...curItems].filter(it => it !== item);
    })
  }
  return (
    <div className='app'>
      <Logo />
      <AddForm onAdd={addItem} />
      <List items={items} onDelete={deleteItem} />
    </div>);

}
function Logo() {
  return <h1>Travel List App</h1>
}

export default App;
