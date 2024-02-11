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
  function addItem(item) {
    item.id = items.length + 1;
    setItems((curItems) => [...curItems, item]);
  }
  function deleteItem(item) {
    setItems(curItems => curItems.filter(it => it !== item))
  }
  // const onUpdate = (item) => {
  //   setItems(curItems => {
  //     let correspondingItem = curItems.find(it => it.id === item.id);
  //     let index = curItems.indexOf(correspondingItem);
  //     curItems[index] = { ...item };
  //     return curItems;
  //   })
  // }
  function handleToggledItem(itemId) {
    setItems(curItems => curItems.map(it => itemId === it.id ? { ...it, packed: !it.packed } : it));

  }
  function clearList() {
    setItems([]);
  }


  return (
    <div className='app'>
      <Logo />
      <AddForm onAdd={addItem} />
      <List
        items={items}
        onDelete={deleteItem}
        onUpdate={handleToggledItem}
        clearList={clearList}
      />
      <Stats items={items} />

    </div>);

}
function Stats({ items }) {
  if (!items.length) {
    return (
      <div className='stats'>
        Add some items to packing list 🏖️
      </div>);
  }

  const numOfItems = items.length;
  const numOfPacked = items.filter(e => e.packed).length;
  const packedPercent =
    Math.round(numOfPacked / numOfItems * 100);
  if (numOfPacked === numOfItems) {
    return (
      <div className='stats'>
        All Items is packed  you're ready to go 🚀
      </div>
    );

  }

  return (<div className='stats' >
    You've  {numOfItems} items, and packed {numOfPacked} ({packedPercent}%)

  </div >)
}






function Logo() {
  return <h1>Travel List App</h1>
}

export default App;
