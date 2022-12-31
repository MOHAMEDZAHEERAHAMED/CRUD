import { useState } from "react";
import Form from "./forms/Form";
import Table from "./tables/Table";
import Editing from "./forms/Editing";

function App() {
  const userData = [
    { id: 1, name: "Kadhar", username: "adbulkadhar10@gmail.com" },
    { id: 2, name: "Zaheer", username: "ahamedzaheer02@gmail.com" },
  ];

  const [users, setUsers] = useState(userData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const delUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [update, setUpdate] = useState(false);

  const initialUpdateState = { id: null, name: "", username: "" };
  const [currentState, setCurrentState] = useState(initialUpdateState);

  const updateRow = (user) => {
    setUpdate(true);
    setCurrentState({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updateUser) => {
    setUpdate(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };
  return (
    <div className="container">
      <h1 className="main-heading"> CRUD Using React JS </h1>
      <div className="first-box">
        {update ? (
          <div>
            <h2>Update User</h2>
            <Editing
              setUpdate={setUpdate}
              currentState={currentState}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div className="add-user">
            <h2>Add User</h2>
            <Form addUser={addUser} />
          </div>
        )}

        <div className="view-user">
          <h2>View User</h2>
          <Table updateRow={updateRow} delUser={delUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
