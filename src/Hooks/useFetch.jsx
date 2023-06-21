import { useCallback, useEffect } from 'react';
import instance from '../services/instance';
import { useDispatch } from 'react-redux';
import { getData } from 'src/store/Reducers/posts';

const useFetch = () => {
    const dispatch = useDispatch();

    const findPosts = useCallback(async () => {
        const response = await instance.get('/');

        dispatch(getData(response.data.results));
    }, [dispatch]);

    useEffect(() => {
        findPosts();
    }, [findPosts]);

    return findPosts;
}

export default useFetch;
