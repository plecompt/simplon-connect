import { useState } from "react";

const initialNames = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];

function ShuffleList() {
  const [names, setNames] = useState(initialNames);

  const shuffle = () => {
    setNames([...names].sort(() => Math.random() - 0.5));
  };

  return (
    <div>
      <button onClick={shuffle} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Mélanger</button>
      <ul>
        {names.map((person, index) => (
          <li className="mb-4 p-4 border rounded flex items-center gap-4 bg-gray-50" key={person.id}>
            <span className="font-semibold w-24"> {index}. {person.name}</span>
            <input type="checkbox"/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShuffleList;