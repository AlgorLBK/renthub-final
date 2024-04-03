import React from "react";

export const Welcome = ({user}) => {
    return (
        <div className="sw_notification sw_notification-styled bg-coral-inverted sw_rsq-1 ">
            <h3 className="font_xd-1">Welcome, {`${user}`}</h3>
        </div>
    );
}