import React, { useState } from 'react';
import '../css/Modal.scss';
import { motion, AnimatePresence } from 'framer-motion';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export default function Modal({ isOpen, onClose, setNewItem }) {
  const [age, setAge] = useState('');
  const [newObj, setNewObj] = useState({
    name: '',
    description: '',
    dateOfTast: '',
    nullam:'Bayern'
  });
  const options = ["Eget Integer", "Viverra Diam", "Maecenas Lacus"];
  const handleChange = (event) => {
    setAge(event.target.value);
    
  };

  const handleSave = () => {
    if (newObj.name && newObj.dateOfTast && newObj.description) {
      setNewItem(newObj);
      setNewObj({
        name: '',
        description: '',
        dateOfTast: '',
        nullam:'Bayern'
      });''
      onClose()
    } else {
      alert('Please fill in all the inputs');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="modal-content">
            <h2>New Item</h2>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              value={newObj.name}
              onChange={(e) => setNewObj({ ...newObj, name: e.target.value })}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              required
              value={newObj.description}
              onChange={(e) =>
                setNewObj({ ...newObj, description: e.target.value })
              }
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              onChange={(e) => {
                const slicedDate =e.$d.toString().slice(4, 10);
                setNewObj({ ...newObj, dateOfTast: slicedDate });
                
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                />
              )}
            />
            </LocalizationProvider>
            <FormControl required disabled>
              <InputLabel id="demo-simple-select-label">Assigned</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Assigned"
                onChange={handleChange}
              >
                <MenuItem value={10}>To do</MenuItem>
                <MenuItem value={20}>Verify</MenuItem>
                <MenuItem value={30}>Done</MenuItem>
              </Select>
            </FormControl>
            <div>
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="contained" onClick={
                handleSave}>
                Save
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}