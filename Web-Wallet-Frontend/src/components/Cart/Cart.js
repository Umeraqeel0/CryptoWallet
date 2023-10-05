import "../../App.css";
import Boldplus from '../../assets/Boldplus.png';
import arrow from '../../assets/arrow.png';
import swap from '../../assets/swap-36.png';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useEffect } from "react";

const Cart = (props) => {

  useEffect(()=>{
    console.log("Props", props.data);
  },[props.data]);
  
  function PartiallyHiddenText({ text, visibleChars }) {
    const truncatedText = text.substring(0, visibleChars);
    const ellipsis = text.length > visibleChars ? '...' : '';
  
    return (
      <span className="partially-hidden-text">
        {truncatedText}{ellipsis}
      </span>
    );
  }

  return (
    <>
      <Button style={{marginTop: "15px", background: "#1b1e22", color: "#1098fc"}} centered variant="contained">  <PartiallyHiddenText text={props.data} visibleChars={6} />&nbsp;&nbsp; <FileCopyIcon /></Button>
      <h1 style={{ color: "white", marginLeft: "-20px" }}>0 ETH</h1>
      <h4 style={{ color: "#a8aaad", marginLeft: "-20px" }}>$0.00 USD</h4>
      <div style={{ marginTop: "30px", marginLeft: "-15px" }}>
        <Box
          sx={{
            '& > :not(style)': {
              m: 2.5,
            },
          }}
        >
          <img width="34" height="34" src={Boldplus} alt='svg'></img>
          <img width="34" height="34" src={arrow} alt='svg'></img>
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




