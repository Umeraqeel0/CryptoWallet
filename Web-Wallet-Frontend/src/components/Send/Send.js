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

const Send = () => {

    const navigate = useNavigate();

    const goToDashboard = () => {
        // Use history.push to navigate to a specific route (e.g., '/component2')
        navigate('/dashboard');
    };

    return (
        <div className="App">
            <Header />
            <Container fixed>
                <Box sx={{ bgcolor: '#282c34', height: '80vh', width: '110vh', flexGrow: 1 }}>
                    <Nav />

                    <div style={{ marginLeft: '100px', marginTop: '15px' }}>
                        <Box sx={{ bgcolor: '#282c34', height: '50vh', width: '70vh', flexGrow: 1, }}>
                            <div class="page-container__header send__header" data-testid="page-container__header"><div class="page-container__title">Send to</div>
                                <a onClick={goToDashboard} class="button btn-link page-container__header-close-text" role="button" tabindex="0">Cancel</a></div>
                            <div class="ens-input send__to-row"><div class="ens-input__wrapper">

                                <div style={{ marginLeft: '130px', marginTop: '15px' }}>

                                    <input class="ens-input__wrapper__input" type="text" dir="auto" placeholder="Enter public address" spellcheck="false" data-testid="ens-input" value=""></input>
                                </div>
                            </div></div>

                            <div><p>Your accounts</p></div><br></br>
                            <div class="send__select-recipient-wrapper__list">
                                <div class="box send__select-recipient-wrapper__group box--flex-direction-row" data-testid="recipient-group">

                                    <Link to='/sendTo'>
                                        <div class="box send__select-recipient-wrapper__group-item box--padding-4 box--flex-direction-row">
                                            <div><svg x="0" y="0" width="28" height="28"><rect x="0" y="0" width="28" height="28" transform="translate(8.664006925057517 0.5521327237109247) rotate(35.9 14 14)" fill="#FAAB00"></rect><rect x="0" y="0" width="28" height="28" transform="translate(-3.5820380599961976 -13.625432760794109) rotate(370.9 14 14)" fill="#F2D202"></rect><rect x="0" y="0" width="28" height="28" transform="translate(-24.48820639857301 7.071976417273904) rotate(264.6 14 14)" fill="#186BF2"></rect></svg></div>
                                            <div class="box send__select-recipient-wrapper__group-item__content box--flex-direction-row" data-testid="recipient"><p class="box mm-text send__select-recipient-wrapper__group-item__title mm-text--body-lg-medium box--flex-direction-row box--color-text-default">Account 1</p><p class="box mm-text send__select-recipient-wrapper__group-item__subtitle mm-text--body-md box--flex-direction-row box--color-text-alternative">0xe2b5...2d7b</p></div>
                                        </div>
                                    </Link>

                                    <br></br>
                                    <Link to='/sendTo'>
                                        <div class="box send__select-recipient-wrapper__group-item box--padding-4 box--flex-direction-row">
                                            <div><svg x="0" y="0" width="28" height="28"><rect x="0" y="0" width="28" height="28" transform="translate(8.664006925057517 0.5521327237109247) rotate(35.9 14 14)" fill="#FAAB00"></rect><rect x="0" y="0" width="28" height="28" transform="translate(-3.5820380599961976 -13.625432760794109) rotate(370.9 14 14)" fill="#F2D202"></rect><rect x="0" y="0" width="28" height="28" transform="translate(-24.48820639857301 7.071976417273904) rotate(264.6 14 14)" fill="#186BF2"></rect></svg></div>
                                            <div class="box send__select-recipient-wrapper__group-item__content box--flex-direction-row" data-testid="recipient"><p class="box mm-text send__select-recipient-wrapper__group-item__title mm-text--body-lg-medium box--flex-direction-row box--color-text-default">Account 2</p><p class="box mm-text send__select-recipient-wrapper__group-item__subtitle mm-text--body-md box--flex-direction-row box--color-text-alternative">0xe2c5...3b8a</p></div>
                                        </div></Link> <br></br>

                                    <Link to='/sendTo'>
                                        <div class="box send__select-recipient-wrapper__group-item box--padding-4 box--flex-direction-row">
                                            <div><svg x="0" y="0" width="28" height="28"><rect x="0" y="0" width="28" height="28" transform="translate(8.664006925057517 0.5521327237109247) rotate(35.9 14 14)" fill="#FAAB00"></rect><rect x="0" y="0" width="28" height="28" transform="translate(-3.5820380599961976 -13.625432760794109) rotate(370.9 14 14)" fill="#F2D202"></rect><rect x="0" y="0" width="28" height="28" transform="translate(-24.48820639857301 7.071976417273904) rotate(264.6 14 14)" fill="#186BF2"></rect></svg></div>
                                            <div class="box send__select-recipient-wrapper__group-item__content box--flex-direction-row" data-testid="recipient"><p class="box mm-text send__select-recipient-wrapper__group-item__title mm-text--body-lg-medium box--flex-direction-row box--color-text-default">Account 3</p><p class="box mm-text send__select-recipient-wrapper__group-item__subtitle mm-text--body-md box--flex-direction-row box--color-text-alternative">0xe1f6...0b6c</p></div>
                                        </div></Link>


                                </div>
                            </div>
                        </Box>
                    </div>



                </Box>
            </Container>


        </div>


    )
}

export default Send;