import Header from "../Header/Header";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Nav from "../Nav/Nav";
import SendDetails from "./SendDetails";

const SendTo =(props) =>{

    return (
        <div className="App">
      <Header />
      <Container fixed>
            <Nav />

            <SendDetails></SendDetails>
            
      </Container>
    </div>
    )
}

export default SendTo;