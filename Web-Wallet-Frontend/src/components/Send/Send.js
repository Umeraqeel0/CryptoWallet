import Header from '../Header/Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MetaTab from '../Tabs/Tab';
import Nav from '../Nav/Nav';
import Cart from '../Cart/Cart';
import send from './send.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SendTo from "./SendTo";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import round from '../../assets/round.png'


const Send = () => {

    const navigate = useNavigate();

    const goToDashboard = () => {
        // Use history.push to navigate to a specific route (e.g., '/component2')
        navigate('/dashboard');
    };

    const goSentTo = () => {
        // Use history.push to navigate to a specific route (e.g., '/component2')
        navigate('/sendTo');
    };

    return (
        <div className="App">
            <Header />
            <Container fixed>
                <Box sx={{ bgcolor: '#1b1e22', height: '80vh', width: '90vh', flexGrow: 1 }}>
                    <Nav />

                    <div style={{ marginLeft: '190px', marginTop: '15px' }}>
                        <Box sx={{ bgcolor: '#282c34', height: '70vh', width: '50vh', flexGrow: 1, }}>

                            <Box display="flex" alignItems="center">
                                <p style={{ marginLeft: '100px' }}>Send To</p>
                                <Button onClick={goToDashboard} style={{ marginLeft: '100px' }} color="primary">
                                    Cancel
                                </Button>
                            </Box>


                            <Box
                                display="flex"
                                alignItems="center"
                                border="1px solid silver"
                                padding="3px"
                                marginTop="10px"
                                marginLeft="20px"
                                width="320px"
                                borderRadius="10px" // Adding border radius to make the borders round
                            >
                                <SearchIcon />
                                <InputBase
                                    placeholder="Enter Public Address..."
                                    inputProps={{ 'aria-label': 'search' }}
                                    sx={{ color: 'silver' }} // Changing the placeholder text color to silver
                                />
                            </Box>

                            <Box display="flex" alignItems="center">
                                <h4 style={{ marginLeft: '20px' }}>Your Accounts</h4>
                            </Box>


                            <a onClick={goSentTo}
                                href="#"

                                style={{
                                    textDecoration: 'none', // Remove underline from the link
                                }}
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{
                                        marginLeft: '20px', // Add left margin for spacing
                                        color: 'white', // Set the initial text color
                                        '&:hover': {
                                            color: 'blue', // Change text color on hover
                                        },
                                    }}
                                >
                                    <img src={round} alt="Image Description" style={{ width: '33px', height: '33px' }} />
                                    <Box sx={{ marginLeft: '15px' }}>
                                        <h4>Account 1</h4>
                                        <p>0x..72d7b</p>
                                    </Box>
                                </Box>
                            </a>

                            <a onClick={goSentTo}
                                href="#"

                                style={{
                                    textDecoration: 'none', // Remove underline from the link
                                }}
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{
                                        marginLeft: '20px', // Add left margin for spacing
                                        color: 'white', // Set the initial text color
                                        '&:hover': {
                                            color: 'blue', // Change text color on hover
                                        },
                                    }}
                                >
                                    <img src={round} alt="Image Description" style={{ width: '33px', height: '33px' }} />
                                    <Box sx={{ marginLeft: '15px' }}>
                                        <h4>Account 2</h4>
                                        <p>0x..82d8x</p>
                                    </Box>
                                </Box>
                            </a>

                            <a onClick={goSentTo}
                                href="#"

                                style={{
                                    textDecoration: 'none', // Remove underline from the link
                                }}
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    sx={{
                                        marginLeft: '20px', // Add left margin for spacing
                                        color: 'white', // Set the initial text color
                                        '&:hover': {
                                            color: 'blue', // Change text color on hover
                                        },
                                    }}
                                >
                                    <img src={round} alt="Image Description" style={{ width: '33px', height: '33px' }} />
                                    <Box sx={{ marginLeft: '15px' }}>
                                        <h4>Account 3</h4>
                                        <p>0x..21n5c</p>
                                    </Box>
                                </Box>
                            </a>


                        </Box>
                    </div>



                </Box>
            </Container>
        </div>
    )
}

export default Send;