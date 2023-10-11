import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import addDetails from '../../services/addDetails';

export default function FormDialog() {
    const navigate = useNavigate();
    const location = useLocation();

    const [open, setOpen] = React.useState(true);
    const [balance, setBalance] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async (e) => {
        console.log("val", balance);
        console.log("buy", location.state)
        const res = await addDetails.updateBalanceByAddress(location.state, balance);
        if(res){
            navigate("/dashboard", { state: res.data });
        }
        setOpen(false);
        navigate('/dashboard');
    };

    return (
        <div>
            <Dialog style={{ color: "#1098fc" }} open={open} onClose={handleClose}>
                <DialogTitle sx={{ flexGrow: 1 }} style={{ color: "#1098fc" }} >Buy Eth</DialogTitle>
                <DialogContent style={{ color: "#1098fc" }} >
                    <DialogContentText >
                        Enter amount of ETH to buy
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="ETH"
                        onChange={(e) => setBalance(e.target.value)}
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions  >
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Buy</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
