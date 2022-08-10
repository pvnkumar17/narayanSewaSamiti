import React from "react";

export const NssLayout = (props) => {
    return (
        <div className='nss-layout'>
            <div className="layout-container">
                <div className="nss-layout-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default NssLayout;