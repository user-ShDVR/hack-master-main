import React, { useState } from "react";
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { HeaderData } from "./HeaderData";
import { Chip } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const Header = (path) => {

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#0971f1',
                darker: '#053e85',
            },
            neutral: {
                main: '#EEEFF2',
                contrastText: '#3F4249',
                darker: '#3F4249'
            },
            neutralInactive: {
                main: '#EEEFF2 ',
                contrastText: '#3F4249',
                darker: '#3F4249'
            }
        },
    });

    const [color, setColor] = useState('neutralInactive')

    const handleClick = () => {
        setColor('neutral')
    }
    
    return (
        <div className="nav-bar">
            <Link style={{alignItems:"center", marginLeft:20, marginBottom:'auto',marginTop:'auto',placeContent:'center',placeSelf:'center', textDecoration:'none', fontSize: 30, fontFamily: 'Inter-Medium'}} className="logo" to='/chat'>
                Smart&Flexible
                {/* <img src ={LogoSubtitle} alt='sub logo' /> */}
            </Link>
            <nav className='nav-menu'>
                <ul className="nav-menu-items">
                    {HeaderData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {/* {item.icon} */}
                                    <ThemeProvider theme={theme}>
                                        <Chip style={{ paddingLeft: '12px', borderColor: '#00000' }} clickable={true} variant="outline" color={color} icon={item.icon} onClick={handleClick} />
                                    </ThemeProvider>

                                    {/* <span className="item-title">{item.title}</span> */}

                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}