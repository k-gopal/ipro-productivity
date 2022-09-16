import React from 'react';
import { openInNewTab } from '../common';
import { feRepos } from '../config/AppConstants';

const FeRepos = () => {
    return (
        <>
            <div className='fw-bold'>
                <i className='bi bi-kanban-fill me-2'></i>
                <u>Frontend Repositories</u>
            </div>
            <ul class='list-group list-group-flush'>
                {Object.keys(feRepos).map((ele) => {
                    return (
                        <li class='list-group-item btn text-start btn-light' onClick={() => openInNewTab(feRepos[ele])}>
                            <i class='bi bi-arrow-up-right-square-fill me-2'></i>
                            {ele}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default FeRepos;
