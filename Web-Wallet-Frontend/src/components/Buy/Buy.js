import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useLocation } from 'react-router-dom';
import addDetails from '../../services/userDetails';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import round from '../../assets/round.png';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import qrcode from '../../assets/qrcode.png';
import FileCopyIcon from '@mui/icons-material/FileCopy';


export default function FormDialog() {
    const address = useSelector((state) => state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const [open, setOpen] = React.useState(true);
    const [balance, setBalance] = React.useState('');

    const handleClickOpen = () => {
        setOpen(false);
    };

    const handleClose = async (e) => {
        console.log("val", balance);
        console.log("buy", location.state)
        const res = await addDetails.updateBalanceByAddress(address, balance);
        if (res) {
            navigate("/dashboard");
        }
        setOpen(false);
        navigate('/dashboard');
    };


    const [openSecond, setOpenSecond] = useState(false);

    const handleOpenSecond = () => {
        setOpenSecond(true);
    };

    const handleCloseSecond = () => {
        setOpenSecond(false);
    };


    function PartiallyHiddenText({ text, visibleChars }) {
        console.log("hi", text);
        if (text) {
            const truncatedText = text.substring(0, visibleChars);
            const ellipsis = text.length > visibleChars ? '...' : '';

            return (
                <span className="partially-hidden-text">
                    {truncatedText}{ellipsis}
                </span>
            );
        }
    }

    return (
        <div >
            <Box>

                <Dialog open={open} onClose={handleClose} maxWidth="sm">
                    <DialogContent sx={{ backgroundColor: '#282c34' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box
                                component="div" // Use "div" as the component for the Box
                                width="15px"    // Set the width as per your requirements
                                height="15px"   // Set the height as per your requirements
                                marginLeft="140px" // Set the left spacing as per your requirements
                                marginTop="10px"  // Set the top spacing as per your requirements
                                bgcolor="lightgray" // Set the background color if needed
                                display="flex"   // You can adjust display property as needed
                                alignItems="center" // You can adjust alignment as needed
                                justifyContent="center" // You can adjust alignment as needed
                            >
                                <img
                                    src={round}// Replace with your image URL
                                    alt="Custom Image"
                                />
                            </Box>
                            <button onClick={handleClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>


                        <h3 style={{
                            marginTop: "0px",
                            marginLeft: "0px",
                            display: 'flex',
                            justifyContent: 'center', // Center horizontally within the row
                            color: 'white',
                        }}> Account 1</h3>


                        <Box
                            component="div" // Use "div" as the component for the Box
                            width="100px"    // Set the width as per your requirements
                            height="80px"   // Set the height as per your requirements
                            marginLeft="100px" // Set the left spacing as per your requirements
                            marginTop="60px"  // Set the top spacing as per your requirements
                            bgcolor="lightgray" // Set the background color if needed
                            display="flex"   // You can adjust display property as needed
                            alignItems="center" // You can adjust alignment as needed
                            justifyContent="center" // You can adjust alignment as needed
                        >
                            <img
                                src={qrcode}// Replace with your image URL
                                alt="Custom Image"
                            />
                        </Box>

                        <Button style={{ marginTop: "70px", marginLeft: '60px', background: "#1b1e22", color: "#1098fc" }} centered variant="contained">  <PartiallyHiddenText text={address} visibleChars={10} />&nbsp;&nbsp; 0x4n7j...7d7b <FileCopyIcon /></Button>


                        <Box
                            sx={{
                                marginTop: "10px",
                                display: 'flex',
                                justifyContent: 'center', // Center horizontally within the row
                            }}
                        >
                            <Box
                                component="button"
                                sx={{
                                    width: '300px',
                                    height: '35px',
                                    backgroundColor: 'transparent',
                                    border: '2px solid #1098fc',
                                    borderRadius: '20px',
                                    padding: '6px 12px',
                                    fontSize: '16px',
                                    color: '#1098fc',
                                    '&:hover': {
                                        backgroundColor: '#1098fc',
                                        color: 'white',
                                    },
                                }}
                                onClick={handleOpenSecond}
                            >
                                Show Private Key
                            </Box>



                        </Box>


                    </DialogContent>
                </Dialog>

                <Dialog open={openSecond} onClose={handleCloseSecond}>
                    <DialogContent sx={{ backgroundColor: '#282c34' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box
                                component="div" // Use "div" as the component for the Box
                                marginLeft="90px" // Set the left spacing as per your requirements
                                marginTop="10px"  // Set the top spacing as per your requirements
                                display="flex"   // You can adjust display property as needed
                                alignItems="center" // You can adjust alignment as needed
                                justifyContent="center" // You can adjust alignment as needed
                                color='white'
                            >
                                <h4>Show private key</h4>
                            </Box>

                            <button onClick={handleClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                        <Box
                            component="div" // Use "div" as the component for the Box
                            width="15px"    // Set the width as per your requirements
                            height="15px"   // Set the height as per your requirements
                            marginLeft="140px" // Set the left spacing as per your requirements
                            marginTop="-10px"  // Set the top spacing as per your requirements
                            bgcolor="lightgray" // Set the background color if needed
                            display="flex"   // You can adjust display property as needed
                            alignItems="center" // You can adjust alignment as needed
                            justifyContent="center" // You can adjust alignment as needed
                        >
                            <img
                                src={round}// Replace with your image URL
                                alt="Custom Image"
                            />
                        </Box>

                        <h3 style={{
                            marginTop: "20px",
                            marginLeft: "0px",
                            display: 'flex',
                            justifyContent: 'center', // Center horizontally within the row
                            color: 'white',
                        }}> Account 1</h3>



                        <Button style={{ marginTop: "-10px", marginLeft: '60px', background: "#1b1e22", color: "#1098fc" }} centered variant="contained">  <PartiallyHiddenText text={address} visibleChars={10} />&nbsp;&nbsp; 0x4n7j...7d7b <FileCopyIcon /></Button>

                        <Box
                            component="div" // Use "div" as the component for the Box
                            marginLeft="0px" // Set the left spacing as per your requirements
                            marginTop="10px"  // Set the top spacing as per your requirements
                            display="flex"   // You can adjust display property as needed

                            color='white'
                        >
                            <p>Enter your password</p>


                        </Box>


                        <InputBase
                            placeholder="Password"
                            type="password"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{
                                color: 'silver', border: '1px solid white',
                                marginTop: '1px',
                                width: '100%',
                                borderRadius: '5px',
                                height: '35px'
                            }} // Changing the placeholder text color to silver
                        />



                        <Box
                            sx={{
                                marginTop: '20px',
                                backgroundColor: '#64141c', // Red background
                                padding: '10px',
                                borderRadius: '5px',
                                textAlign: 'center',
                                color: 'white', // Text color
                            }}
                        >
                            Warning: Never disclose this key.<br></br> Anyone with your private keys can
                            <br></br>steal any assets held in your account.
                        </Box>



                        <Box
                            sx={{
                                marginTop: "10px",
                                display: 'flex',
                                justifyContent: 'center', // Center horizontally within the row
                            }}
                        >
                            <Box
                                component="button"
                                sx={{
                                    width: '140px',
                                    height: '35px',
                                    backgroundColor: 'transparent',
                                    border: '2px solid #1098fc',
                                    borderRadius: '20px',
                                    padding: '6px 12px',
                                    fontSize: '16px',
                                    color: '#1098fc',
                                    cursor:'pointer',
                                    '&:hover': {
                                        backgroundColor: '#1098fc',
                                        color: 'white',
                                    },
                                }}
                                onClick={handleClose}
                            >
                                Cancel
                            </Box>

                            <Box
                                component="button"
                                sx={{
                                    marginLeft:'15px',
                                    width: '140px',
                                    height: '35px',
                                    backgroundColor: '#1098fc',
                                    border: '2px solid #1098fc',
                                    borderRadius: '20px',
                                    padding: '6px 12px',
                                    fontSize: '16px',
                                    color: 'white',
                                    cursor:'pointer',
                                    
                                }}
                                onClick={handleOpenSecond}
                            >
                                Confirm
                            </Box>

                        </Box>


                    </DialogContent>
                </Dialog>

            </Box>

        </div>
    );
}
