import { useEffect, useState } from "react";
const Editing = (props) => {
  const [user, setUser] = useState(props.currentState);

  useEffect(() => {
    setUser(props.currentState);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>UserName</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className="update">Update</button>
      <button
        className="cancel"
        onClick={() => {
          props.setUpdate(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default Editing;
