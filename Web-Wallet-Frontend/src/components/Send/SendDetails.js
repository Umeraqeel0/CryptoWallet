import "../../App.css";
import Boldplus from "../../assets/Boldplus.png";
import arrow from "../../assets/arrow.png";
import swap from "../../assets/swap-36.png";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import round from "../../assets/round.png";
import Typography from "@mui/material/Typography";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import eth from "../../assets/eth.png";

const SendDetails = (props) => {
  const bal = useSelector((state) => state.user.bal);

  const [balance, setbalance] = React.useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const goToSendFinal = () => {
    navigate("/sendFinal", { state: { balance: balance, address: props.value } });
  };
  const goToDashboard = () => {
    // Use history.push to navigate to a specific route (e.g., '/component2')
    navigate("/dashboard");
  };

  console.log("SendDetails", props.value);
  console.log("Balance", balance);

  const textStyle = {
    fontSize: "16px", // Customize font size
    fontWeight: "bold", // Make text bold
    color: "gold", // Customize text color
  };
  return (
    <>
      <Container fixed>
        <Box
          sx={{
            bgcolor: "#282c34",
            height: "80vh",
            width: "50vh",
            flexGrow: 1,
          }}
        >

          <div style={{ marginLeft: '3px', marginTop: '5px' }}>
            <Box display='flex' alignItems='center'>
              <p style={{ marginLeft: "150px" }}>Send</p>
            </Box>

            <div class='account-div'>
              <div className='account-main'>
                <div style={{ color: "#1098fc" }}>Account 2</div>
                <div class='ens-input__selected-input__subtitle'>
                  {props.value}
                </div>
              </div>
              <div>
                <span
                  onClick={() => window.history.back()}
                  className='cross-icon'
                >
                  x
                </span>
              </div>
            </div>

            <div class='send-v2__form-row' style={{ marginLeft: "-100px" }}>
              <div class='send-v2__form-label'>Asset:</div>
              <div class='asset-div'>
                <div>
                  <img
                    src={eth}
                    alt='Image Description'
                    style={{ width: "33px", height: "33px", marginTop: "6px", marginLeft: "5px" }}
                  />
                </div>
                <div class='additional-container'>
                  <p class='label_heading'>Balance:{bal}</p>
                </div>
              </div>
              <div></div> <div></div>
            </div>

            <div class='send-v2__form-row' style={{ marginLeft: "-100px" }}>
              <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
              >
                <Box textAlign='center' p={2} ml={15}>
                  {" "}
                  {/* Add ml={2} for left margin */}
                  <Typography variant='h5' sx={{ fontSize: "15px" }}>
                    Amount:
                  </Typography>
                  <Button
                    variant='contained'
                    color='primary'
                    size='small'
                    sx={{ width: "60px", height: "20px", fontSize: "12px" }}
                  >
                    Max
                  </Button>
                </Box>
              </Box>
              <div class='bordered-div'>
                <div class='additional-container'>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    
                    <input
                      id='balance'
                      value={balance}
                      placeholder='0'
                      onChange={(e) => setbalance(e.target.value)}

                      style={{
                        width: '9ch',
                        backgroundColor: 'transparent',
                        color: 'white',
                        padding: '4px',
                        borderRadius: '4px',
                        border: 'none',
                        marginTop: '0px',
                      }}
                    />
                    <div>GoerliETH</div>
                  </div>

                  <div class='currency-input__conversion-component'>
                    No conversion rate available
                  </div>
                </div>
              </div>
              <div></div> <div></div>
            </div>

            <Box
              display='flex'
              flexDirection='row'
              justifyContent='space-between'
              border='1px solid #ccc'
              borderRadius='8px'
              padding='12px'
              width='440px' // Customize the width of the box
              margin='20px auto' // Add space from top and center horizontally
            >
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1' style={{ color: "white" }}>
                  {" "}
                  Gas (estimated)
                </Typography>
                <Typography variant='body1' style={{ color: "green" }}>
                  Likely in 30 seconds
                </Typography>
              </Box>
              <Box display='flex' flexDirection='column'>
                <Typography variant='body1' style={{ color: "white" }}>
                  0.0000315 Eth
                </Typography>
                <Typography variant='body1' style={{ color: "white", fontSize: "13px" }}>
                  Max fee: 0.0000315 GoerliETH
                </Typography>
              </Box>
            </Box>

            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              marginTop='100px' // Add space from the top
            >
              {/* First Button */}

              <Button
                onClick={goToDashboard}
                variant='contained'
                style={{
                  width: "180px",
                  color: "#1098fc",
                  background: "white",
                }}
              >
                Cancel
              </Button>

              {/* Second Button */}
              <Button
                onClick={goToSendFinal}
                variant='contained'
                style={{
                  marginLeft: "10px",
                  width: "180px",
                  color: "white",
                  background: "#1098fc",
                }}
              >
                Next
              </Button>
            </Box>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default SendDetails;
