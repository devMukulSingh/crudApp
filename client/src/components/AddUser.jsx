import styled from '@emotion/styled';
import { FormGroup , FormControl, InputLabel,Input, Typography, Button} from '@mui/material';
import React, { useState } from 'react';
import { addUserApi } from '../service/api';
import { useNavigate } from "react-router-dom";
//////////////////////////////////////////////////

const Form = styled( FormGroup )({
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  marginTop:'5rem',
  '& > div ':{
    marginTop:'1rem',
    width:'30rem',
  }
})
const SubmitBtn = styled(Button)({
  marginTop:'1.5rem',
})

/////////////////////////////////MAIN FUNCTION////////////////////////////////////////////

const AddUser = () => {
  const navigate = useNavigate();
  const userData = {
    name:'',
    username:'',
    email:'',
    phone:''
  }
  const[user, setUser] = useState(userData);
  const onValueChange = (e) => {
      setUser( {...user, [e.target.name]:e.target.value});

  }
  const handleSubmitBtn = async() => {
    await addUserApi(user);
    navigate('/getusers');
  }

///////////////////////////////////////////////JSX PART//////////////////////////////////////////////////
  return (
    <>
      <Form>
        <Typography variant='h4'> Add User</Typography>
        <FormControl>
          <InputLabel >Name</InputLabel>
          <Input onChange={ (e) => onValueChange(e)} name='name'/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={ (e) => onValueChange(e)} name='username'/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={ (e) => onValueChange(e)} name='email'/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone Number</InputLabel>
          <Input onChange={ (e) => onValueChange(e)} name='phone'/>
        </FormControl>
       <SubmitBtn type='submit' variant = "contained" onClick={ () => handleSubmitBtn()}>Submit </SubmitBtn>
      </Form>
    </>
  )
}

export default AddUser