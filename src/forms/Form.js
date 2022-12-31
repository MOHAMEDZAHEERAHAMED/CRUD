import { useState } from "react";

const Form = (props) => {
  const initialState = { id: null, name: "", username: "" };
  const [user1, setUser1] = useState(initialState);

  const inputChange = (event) => {
    const { name, value } = event.target;

    setUser1({ ...user1, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user1.name || !user1.username) return;
        props.addUser(user1);
        setUser1(initialState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user1.name}
        onChange={inputChange}
      />
      <label>UserName</label>
      <input
        type="text"
        name="username"
        value={user1.username}
        onChange={inputChange}
      />
      <button className="button-add">Add New User</button>
    </form>
  );
};

export default Form;
