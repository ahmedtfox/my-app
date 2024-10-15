const users = ["Ahmed", "Ali", "Sara"];

function List() {
  let el = users.map((e, i) => {
    return <li key={e + i}>{e.toUpperCase()}</li>;
  });
  return <ul>{el}</ul>;
}

export default List;
