import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';

const Header = ({ setName, appReducer }) => {
    const [name, setStateName] = useState('');
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log(new Date().getHours())
        getNotify()
        if (!appReducer?.name) {
            let button = document.getElementById('getUserName');
            button.click();
        }
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setDate(new Date().toLocaleTimeString());
        if(new Date().getMinutes() === 30 && new Date().getSeconds() === 0){
            new Notification("Please Drink Some Water.")
        }
        if(new Date().getMinutes() === 0 && new Date().getSeconds() === 0){
            new Notification("Please take a walk.")
        }
    };

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const getNotify = () => {
        Notification.requestPermission(obj => {
            if(obj === "granted"){
                console.log(obj)
            }
        })
    }

    return (
        <>
            <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
                <a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
                    <span className='fs-4'>Hi, {appReducer?.name}!</span>
                </a>

                <ul className='nav'>
                    <li className='nav-item fs-4'>{days[new Date().getDay()]}, {date}</li>
                </ul>
            </header>
            <button id='getUserName' hidden type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
                Launch static backdrop modal
            </button>
            <div className='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='staticBackdropLabel'>
                                User Name
                            </h5>
                        </div>
                        <div className='modal-body'>
                            <input type='email' onChange={(e) => setStateName(e.target.value)} className='form-control' placeholder='Your Name' />
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={() => setName(name)}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        appReducer: state.appReducer,
    };
};

const mapDispatchToProps = {
    setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
