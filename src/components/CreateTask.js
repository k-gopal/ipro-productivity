import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTask, deleteTask } from '../redux/actions';

const CreateTask = ({ appReducer, setTask, deleteTask }) => {
    const [task, setTasks] = useState();

    const generateUniqueID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 3) | 8;
            return v.toString(16);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task?.length) {
            setTask({
                id: generateUniqueID(),
                name: task,
            });
            setTasks('');
        }
    };
    return (
        <>
            <div className='fw-bold '>
                <i class='bi bi-list-ul me-2'></i>
                CreateTask
            </div>
            <div>
                <form action={(e) => handleSubmit(e)}>
                    <label class='form-label'>Task Name:</label>
                    <input type='text' class='form-control' onChange={(e) => setTasks(e.target.value)} value={task} placeholder='Enter task name...' />
                    <button type='submit' onClick={(e) => handleSubmit(e)} class='btn btn-dark my-3 float-right'>
                        Create Task
                    </button>
                </form>
            </div>
            <div>
                <u className='fw-bold'>Tasks:</u>
                {appReducer?.tasks?.length &&
                    appReducer?.tasks.map((ele) => (
                        <>
                            <div class='form-check' onClick={() => deleteTask(ele?.id)}>
                                <input class='form-check-input' type='checkbox' />
                                <label class='form-check-label' for='flexCheckDefault'>
                                    {ele?.name}
                                </label>
                            </div>
                        </>
                    ))}
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
    setTask,
    deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
