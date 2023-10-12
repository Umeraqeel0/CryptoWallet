import "../../App.css";
import Boldplus from '../../assets/Boldplus.png';
import arrow from '../../assets/arrow.png';
import swap from '../../assets/swap-36.png';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import addDetails from "../../services/addDetails";
import { useSelector, useDispatch } from 'react-redux'

const Cart = (props) => {
  const address = useSelector((state) => state.user.value)
  const id = useSelector((state) => state.user.id)
  
 const [balance, setBalance] = React.useState('');
  
  const navigate = useNavigate();

  const goToSendFinal = () => {
    // Use history.push to navigate to a specific route (e.g., '/component2')
    
    console.log("S",props.data);
    navigate('/send');
  };

  const goToBuy = () => {
    navigate('/buy');
  };

  useEffect(()=>{
    const fetchData = async () => {
      const res = await addDetails.getRegisterUserByAddress(props.data)
      console.log("getRegisterUserByAddress",res.data[0].balance);
      setBalance(res.data[0].balance);
    }

    fetchData().catch(console.error);
  

  },[props.data, balance]);
  
  function PartiallyHiddenText({ text, visibleChars }) {
    console.log("hi",text);
    if(text){
      const truncatedText = text.substring(0, visibleChars);
      const ellipsis = text.length > visibleChars ? '...' : '';
    
      return (
        <span className="partially-hidden-text">
          {truncatedText}{ellipsis}
        </span>
      );
    }
  }

  console.log("selec",address)

  console.log("selec-id",id)
  return (
    <>
      <Button style={{marginTop: "15px", background: "#1b1e22", color: "#1098fc"}} centered variant="contained">  <PartiallyHiddenText text={address} visibleChars={10} />&nbsp;&nbsp; <FileCopyIcon /></Button>
      <h1 style={{ color: "white", marginLeft: "-20px" }}>{balance} ETH</h1>
      <h4 style={{ color: "#a8aaad", marginLeft: "-20px" }}>$5.00 USD</h4>
      <div style={{ marginTop: "30px", marginLeft: "-15px" }}>
        <Box
          sx={{
            '& > :not(style)': {
              m: 2.5,
            },
          }}
        >
          <img onClick={goToBuy} width="34" height="34" src={Boldplus} alt='svg'></img>
          <img onClick={goToSendFinal} cursor= "pointer" width="34" height="34" src={arrow} alt='svg'></img>
          <img width="34" height="34" src={swap} alt='svg'></img>
        </Box>
        <Box >
          <Tabs centered style={{ marginTop: "-30px" }}>
            <h4 style={{ color: 'white', marginLeft: '10px' }}>Buy</h4>
            <h4 style={{ color: 'white', marginLeft: '50px' }}>Send</h4>
            <h4 style={{ color: 'white', marginLeft: '40px' }}>Swap</h4>

          </Tabs>
        </Box>
      </div>
    </>
  );
};

export default Cart;




