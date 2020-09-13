import React from "react";
import Loader from "react-loader-spinner";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '100px'
    }
});

export default props => {
    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth="sm">
            <Loader
                type="Oval"
                color="#9e9e9e"
                height={100}
                width={100}
            />
        </Container>
    )
}