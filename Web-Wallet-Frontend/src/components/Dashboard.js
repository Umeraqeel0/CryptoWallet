import * as React from 'react';
import Header from './Header/Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MetaTab from './Tabs/Tab';
import Nav from './Nav/Nav';
import Cart from './Cart/Cart';
import { useEffect } from 'react';
import UserDetails from "../services/userDetails";
import '../App.css';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUserAddress, addUserId} from '../store/slices/UserSlices';

function Dashboard() {

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {

    const fetchData = async () => {
      console.log("das", location.state);
      const res = await UserDetails.getUserAccount(location.state.id);
      console.log("getUserAccount", res.data[0].address);
      dispatch(addUserAddress(res.data[0].address));
      dispatch(addUserId(location.state.id));
    }

    fetchData().catch(console.error);
  }, [location.state, dispatch])

  return (
    <>
      <Header />
      <Container fixed>
        <Box sx={{ bgcolor: '#282c34', height: '80vh', width: '120vh', flexGrow: 1 }}>
          <Nav />
          <Cart/>
          <MetaTab />
        </Box>
      </Container>
    </>
  );
}

export default Dashboard;
