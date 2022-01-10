import $ from 'jquery';
import React from 'react';
import '../../public/tooltip/tooltip.css';

export default function Glossarizer({dep}) {
    React.useEffect(() => {
        window.jQuery = $;
        window.Glossarizer = require('glossarizer/jquery.glossarize.js');
        window.Tooltip = require('../../public/tooltip/tooltip.js');
        $('.body-content').glossarizer({
            sourceURL: '/glossary.json',
            lookupTagName: 'p:not(a > p), ul:not(a > ut), ol:not(a > ol)',
            callback: function() {
                // Callback fired after glossarizer finishes its job
                // eslint-disable-next-line
                new tooltip()
            }
        })
    }, [dep]);

    return <></>;
}
