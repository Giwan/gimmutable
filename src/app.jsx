/*
 * Gemplate
 * November 2015
 * Author: Giwan Persaud
 */

import style from './style.scss'
import React from "react"
import $ from 'jquery'
import Main from './component/Main/Main.jsx'


//# sourceMappingURL=../src/app.jsx


if (!global.Intl) {
    require.ensure([
        'core-js',
        'intl',
        'intl/locale-data/jsonp/en.js'
    ], function (require) {
        require('core-js');
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        React.render(<Main />, document.getElementById('app-container'));
    });
} else {
    React.render(<Main />, document.getElementById('app-container'));
}
