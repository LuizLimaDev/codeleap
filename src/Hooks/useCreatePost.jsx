import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createUserPost } from 'src/store/Reducers/posts';


const useCreatePost = () => {
    const dispatch = useDispatch();
    const { username } = useParams()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [validPost, setValidPost] = useState(false);

    function handleCreatePost(e) {
        e.preventDefault();

        if (title && content) {
            setValidPost(true)
        }

        const currentDate = new Date();
        const timeStamp = +currentDate;

        const userPost = {
            username,
            created_datatime: timeStamp,
            title,
            content
        }

        dispatch(createUserPost(userPost));

        console.log('Posted', userPost)
        setTitle('');
        setContent('');
        setValidPost(false);
    }

    return {
        username,
        title,
        setTitle,
        content,
        setContent,
        validPost,
        handleCreatePost
    }
}

export default useCreatePost;