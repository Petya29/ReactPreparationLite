import React, { FC, useEffect, useRef } from 'react';
import Alert from '../../components/UI/Alert/Alert';
import List from '../../components/UI/List/List';
import Loader from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getPosts } from '../../store/posts/postSlice';

const Home: FC = () => {
    const dispatch = useAppDispatch();

    const { posts, page, isPostLoading, isPostError } = useAppSelector(state => state.post);

    let findPosts = useRef(() => { });
    findPosts.current = () => {
        if (!posts.length) dispatch(getPosts(page));
    }

    useEffect(() => {
        findPosts.current();
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