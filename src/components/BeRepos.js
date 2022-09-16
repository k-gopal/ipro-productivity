import React from 'react';
import { openInNewTab } from '../common';
import { beRepos } from '../config/AppConstants';

const BeRepos = () => {
    return (
        <>
            <div className='fw-bold'>
                <i className='bi bi-kanban-fill me-2'></i>
                <u>Backend Repositories </u>
            </div>
            <ul className='list-group list-group-flush'>
                {Object.keys(beRepos).map((ele) => {
                    return (
                        <li className='list-group-item btn text-start btn-light' onClick={() => openInNewTab(beRepos[ele])}>
                            <i className='bi bi-arrow-up-right-square-fill me-2'></i>
                            {ele}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default BeRepos;
