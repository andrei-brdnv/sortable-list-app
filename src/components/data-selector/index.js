import React from "react";
import Button from '@material-ui/core/Button';

export default (props) => {
    return (
        <div>
            <Button onClick={props.onSelectSmall} variant="contained" color="primary">
                Primary
            </Button>
            <Button onClick={props.onSelectBig} variant="contained" color="secondary">
                Secondary
            </Button>
        </div>
    )
}