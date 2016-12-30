import React from 'react';

const FetchError = ({
    message,
    onRetry
}) => (
    <div>
        <p>API request failed</p>
        <p>Error Message: { message }</p>
        <p>
            <button onClick={ onRetry }>Retry</button>
        </p>
    </div>
);

export default FetchError;
