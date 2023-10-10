import Header from '../Header/Header';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import MetaTab from '../Tabs/Tab';
import Nav from '../Nav/Nav';
import Cart from '../Cart/Cart';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';


const Settings = () => {
    const buttonLabels = ['General', 'Advanced', 'Contacts', 'Snaps', ' Security'
    , 'Alerts', 'Networks', 'About'];

    return (
        <div className="App">
            <Header />
            <Container fixed>
                <Box sx={{ bgcolor: '#282c34', height: '80vh', width: '110vh', flexGrow: 1 }}>
                    <Nav />

                    <Box display="flex" alignItems="center">
                        {/* Paragraph */}
                        <h3 style={{ marginLeft: '20px' }}>Settings</h3>

                        {/* Search Bar */}
                        <TextField
                            variant="outlined"
                            placeholder="Search..."
                            size="small"
                            style={{ marginLeft: '130px', backgroundColor: 'white', borderRadius: '10px' }}
                        />

                        {/* Cross Button */}
                        <IconButton
                            edge="end"
                            aria-label="clear"
                            size="small"
                            style={{ marginLeft: '200px', color: 'orange' }}
                        >
                            <ClearIcon />
                        </IconButton>
                    </Box>


                    <Box display="flex" flexDirection="column">
                        {buttonLabels.map((label, index) => (
                            <Button
                                key={index}
                                color="primary"
                                style={{ marginBottom: '5px', width: '120px', color: 'silver' }} // Adjust the width as needed
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>


                </Box>
            </Container>
        </div>
    )
}

export default Settings;