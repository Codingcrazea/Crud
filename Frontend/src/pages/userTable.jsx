import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/read'); // Replace with your backend URL
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete a user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://your-backend-url/users/${userId}`); // Replace with your backend URL
      setUsers(users.filter((user) => user._id !== userId));
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  // Update a user (simplified example)
  const updateUser = async (userId) => {
    const updatedName = prompt('Enter new name:');
    if (!updatedName) return;

    try {
      const response = await axios.put(`http://your-backend-url/users/${userId}`, { name: updatedName });
      setUsers(users.map((user) => (user._id === userId ? response.data : user)));
      alert('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user');
    }
  };

  return (
    <div className="container mt-4">
      <h2>User Details</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => updateUser(user._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;