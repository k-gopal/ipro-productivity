import BeRepos from './components/BeRepos';
import CommonShortcuts from './components/CommonShortcuts';
import CreateTask from './components/CreateTask';
import FeRepos from './components/FeRepos';
import Header from './components/Header';
import JiraProjects from './components/JiraProjects';
import JiraShortcuts from './components/JiraShortcuts';

function App() {
    return (
        <div className='container'>
            <Header />
            <div className='row g-2'>
                <div className='col-4'>
                    <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                        <JiraProjects />
                    </div>
                </div>
                <div className='col-4 d-flex align-items-stretch'>
                    <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                        <JiraShortcuts />
                    </div>
                </div>
                <div className='col-4 d-flex align-items-stretch'>
                    <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                        <CommonShortcuts />
                    </div>
                </div>
            </div>
            <div className='row g-2 my-2'>
                <div className='col-4'>
                    <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                        <FeRepos />
                    </div>
                </div>
                <div className='col-4 d-flex align-items-stretch'>
                    <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                        <BeRepos />
                    </div>
                </div>
                <div className='col-4 d-flex align-items-stretch'>
                    <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                        <CreateTask />
                    </div>
                </div>
            </div>
            <div className='shadow p-3 mb-5 bg-body rounded h-100 w-100'>
                Built By:{' '}
                <a href='https://instagram.com/i_m_gk_/' target='_blank'>
                    Gopal
                </a>
            </div>
        </div>
    );
}

export default App;
