import "./App.css";
import { useState } from "react";
import "../src/Components/Container";
import { PlusCircleOutlined } from "@ant-design/icons";

import Container from "../src/Components/Container";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selects, setSelects] = useState("");
  const [select, setSelect] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [filterCategory, setFilterCategory] = useState(0);
  function IsChanged() {
    setIsChecked(!isChecked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      text: todo,
      categoryId: parseInt(selectedValue),
      completed: isChecked,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  }
  function addCategory(e) {
    e.preventDefault();
    const newCategory = {
      text: selects,
      id: select.length === 0 ? 1 : select[select.length - 1].id + 1,
    };

    if (select.length === 0) {
      setSelectedValue(1);
    }
    setSelect([...select, newCategory]);
    setSelects("");
  }

  return (
    <div className="App">
      <header className="Header">
        <div className="todoapp">To Do APP</div>
      </header>
      <div className="headers">
        <span className="header2">Add Categories</span>
        <span className="header3">Select Categories</span>
      </div>
      <form className="form">
        <div className="addcategories">
          <input
            onChange={(e) => setSelects(e.target.value)}
            type="text"
            value={selects}
            className="input2"
          />
          <button onClick={addCategory}>
            <PlusCircleOutlined />
          </button>
        </div>
        <div className="cekput">
          <input
            type="text"
            className="input"
            value={todo}
            placeholder="Enter a new todo"
            onChange={(e) => setTodo(e.target.value)}
          ></input>
          <input type="checkbox" className="cek" onChange={IsChanged} />
        </div>
        <button type="submit" className="buton" onClick={handleSubmit}>
          Do It
        </button>
        <select
          className="categories"
          name="categories"
          onChange={(a) => setSelectedValue(a.target.value)}
        >
          {select.map((selects) => (
            <option key={selects.id} value={selects.id} id={"my-element"}>
              {selects.text}
            </option>
          ))}
        </select>
      </form>
      <Container
        setTodo={setTodos}
        todo={
          filterCategory > 0
            ? todos.filter((x) => x.categoryId === filterCategory)
            : todos
        }
        selects={select}
      />

      <div className="botselect">
        <button
          className="bottombuton"
          value={0}
          key={0}
          onClick={(e) => setFilterCategory(e.target.value)}
        >
          ALL
        </button>
        {select.map((selects) => (
          <button
            className="bottombuton"
            value={selects.id}
            key={selects.id}
            onClick={(e) => setFilterCategory(e.target.value)}
          >
            {selects.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
