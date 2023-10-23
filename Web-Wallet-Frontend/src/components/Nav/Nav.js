import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import InputBase from '@mui/material/InputBase';
import round from '../../assets/round.png';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const Nav = (props) => {


    const [opened, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const accounts = [
        'Account 1',
        'Account 2',
        'Account 3',
        'Account 4',
        'Account 5',
        'Account 6',
        'Account 7',
    ];

    const balances = [
        '0.001',
        '0.044',
        '0.005',
        '0.004',
        '0.204',
        '0.404',
        '0.404',
    ];

    const addresses = [
        '0xe23...2d7b',
        '0xe2b...1d2c',
        '0xe2r...5d7n',
        '0xe2w...6d7d',
        '0xe2y...3d7e',
        '0xe2i...1d7d',
        '0xe2n...8d7s',
    ];


    const navigate = useNavigate();

    const [show1, setShow1] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [getOn, setOn] = React.useState(null);

    const open = Boolean(anchorEl);
    const openDot = Boolean(getOn);

    const handleClickDot = (event) => {
        setOn(event.currentTarget);
    };


    const handleCloseDot = () => {
        setOn(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    const onClickSetting = () => {
        navigate("/settings");
    }


    const ITEM_HEIGHT = 48;
    return (
        <AppBar sx={{ bgcolor: '#282c34' }} position="static">
            <Toolbar>
                <Button sx={{ bgcolor: '#1b1e22' }}
                    variant="contained"
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    Networks
                </Button>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <div>

                        <Button style={{ marginLeft: "-90px" }} sx={{ bgcolor: '#282c34' }}
                            id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleOpenDialog}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            <b>Accounts</b>
                        </Button>

                        <Box>

                            <Dialog open={opened} onClose={handleCloseDialog} maxWidth="sm">
                                <DialogContent sx={{ backgroundColor: '#282c34' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <p style={{ color: 'white' }}>
                                            Select an account
                                        </p>
                                        <button onClick={handleCloseDialog} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
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


                                    <InputBase
                                        placeholder="Search accounts"
                                        inputProps={{ 'aria-label': 'search' }}
                                        sx={{
                                            color: 'silver', border: '1px solid white',
                                            marginTop: '1px',
                                            width: '100%',
                                            borderRadius: '10px',
                                            height: '35px'
                                        }} // Changing the placeholder text color to silver
                                    />

                                    <div style={{ overflowY: 'scroll', height: '150px', marginTop: '10px', }}>
                                        {accounts.map((account, index) => (
                                            <a
                                                key={index}
                                                href="#" // Provide a meaningful link or handle the click event
                                                style={{ textDecoration: 'none', color: 'white' }} // Remove underline and set text color
                                            >
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                    style={{ marginTop: '10px' }} // Add margin from the top
                                                >
                                                    <img
                                                        src={round} // Replace with the actual image source
                                                        alt={`Account ${index + 1}`}
                                                        style={{ width: '25px', height: '25px', marginRight: '10px' }} // Customize image size
                                                    />
                                                    <div
                                                        style={{
                                                            flex: 1,
                                                            marginLeft: '-1px', // Customize the left margin
                                                        }}
                                                    >
                                                        <p>
                                                            {account}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            {balances[index]} Eth
                                                        </p>

                                                        <p style={{ marginTop: '-10px' }}>{addresses[index]}
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            {balances[index]} Eth</p> {/* Add margin from the top */}
                                                    </div>
                                                </Box>
                                            </a>
                                        ))}
                                    </div>



                                    <p style={{
                                        marginTop: '40px',

                                    }}>
                                        <span
                                            style={{
                                                color: '#1098fc',
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                borderBottom: '1px solid transparent',
                                                transition: 'border-color 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderBottom = '1px solid #1098fc';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderBottom = '1px solid transparent';
                                            }}
                                            onClick={() => {
                                                // Handle the click event here
                                            }}
                                        >
                                            Add Account
                                        </span>
                                    </p>

                                    <p>
                                        <span
                                            style={{
                                                color: '#1098fc',
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                borderBottom: '1px solid transparent',
                                                transition: 'border-color 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderBottom = '1px solid #1098fc';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderBottom = '1px solid transparent';
                                            }}
                                            onClick={() => {
                                                // Handle the click event here
                                            }}
                                        >
                                            Import account
                                        </span>
                                    </p>

                                    <p>
                                        <span
                                            style={{
                                                color: '#1098fc',
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                borderBottom: '1px solid transparent',
                                                transition: 'border-color 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderBottom = '1px solid #1098fc';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderBottom = '1px solid transparent';
                                            }}
                                            onClick={() => {
                                                // Handle the click event here
                                            }}
                                        >
                                            Add Hardware Wallet
                                        </span>
                                    </p>

                                </DialogContent>
                            </Dialog>



                        </Box>





                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                <EditIcon />
                                Account 1
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <FileCopyIcon />
                                Account 2
                            </MenuItem>
                            <Divider sx={{ my: 0.5 }} />
                            <MenuItem onClick={handleClose} disableRipple>
                                <ArchiveIcon />
                                Add Account
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <MoreHorizIcon />
                                More
                            </MenuItem>
                        </StyledMenu>
                    </div>
                </Typography>
                <IconButton sx={{ color: 'white' }}
                    aria-label="more"
                    id="long-button"
                    aria-controls={openDot ? 'long-menu' : undefined}
                    aria-expanded={openDot ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={onClickSetting} disableRipple>
                        Setting
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Account Details
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Notifications
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />

                    <MenuItem onClick={handleClose} disableRipple>
                        More
                    </MenuItem>
                </StyledMenu>
            </Toolbar>
        </AppBar>

    );
};

export default Nav;




