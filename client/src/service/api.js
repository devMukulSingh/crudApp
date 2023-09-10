import axios from "axios";

const URL = "http://localhost:8000";

export const addUserApi = async(data) => {
    try {
        await axios.post(`${URL}/addusers`,data);
    } catch (error) {
        console.log(` Error in AddUser ${error}`);
    }
} 
export const getUserApi = async() => {
    try {
        return await axios.get(`${URL}/getusers`);
    } catch (error) {
        console.log(`Error in Get User Api ${error}`);
    }

}

export const getEditUserApi = async(id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log(`Error while calling editUserApi ${error}`);
    }

}

export const editUserApi = async(user,id) => {
  try {
      await axios.post(`${URL}/${id}`,user);
  } catch (error) {
    console.log(`Error in editUserApi ${error}`);
  }
}

export const deleteUserApi = async(id) => {
    try {
        await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log(`Error in deleteUserApi ${error}`);
    }
}