import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function TableList(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="right">first name</TableCell>
                        <TableCell align="right">last name</TableCell>
                        <TableCell align="right">email</TableCell>
                        <TableCell align="right">phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((item) => (
                        <TableRow key={item.phone}>
                            <TableCell component="th" scope="row">{item.id}</TableCell>
                            <TableCell align="right">{item.firstName}</TableCell>
                            <TableCell align="right">{item.lastName}</TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right">{item.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

