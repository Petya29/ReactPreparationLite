import React, { FC, useEffect, useRef } from 'react';
import Alert from '../../components/UI/Alert/Alert';
import List from '../../components/UI/List/List';
import Loader from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts } from '../../store/posts/ActionCreators';

const Home: FC = () => {
    const dispatch = useAppDispatch();

    const { posts, page, isPostLoading, isPostError } = useAppSelector(state => state.post);

    let getPosts = useRef(() => { });
    getPosts.current = () => {
        if (!posts.length) dispatch(fetchPosts(page));
    }

    useEffect(() => {
        getPosts.current();
    }, []);


    return (
        <div className='home-view container'>
            {isPostLoading &&
                <Loader centered />
            }
            <List items={posts} />
            {isPostError &&
                <Alert color='error'>Something went wrong</Alert>
            }
        </div>
    )
}

export default Home;