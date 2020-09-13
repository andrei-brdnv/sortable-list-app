import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {NavLink} from "react-router-dom";

export default props => {
    const dataItem = props.data.map(item =>
            <TableRow key={item.phone} onClick={() => console.log(item.id)}>
                <TableCell component="th" scope="row">{item.id}</TableCell>
                <TableCell align="right">{item.firstName}</TableCell>
                <TableCell align="right">{item.lastName}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.phone}</TableCell>
            </TableRow>
    )
    return dataItem
}