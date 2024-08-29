import React, { useEffect, useState } from "react";
import "../css/Content.scss";
import ContentHeader from "./ContentHeader.jsx";
import ContentBody from "./ContentBody";

export default function Content() {
  const [todoList, setTodoList] = useState([]);
  const [inProgressList, setInProgressList] = useState([
    {
      name: "salam1",
      description: "salam1",
      dateOfTast: "Apr 12",
      nullam:"Nullam Vellit"
    },
  ]);
  const [inReviewList, setInReview] = useState([
    {
      name: "salam2",
      description: "salam2",
      dateOfTast: "Apr 13",
      nullam:"Maecenas Lacus"
    },
    {
      name: "salam24",
      description: "sala442",
      dateOfTast: "Apr 15",
      nullam:"Eget Integer"
    },
  ]);
  const [doneList, setDoneList] = useState([
    {
      name: "salam3",
      description: "salam3",
      dateOfTast: "Apr 14",
      nullam:"Viverra Diam"
    },
  ]);

  const [newItem, setNewItem] = useState({
    name: "",
    descrition: "",
    dateOfTast: "",
  });
  useEffect(
    (e) => {
      if (newItem.name) {
        setTodoList([...todoList, newItem]);
      }
    },
    [newItem]
  );
  return (
    <div className="content">
      <ContentHeader setNewItem={setNewItem} />
      <ContentBody
        todoList={todoList}
        inProgressList={inProgressList}
        inReviewList={inReviewList}
        doneList={doneList}
      />
    </div>
  );
}
