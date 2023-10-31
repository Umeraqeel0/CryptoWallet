import * as React from 'react';
import Header from './Header/Header';
import Container from '@mui/material/Container';
import MetaTab from './Tabs/Tab';
import Nav from './Nav/Nav';
import Cart from './Cart/Cart';
import { useEffect } from 'react';
import UserDetails from "../services/userDetails";
import '../App.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addUserAddress, addUserBalance, addUserAccounts, addUserAddresses} from '../store/slices/UserSlices';

function Dashboard() {
  const id = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {

    const fetchData = async () => {
      console.log("UserId", id);
      const res = await UserDetails.getUserAccount(id);
      console.log("getUserAccount", res.data);
      const bal = await UserDetails.getUserBalanceByAddress(res.data[0].address);
      console.log("getRegisterUserByAddress", bal.data);
      const acc = await UserDetails.getAllUserAccounts();
      console.log("Send", acc.data);
      dispatch(addUserAccounts(acc.data));
      dispatch(addUserBalance(bal.data));
      dispatch(addUserAddress(res.data[0].address));
      dispatch(addUserAddresses(res.data));
    }

    fetchData().catch(console.error);
  }, [location.state, dispatch])

  return (
    <>
      <Header />
      <Container fixed>
          <Nav />
          <Cart/>
          <MetaTab />
      </Container>
    </>
  );
}
     

export default Dashboard;
