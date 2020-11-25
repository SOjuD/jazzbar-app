import React from 'react';
import {connect} from 'react-redux';

import './total-page.sass';

const TotalPage = ({total}) => {
    return (
        <section className="totalPage">
            <div className="container">
                <h3>{new Date().toLocaleDateString()}</h3>
                <h1>{`${total} руб`}</h1>
            </div>
        </section>
    );
}

const mapStateToProps = ({total}) => {
    return {total}
}

export default connect(mapStateToProps)(TotalPage);