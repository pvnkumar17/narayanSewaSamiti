import React from "react";
import './NssHeader.css';

export const NssHeader = () => {
    return (
        <div className="nss-header-wrapper">
            <div className="container">
                <div className="nss-header clearfix">
                    <div className="nss-logo">{'Narayan Sewa Smiti Satbarwa'}</div>
                    <div className="nss-cta"><span className="cta-label">{'Contact US'}</span>{'9999999999'}</div>
                </div>
            </div>
        </div>
    )

}

export default NssHeader;