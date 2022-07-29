import React from "react";
import "./container.css";
import Listcontainer from "./List";
const Container = (props) => {
  const { todo } = props;
  return (
    <ol className="a">
      {props.todo.map((item, index) => {
        return (
          <Listcontainer
            selects={props.selects}
            setTodo={props.setTodo}
            todo={item}
            todos={todo}
            index={index}
            key={index}
          />
        );
      })}
    </ol>
  );
};
export default Container;
