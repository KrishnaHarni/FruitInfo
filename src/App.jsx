import { useEffect, useState } from "react";
import "./App.css";
import FruitsDetails from "./components/FruitsDetails.jsx";
import fruits from "./utility/fruits.js";

function App() {
  const [fruitName, setFruitName] = useState("");
  let [req, setReq] = useState(0);

  function handler(e) {
    setFruitName(e.target.value);
  }

  function search() {
    for (let i = 0; i < fruits.length; i++) {
      if (fruitName.toLowerCase() == fruits[i].name.toLowerCase()) {
        setReq(i);
      }
    }
    setFruitName("");
  }

  return (
    <>
      <h1 className="text-rose-600 font-bold text-4xl italic text-center p-7">
        FRUITS
      </h1>
      <input
        className="text-xl bg-lime-100 p-2 rounded-lg w-[300px] flex mx-auto m-2"
        type="text"
        placeholder="Enter fruit name"
        value={fruitName}
        onChange={(e) => {
          handler(e);
        }}
      />
      <button
        className="bg-lime-300 rounded-xl px-5 py-1 text-2xl flex mx-auto cursor-pointer hover:scale-110 duration-300"
        onClick={search}
      >
        Search
      </button>
      <FruitsDetails index={req} />
    </>
  );
}

export default App;
