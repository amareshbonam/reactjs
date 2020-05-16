import React, { Component } from "react";
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, Theme } from '@material-ui/core';


const styles = () => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    // margin: {
    //     margin: theme.spacing.unit * 2,
    // },
    // padding: {
    //     padding: theme.spacing.unit
    // }
});

class Login extends Component {
    render() {
        const classes = styles;
        let showAlert = () => {
            // alert("hello world", this.ref )
        }
        let field2 = React.createRef();
        return (
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" onChange={showAlert}/>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        );
    }
}

export default Login;