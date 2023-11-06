// TODO: text를 추가로 내려받음
const OnToggle = ({ item, list, setList, text }) => {
  // 완료하기 - 취소하기
  const clearCancelBtn = (id) => {
    setList((prev) => {
      return prev.map((list) => {
        return list.id === id ? { ...list, isDone: !list.isDone } : list;
      });
    });
  };

  return (
    <button className="Toggle_button" onClick={() => clearCancelBtn(item.id)}>
      {text}
    </button>
  );
};

export default OnToggle;
