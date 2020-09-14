import React from "react";
import "./style.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        fontSize: 14,
        /*fontWeight: 600,*/
        backgroundColor: '#757575',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        cursor: 'pointer'
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#eeeeee',
            cursor: 'pointer'
        },
    },
}))(TableRow);

export default props => {
    const {data, sortData: {sortField, sort}} = props

    return (
        <TableContainer>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell
                            onClick={() => props.onSort('id')}
                        >
                            ID {sortField === 'id' && sort === 'asc'
                            ? <FontAwesomeIcon className="icon" icon="angle-up"/>
                            : <FontAwesomeIcon className="icon" icon="angle-down"/>}
                        </StyledTableCell>
                        <StyledTableCell
                            onClick={() => props.onSort('firstName')}
                            align="left"
                        >
                            First name {sortField === 'firstName' && sort === 'asc'
                            ? <FontAwesomeIcon className="icon" icon="angle-up"/>
                            : <FontAwesomeIcon className="icon" icon="angle-down"/>}
                        </StyledTableCell>
                        <StyledTableCell
                            onClick={() => props.onSort('lastName')}
                            align="left"
                        >
                            Last name {sortField === 'lastName' && sort === 'asc'
                            ? <FontAwesomeIcon className="icon" icon="angle-up"/>
                            : <FontAwesomeIcon className="icon" icon="angle-down"/>}
                        </StyledTableCell>
                        <StyledTableCell
                            onClick={() => props.onSort('email')}
                            align="left"
                        >
                            Email {sortField === 'email' && sort === 'asc'
                            ? <FontAwesomeIcon className="icon" icon="angle-up"/>
                            : <FontAwesomeIcon className="icon" icon="angle-down"/>}
                        </StyledTableCell>
                        <StyledTableCell
                            onClick={() => props.onSort('phone')}
                            align="left"
                        >
                            Phone {sortField === 'phone' && sort === 'asc'
                            ? <FontAwesomeIcon className="icon" icon="angle-up"/>
                            : <FontAwesomeIcon className="icon" icon="angle-down"/>}
                        </StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {data.map(item =>
                        <StyledTableRow
                            key={item.phone}
                            onClick={() => props.handleRowClick(item)}
                        >
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

