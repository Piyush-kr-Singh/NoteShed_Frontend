// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { createUser, updateUser } from '../api';
import { toast } from 'react-toastify';

const UserForm = ({ open, handleClose, userToEdit, fetchUsers }) => {
  const initialUserState = {
    name: '',
    email: '',
    age: '',
    mobile: '',
    work: '',
    address: '',
    des: '',
  };

  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit);
    } else {
      setUser(initialUserState);
    }
  }, [userToEdit, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (userToEdit) {
        await updateUser(userToEdit.id, user);
        window.location.reload();
        alert("User updated successfully!");
      } else {
        await createUser(user);
        window.location.reload();
        alert("User added successfully!");
      }
      await fetchUsers();
      handleClose();
    } catch (error) {
        alert("Something went wrong!");
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{userToEdit ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Age"
            name="age"
            value={user.age}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Mobile"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Work"
            name="work"
            value={user.work}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Address"
            name="address"
            value={user.address}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Description"
            name="des"
            value={user.des}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {userToEdit ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserForm;
