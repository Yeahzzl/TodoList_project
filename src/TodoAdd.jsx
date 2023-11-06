import React, { useState } from "react";
import "./App.css";
import TodoCard from "./component/TodoCard";

const TodoAdd = () => {
  const [list, setList] = useState([]);
  // { id: "", title: "", text: "" }

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  // 등록하기 버튼
  // 버튼에는 이미 클릭이벤트가 있기 때문에 굳이 안넣어도됨! -> form의 onSubmit에 한번에 가능
  // const addBtn = () => {
  // };

  // isDone이 false인 것만 필터링
  const workingTodo = list.filter((list) => {
    return !list.isDone;
  });

  // isDone이 true인 것만 필터링
  const clearTodo = list.filter((list) => {
    return list.isDone;
  });

  const onSubmit = (e) => {
    // form태그를 사용하면 자동으로 새로고침 현상이 발생함 -> preventDefault() 로 해당이벤트의 기본동작을 실행하지 않도록 해줘야함
    // 가장 상단에 위치해야 새로고침 현상을 방지할 수 있음.... 중간에 넣었다가 alert창 나오고 다 사라지는
    e.preventDefault();

    // 빈값일때 내용을 입력하라는 alert창 띄우기
    // 근데 왜 카드가 붙지.....? addBtn이 실행된 후에 alert창이 띄워지는 순서였기 때문이었음!!!! 순서중요!!!
    if (title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    if (text === "") {
      alert("내용을 입력해주세요");
      return;
    }

    const setTodo = {
      id: Date.now(),
      title: title,
      text: text,
      isDone: false,
    };
    setList([...list, setTodo]);
    // 등록하기 버튼 누르면 input값 초기화시키기
    setText("");
    setTitle("");
  };

  return (
    <div>
      <div className="Container">
        <header className="Header_text">✍🏻 To Do List</header>

        <form className="Input_form" onSubmit={onSubmit}>
          <div className="Input_group">
            <span className="Title_name">제목</span>
            <input
              type="text"
              className="Title_input"
              value={title}
              onChange={titleChangeHandler}
            />
            <span className="List_name">할일</span>
            <input
              type="text"
              className="List_input"
              value={text}
              onChange={textChangeHandler}
            />
            <button className="Add_button">등록하기</button>
          </div>
        </form>
      </div>
      {/* Working이 그려지는 부분 */}
      <div className="List_container">
        <h1 className="List_title">👩🏻‍💻 Working 🧑🏻‍💻</h1>
        <div className="List_box">
          {workingTodo.map((item) => {
            return (
              <TodoCard
                key={item.id}
                item={item}
                list={list}
                setList={setList}
                clearTodo={clearTodo}
              />
            );
          })}
        </div>
      </div>

      {/* Clear가 그려지는 부분 */}
      <div className="List_container">
        <h1 className="List_title">🙆🏻‍♀️ Clear 🙆🏻‍♂️</h1>
        <div className="List_box">
          {clearTodo.map((item) => {
            return (
              <TodoCard
                key={item.id}
                item={item}
                list={list}
                setList={setList}
                clearTodo={clearTodo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoAdd;
