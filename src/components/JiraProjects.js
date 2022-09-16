import React, { useState } from 'react';
import { jiraProjects } from '../config/AppConstants';
import { openInNewTab } from '../common';

const JiraProjects = () => {
    const [checked, setChecked] = useState('IFA');
    const [ticket, setTicket] = useState();

    const handleSubmit = () => {
        if (ticket?.length) {
            openInNewTab(`${jiraProjects[checked] + ticket}`);
        }
    };
    return (
        <>
            <div className='fw-bold'>
                <i className='bi bi-kanban-fill me-2'></i>
                <u>Jira Projects</u>
            </div>
            <div>
                {Object.keys(jiraProjects).map((ele) => {
                    return (
                        <div class='form-check' onClick={() => setChecked(ele)}>
                            <input class='form-check-input' type='checkbox' value='' id={`jiraProjectChecks-${ele}`} checked={ele === checked} />
                            <label class='form-check-label' for='flexCheckDefault'>
                                {ele}
                            </label>
                        </div>
                    );
                })}
                <div class='my-3'>
                    <form action={handleSubmit}>
                        <label class='form-label'>Ticket ID:</label>
                        <input type='text' class='form-control' value={ticket} onChange={(e) => setTicket(e.target.value)} placeholder='Enter ticket ID to search...' />
                        <button type='submit' onClick={handleSubmit} class='btn btn-dark my-3 float-right'>
                            Open Ticket
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default JiraProjects;
