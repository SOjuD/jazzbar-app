import React from 'react';

const resetStorage = () => {
    window.localStorage.clear();
    window.location = window.location.origin;
}

const ResetBotton = () => {
    return (
        <button 
            className="btn btn-primary mt-3"
            onClick={resetStorage} >
                Сбросить
            </button>
    )
}

export default ResetBotton;