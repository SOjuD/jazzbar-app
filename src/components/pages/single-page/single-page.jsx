import React from 'react';
import {useParams} from 'react-router-dom';

const SinglePage = () => {
    const { id } = useParams();
    return (
        <section>{`Single page ${id}`}</section>
    );
}

export default SinglePage;