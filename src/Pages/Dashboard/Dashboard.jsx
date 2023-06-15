import Post from 'components/Post/Post';
import Publish from 'components/Publish/Publish'
import Header from 'src/components/Header/Header';

function Dashboard() {
    return (
        <div className='h-full bg-white'>
            <Header />
            <Publish />
            <Post />
        </div>
    );
}

export default Dashboard;