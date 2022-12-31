const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => props.updateRow(user)}
                >
                  Edit
                </button>
                <button
                  onClick={() => props.delUser(user.id)}
                  className="del-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default Table;
