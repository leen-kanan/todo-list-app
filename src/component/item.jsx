export const Item = ({ data, handleDeleteTodo }) => {
  const styles = {
    container: {
      display: "flex",
    },
    checkBtn: {
      flex: 0,
      marginRight: "20px",
      cursor: "pointer",
    },
    text: {
      fontSize: 30,
      overflowWrap: "anywhere",
    },
  };

  return (
    <div style={styles.container} className={"Item"}>
      <div
        style={styles.checkBtn}
        onClick={handleDeleteTodo}
        className={"deleteBtn"}>
        ⓧ
      </div>
      <span style={styles.text}>{data}</span>
    </div>
  );
};
