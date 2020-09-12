import React from "react";

import ReactPaginate from 'react-paginate';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));



export default props => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Pagination count={20} page={props.currentPage} onChange={props.handlePageClick} >
            </Pagination>

            {/*<ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={props.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />*/}
        </div>
    )
}