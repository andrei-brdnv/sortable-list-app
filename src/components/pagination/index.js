import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px auto'
    }
}));



export default props => {
    const classes = useStyles()
    const pageCount = Math.ceil(props.filteredData.length / props.data.perPage)

    return (
        <div className={classes.container}>
            <Pagination
                count={pageCount}
                page={props.data.currentPage}
                onChange={props.handlePageClick}
                color="primary"
            />
        </div>
    )
}