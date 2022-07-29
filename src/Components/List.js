import React from "react";
import "./Container";
import "antd/dist/antd.css";
import { DeleteOutlined } from "@ant-design/icons";
const Listcontainer = (props) => {
  const { index, todo, todos, selects, setTodo } = props;

  function deletefunction(index) {
    console.log(index);
    console.log(todos);
    let arr = todos.filter((value, i) => {
      return i === index ? null : value;
    });
    setTodo(arr);
  }

  console.log("todo", selects);

  return (
    <li
      style={{ backgroundColor: todo.completed ? "green" : "red" }}
      key={index}
      className="listItem"
    >
      <div className="telete">
        <span>{todo.text}</span>
        <button
          className="delete"
          key={index}
          onClick={() => deletefunction(index)}
        >
          <DeleteOutlined />
        </button>
        <div className="kategori">
          <span>{selects.find((x) => x.id === todo.categoryId).text}</span>
        </div>
      </div>
    </li>
  );
};
export default Listcontainer;
