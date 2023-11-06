import OnToggle from "./OnToggle";

// TODO: Working 컴포넌트 하나로 Working과 Clear 둘다 쓰고 있음, 따라서 컴포넌트 이름이 좀 더 공통적인 이름으로 바꾸면 좋을 것 같음 -> 변경완료
const TodoCard = ({ item, list, setList, clearTodo }) => {
  // 삭제하기 버튼
  const deleteBtn = (id) => {
    const deleteTodo = list.filter((list) => {
      return list.id !== id;
    });
    setList(deleteTodo);
  };

  return (
    <div>
      <div key={item.id} className="Todo_box">
        <h3 className="Todo_title">{item.title}</h3>
        <p className="Todo_text">{item.text}</p>
        <div className="Button_box">
          <button className="Delete_button" onClick={() => deleteBtn(item.id)}>
            삭제하기
          </button>
          <OnToggle
            setList={setList}
            item={item}
            list={list}
            text={item.isDone ? "취소하기" : "완료하기"}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
