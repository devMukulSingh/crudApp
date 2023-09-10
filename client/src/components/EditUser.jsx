import styled from '@emotion/styled';
import { FormGroup , FormControl, InputLabel,Input, Typography, Button} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { editUserApi, getEditUserApi } from '../service/api';
import { useNavigate, useParams } from "react-router-dom";
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

///////////////////////////////////////MAIN FUNCTION////////////////////////////////////////////

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
  useEffect( () => {
    const editUser = async() => {
      const response = await getEditUserApi(id);
      setUser(response.data);
    }
    editUser();
  },[])
  const handleEditBtn = async() => {
    await editUserApi(user,id);
    navigate('/getusers');
  }

///////////////////////////////////////////////JSX PART//////////////////////////////////////////////////
  return (
    <>
      <Form>
        <Typography variant='h4'> Edit User</Typography>
        <FormControl>
          <InputLabel >Name</InputLabel>
          <Input onChange={ (e) => onValueChange(e)} value={user?.name} name='name'/>
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={ (e) => onValueChange(e)} value={user?.username} name='username'/>
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={ (e) => onValueChange(e)} value={user?.email} name='email'/>
        </FormControl>
        <FormControl>
          <InputLabel>Phone Number</InputLabel>
          <Input onChange={ (e) => onValueChange(e)} value={user?.phone} name='phone'/>
        </FormControl>
       <SubmitBtn type='submit' variant = "contained" onClick={ () => handleEditBtn()}>Edit User </SubmitBtn>
      </Form>
    </>
  )
}

export default EditUser