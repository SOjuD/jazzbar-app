import React from 'react';
import './style.sass';

const  ErrorIndicator = () => {
    return (
        <div className='errorIndicator'>
            <h2 className="text-danger">Возникла непредвиденная ошибка, скорее звоните мне!!!</h2>
        </div>
    );
};

export default ErrorIndicator;