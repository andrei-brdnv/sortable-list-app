import React from "react";
import Loader from "react-loader-spinner";

export default props => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '100px'}}>
            <Loader
                type="Oval"
                color="#9e9e9e"
                height={100}
                width={100}
            />
        </div>
    )
}