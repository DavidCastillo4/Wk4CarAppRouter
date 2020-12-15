import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

let useStyles = makeStyles({
    nav: {
        float: 'right',
        display: 'flex'
    },
    li: {
        margin: '0px 10px',
        listStyle: 'none',
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    }
});

let Navigation = () => {
    let classes = useStyles();
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    FakeCars.com
                </Typography>
                <ul className={classes.nav}>
                    <li className={classes.li}>
                        <Link to="/" className={classes.link}>Home</Link>
                    </li>
                    <li className={classes.li}>
                        <Link to="/About" className={classes.link}>About</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation


/*
<Link to="/">About</Link>

*/