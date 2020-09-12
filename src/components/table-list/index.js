import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DataItem from "../data-item"

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default props => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell onClick={() => props.onSort('id')}>id</TableCell>
                        <TableCell onClick={() => props.onSort('firstName')} align="right">first name</TableCell>
                        <TableCell onClick={() => props.onSort('lastName')} align="right">last name</TableCell>
                        <TableCell onClick={() => props.onSort('email')} align="right">email</TableCell>
                        <TableCell onClick={() => props.onSort('phone')} align="right">phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <DataItem
                        data={props.data.fetchedData}
                    />
                </TableBody>
            </Table>
        </TableContainer>
    );
}

