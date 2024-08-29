import React,{useState} from 'react'
import "../css/ContentHeader.scss"
import NewItem from './NewItem'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function ContentHeader({setNewItem}) {
  return (
    <div className='content_header'>
        <TextField
        size='small'
          id="outlined-start-adornment"
          label="Search"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
        />
        <NewItem setNewItem={setNewItem}/>
    </div>
  )
}
