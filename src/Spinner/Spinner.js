import React, { useState } from 'react';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  height: 90vh;
  border-color: red;
`;

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#E9E828");

    return (
        <div className="sweet-loading">
            <HashLoader color={color} loading={loading} css={override} size={150} />
        </div>
    );
};

export default Spinner;