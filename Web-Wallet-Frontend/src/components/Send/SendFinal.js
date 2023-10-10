import Send from "./Send";
import Header from "../Header/Header";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MetaTab from "../Tabs/Tab";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";
import SendDetailsFinal from "./SendDetailsFinal";


const SendFinal =(props) =>{

    return (
        <div className="App">
      <Header />
      <Container fixed>
      <Box sx={{ bgcolor: '#282c34', height: '80vh', width: '110vh', flexGrow: 1 }}>
            <Nav />

            <SendDetailsFinal></SendDetailsFinal>
            
        </Box>
      </Container>
    </div>
    )
}

export default SendFinal;