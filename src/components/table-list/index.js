import React from "react";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        cursor: 'pointer'
    },
    body: {
        fontSize: 14,
        cursor: 'pointer'
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        margin: '0 auto',
        maxWidth: 900,
    },
    row: {

    }
});

export default props => {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.row}>
                    <StyledTableRow>
                        <StyledTableCell onClick={() => props.onSort('id')}>ID</StyledTableCell>
                        <StyledTableCell onClick={() => props.onSort('firstName')} align="left">First name</StyledTableCell>
                        <StyledTableCell onClick={() => props.onSort('lastName')} align="left">Last name</StyledTableCell>
                        <StyledTableCell onClick={() => props.onSort('email')} align="left">Email</StyledTableCell>
                        <StyledTableCell onClick={() => props.onSort('phone')} align="left">Phone</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {props.data.map(item =>
                        <StyledTableRow key={item.phone} onClick={() => props.handleRowClick(item)}>
                            <StyledTableCell component="th" scope="row">{item.id}</StyledTableCell>
                            <StyledTableCell align="left">{item.firstName}</StyledTableCell>
                            <StyledTableCell align="left">{item.lastName}</StyledTableCell>
                            <StyledTableCell align="left">{item.email}</StyledTableCell>
                            <StyledTableCell align="left">{item.phone}</StyledTableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

