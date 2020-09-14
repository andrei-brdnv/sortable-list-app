import React from "react";
import { smallUrl, bigUrl } from "../../redux/utils";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const useStyles = makeStyles({
    buttonSmall: {
        display: 'flex',
        justifyContent: 'left',
        marginBottom: '20px',
        backgroundColor: '#a5d6a7'
    },
    buttonBig: {
        display: 'flex',
        justifyContent: 'left',
        marginBottom: '20px',
        backgroundColor: '#ffcc80'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '100px'
    },
    icon: {
        marginRight: '10px'
    }
});

export default (props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth="sm">
            <Button
                className={classes.buttonSmall}
                variant="contained"
                size="large"
                onClick={() => props.selectData(smallUrl)}
            >
                <GetAppRoundedIcon className={classes.icon} />
                Загрузить маленький объем данных <b style={{ marginLeft: '5px' }}>(32 элемента)</b>
            </Button>
            <Button
                className={classes.buttonBig}
                variant="contained"
                size="large"
                onClick={() => props.selectData(bigUrl)}
            >
                <GetAppRoundedIcon className={classes.icon} />
                Загрузить большой объем данных <b style={{ marginLeft: '5px' }}>(1000 элементов)</b>
            </Button>
        </Container>
    )
}