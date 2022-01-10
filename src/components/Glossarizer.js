import $ from 'jquery';
import React from 'react';
import '../../public/tooltip/tooltip.css';

export default function Glossarizer({dep}) {
    React.useEffect(() => {
        window.jQuery = $;
        window.Glossarizer = require('glossarizer/jquery.glossarize.js');
        window.Tooltip = require('../../public/tooltip/tooltip.js');
        $(':root').glossarizer({
            sourceURL: '/glossary.json',
            lookupTagName: 'p, ul, ol',
            callback: function() {
                // Callback fired after glossarizer finishes its job
                // eslint-disable-next-line
                new tooltip()
            }
        })
    }, [dep]);

    return <></>;
}
