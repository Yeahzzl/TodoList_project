import React, { useState } from "react";
import "./App.css";

// 해야할 것
// 1. isDone의 false와 true를 이용해서 완료하면 clear로, 취소하면 working으로 이동
// 2. input값이 비어있을때 등록하기를 누르면 '내용을 입력하세요' 띄우기

const TodoAdd = (props) => {
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
  const addBtn = () => {
    const workingTodo = {
      id: Date.now(),
      title: title,
      text: text,
      isDone: false,
    };
    setList([...list, workingTodo]);
  };

  const onSubmit = (e) => {
    // form태그를 사용하면 자동으로 새로고침 현상이 발생함 -> preventDefault() 로 해당이벤트의 기본동작을 실행하지 않도록 해줘야함
    e.preventDefault();
    // 빈값일때 내용을 입력하라는 alert창 띄우기
    // 근데 왜 카드가 붙지.....?
    if (title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    if (text === "") {
      alert("내용을 입력해주세요");
      return;
    }
    // 등록하기 버튼 누르면 input값 초기화시키기
    setText("");
    setTitle("");
  };

  // 삭제하기 버튼
  const deleteBtn = (id) => {
    const deleteTodo = list.filter(function (list) {
      return list.id !== id;
    });
    setList(deleteTodo);
  };
  // 완료하기 버튼
  const onToggle = (id) => {
    setList(
      list.map((addBtn) =>
        addBtn.id === id ? { ...addBtn, isDone: !addBtn.isDone } : addBtn
      )
    );
    setList(onToggle);
  };

  // 취소하기 버튼
  // const cancelBtn = () => {};

  //------------------------------------------
  return (
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
          <button className="Add_button" onClick={addBtn}>
            등록하기
          </button>
        </div>
      </form>

      <div className="List_container">
        <h1 className="List_title">👩🏻‍💻 Working 🧑🏻‍💻</h1>

        <div className="List_box">
          {list
            .filter((list) => {
              return list.isDone === false;
            })
            .map((item) => {
              return (
                <div>
                  <div key={item.id} className="Todo_box">
                    <h3 className="Todo_title">{item.title}</h3>
                    <p className="Todo_text">{item.text}</p>
                    <div className="Button_box">
                      <button
                        className="Delete_button"
                        onClick={() => deleteBtn(item.id)}
                      >
                        삭제하기
                      </button>

                      <button className="Clear_button" onClick={onToggle}>
                        완료
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <h1 className="List_title">🙆🏻‍♀️ Clear 🙆🏻‍♂️</h1>
      <div className="List_box">
        {list
          .filter((list) => {
            return list.isDone === true;
          })
          .map((item) => {
            return (
              <div>
                <div key={item.id} className="Todo_box">
                  <h3 className="Todo_title">{item.title}</h3>
                  <p className="Todo_text">{item.text}</p>
                  <div className="Button_box">
                    <button
                      className="Delete_button"
                      onClick={() => deleteBtn(item.id)}
                    >
                      삭제하기
                    </button>

                    <button
                      className="Cancel_button"
                      // onClick="onToggle"
                    >
                      취소
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* <div className="Todo_box">
          <h3 className="Todo_title">제목을 넣어주세요</h3>
          <p className="Todo_text">할일을 넣어주세요</p>
          <div className="Button_box">
            <button className="Delete_button">삭제하기</button>
            <button className="Cancel_button">취소</button>
          </div>
        </div> */}
    </div>
  );
};

export default TodoAdd;
