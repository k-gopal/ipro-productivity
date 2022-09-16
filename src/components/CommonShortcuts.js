import React from 'react';
import { commonShortcuts } from '../config/AppConstants';
import { openInNewTab } from '../common';

const CommonShortcuts = () => {
    return (
        <>
            <div className='fw-bold'>
                <i className='bi bi-kanban-fill me-2'></i>
                <u>Common Shortcuts</u>
            </div>
            <ul class='list-group list-group-flush'>
                {Object.keys(commonShortcuts).map((ele) => {
                    return (
                        <li class='list-group-item btn text-start btn-light' onClick={() => openInNewTab(commonShortcuts[ele])}>
                            <i class="bi bi-bookmark-fill me-2"></i>{ele}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default CommonShortcuts;
