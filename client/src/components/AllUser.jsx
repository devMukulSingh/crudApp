import { Table, TableHead, TableCell, TableRow ,TableBody, Box, Button} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getUserApi, deleteUserApi } from '../service/api.js';
import styled from '@emotion/styled';
import { Link, Navigate } from 'react-router-dom';

const MainBox = styled(Box)({
  width:'100%',
  height:'100vh',
})
const StyledTable = styled(Table)({
    marginTop:'3rem',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
})
const DeleteBtn = styled(Button)({
  backgroundColor:'red',
  '&:hover':{
    backgroundColor:'red',
  },
  height:'2rem',
  textTransform:'none',
  margin:'0.5rem 1rem',
})
const EditBtn = styled(Button)({
  backgroundColor:'blue',
  '&:hover':{
    backgroundColor:'blue',
  },
  height:'2rem',
  textTransform:'none',
})
///////////////////////////////////////////MAIN FUNCTION/////////////////////////////////
const AllUser = () => {

  const[userArray, setUserArray] = useState([]);
  const[refresh, setRefresh ] = useState(false);

  useEffect( () => {
    const getUser = async() => {
      const userData = await getUserApi();
        setUserArray(userData.data);
        console.log(userArray);
    }
    getUser();
  },[refresh]);

  const handleDeleteBtn = async(id) => {
    await deleteUserApi(id);
    setRefresh(prev => !prev);
  }


///////////////////////////////////////JSX PART//////////////////////////////////////////
  return (
    <MainBox>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            userArray?.map((users,index) => {
              return(

                <TableRow>
                  <TableCell>{users.name}</TableCell>
                  <TableCell>{users.username}</TableCell>
                  <TableCell>{users.email}</TableCell>
                  <TableCell>{users.phone}</TableCell>
                  <EditBtn variant='contained' component = {Link} to= {`/edituser/${users._id}`}>Edit</EditBtn>
                  <DeleteBtn variant='contained' onClick={ () => handleDeleteBtn(users._id)}>Delete</DeleteBtn>

                </TableRow>
              )
            })
          }
        </TableBody>
      </StyledTable>
    </MainBox>
  )
}

export default AllUser