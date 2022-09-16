import React from 'react';
import { openInNewTab } from '../common';
import { adminPanel, bpd, ccp, mmms, onetechnical, webApp } from '../config/AppConstants';

const Panels = () => {
    return (
        <>
            <div className='col-2'>
                <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                    <div className='fw-bold'>
                        <i className='bi bi-kanban-fill me-2'></i>
                        <u>Admin Panel</u>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {Object.keys(adminPanel).map((ele) => {
                            return (
                                <li className='list-group-item btn text-start btn-light' onClick={() => openInNewTab(adminPanel[ele])}>
                                    <i className='bi bi-arrow-up-right-square-fill me-2'></i>
                                    {ele}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className='col-2'>
                <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                    <div className='fw-bold'>
                        <i className='bi bi-kanban-fill me-2'></i>
                        <u>OneTechnical</u>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {Object.keys(onetechnical).map((ele) => {
                            return (
                                <li className='list-group-item btn text-start btn-light' onClick={() => openInNewTab(onetechnical[ele])}>
                                    <i className='bi bi-arrow-up-right-square-fill me-2'></i>
                                    {ele}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className='col-2'>
                <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                    <div className='fw-bold'>
                        <i className='bi bi-kanban-fill me-2'></i>
                        <u>CCP</u>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {Object.keys(ccp).map((ele) => {
                            return (
                                <li className='list-group-item btn text-start btn-light' onClick={() => openInNewTab(ccp[ele])}>
                                    <i className='bi bi-arrow-up-right-square-fill me-2'></i>
                                    {ele}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className='col-2'>
                <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                    <div className='fw-bold'>
                        <i className='bi bi-kanban-fill me-2'></i>
                        <u>BPD</u>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {Object.keys(bpd).map((ele) => {
                            return (
                                <li className='list-group-item btn text-start btn-light' onClick={() => openInNewTab(bpd[ele])}>
                                    <i className='bi bi-arrow-up-right-square-fill me-2'></i>
                                    {ele}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className='col-2'>
                <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                    <div className='fw-bold'>
                        <i className='bi bi-kanban-fill me-2'></i>
                        <u>MMMS</u>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {Object.keys(mmms).map((ele) => {
                            return (
                                <li className='list-group-item btn text-start btn-light' onClick={() => openInNewTab(mmms[ele])}>
                                    <i className='bi bi-arrow-up-right-square-fill me-2'></i>
                                    {ele}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className='col-2'>
                <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                    <div className='fw-bold'>
                        <i className='bi bi-kanban-fill me-2'></i>
                        <u>Web App</u>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {Object.keys(webApp).map((ele) => {
                            return (
                                <li className='list-group-item btn text-start btn-light' onClick={() => openInNewTab(webApp[ele])}>
                                    <i className='bi bi-arrow-up-right-square-fill me-2'></i>
                                    {ele}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Panels;
