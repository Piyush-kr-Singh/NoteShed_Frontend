// src/components/Main.js
import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import UserTable from './userTable';
import UserForm from './userForm';
import { getUsers } from '../api';
import { ToastContainer } from 'react-toastify';

const Main = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setUserToEdit(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserToEdit(null);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom style={{textAlign :'center'}}>
        User Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)} style={{marginBottom : '10px'}}>
        Add User
      </Button>
      <UserTable users={users} onEdit={handleEdit} fetchUsers={fetchUsers} />
      <UserForm open={open} handleClose={handleClose} userToEdit={userToEdit} fetchUsers={fetchUsers} />
      <ToastContainer />
    </div>
  );
};

export default Main;
