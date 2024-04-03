import React from 'react';

const Image = ({ name, alt, ...props }) => {
    return (
        <img src={process.env.PUBLIC_URL + `/assets/images/${name}`} {...props} alt={`${alt}`} />
    );
}

export default Image;
