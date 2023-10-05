import * as React from 'react';
import Header from './Header/Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MetaTab from './Tabs/Tab';
import Nav from './Nav/Nav';
import Cart from './Cart/Cart';
import { useEffect } from 'react';
import AuthService from "../services/auth.registerUser";
import '../App.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Dashboard() {

  const location = useLocation();
  const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('');

  useEffect(() => {

    const fetchData = async () => {
      const res = await AuthService.getRegisterUserById(location.state);
      console.log("getRegisterUserById", res.data[0].address);
      setAddress(res.data[0].address);
    }

    fetchData().catch(console.error);
  },[address, location.state])

  return (
    <>
      <Header />
      <Container fixed>
        <Box sx={{ bgcolor: '#282c34', height: '80vh', width: '120vh', flexGrow: 1 }}>
          <Nav />
          <Cart data={address}/>
          <MetaTab />
        </Box>
      </Container>
    </>
  );
}

export default Dashboard;
