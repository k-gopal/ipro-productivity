import React from 'react';
import { jiraShortcuts } from '../config/AppConstants';
import { openInNewTab } from '../common';

const JiraShortcuts = () => {
    return (
        <>
            <div className='fw-bold'>
                <i className='bi bi-kanban-fill me-2'></i>
                <u>Jira Shortcuts</u>
            </div>
            <ul class='list-group list-group-flush'>
                {Object.keys(jiraShortcuts).map((ele) => {
                    return (
                        <li class='list-group-item btn text-start btn-light' onClick={() => openInNewTab(jiraShortcuts[ele])}>
                            <i class="bi bi-arrow-up-right-square-fill me-2"></i>{ele}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default JiraShortcuts;
