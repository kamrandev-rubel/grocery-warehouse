import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                // className={match ? 'text-red-500' : 'text-black'}
                style={{
                    textDecoration: match ? "underline" : "none",
                    textDecorationWidth: match ? "10px" : "0px",
                    color: match ? "#E9E828" : "black",
                    fontWeight: match ? "bold" : "normal",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );

};

export default CustomLink;