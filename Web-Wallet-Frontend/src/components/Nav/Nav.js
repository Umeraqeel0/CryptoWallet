import * as React from 'react';
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
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

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


    const [show1, setShow1] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [getOn, setOn] = React.useState(null);

    const open = Boolean(anchorEl);
    const openDot = Boolean(getOn);

    const handleClickDot = (event) => {
        setOn(event.currentTarget);
        console.log("des",event.currentTarget)
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


    const options = [
        <Link to='/settings'>
            <h5 style={{ color: 'black' }}>Settings
            </h5>
        </Link>
    ];

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
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            <b>Accounts</b>
                        </Button>
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
                    onClick={handleClickDot}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={getOn}
                    open={openDot}
                    onClose={handleCloseDot}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleCloseDot}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>

    );
};

export default Nav;




