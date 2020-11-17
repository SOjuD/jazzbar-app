import React from 'react';

import {Link} from 'react-router-dom';

const RouterLink = ({children, path, classNames = ""}) => {
    return <Link to={path} className={classNames} >{children}</Link>;
}

export default RouterLink;