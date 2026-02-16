import { useState, useCallback } from "react" ;


export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState("")


  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // let [menuItems, setMenuItems] = useState(initialMenuItems)


  let [filter, setFilter] = useState("")


  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.


  let addMenuItem = useCallback(() => {
    const newitem = document.getElementById("newMenuItemValue").value;
    document.getElementById("newMenuItemValue").value = "";

    setNewMenuItem([...previousitems, newitem]);
    console.log("Added menu item")


    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])


  }

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.

 
  const [previousitems, setpreviousitems] = useState (['Albert Eggstein',
            'Attila the Hen',]);

  

  return (
    <div>
      <ul>
       {initialMenuItems.map((initialMenuItems, index) => <li key={index}></li>)}


      </ul>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={addMenuItem}>
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  );
}