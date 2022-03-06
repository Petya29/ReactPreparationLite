import React, { FC, useEffect, useState, useRef } from 'react';
import Alert from '../../components/UI/Alert/Alert';
import List from '../../components/UI/List/List';
import Loader from '../../components/UI/Loader/Loader';
import { IPost } from '../../models/IPost';
import PostService from '../../services/PostServise';

const Home: FC = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [page, setPage] = useState<number>(1);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    let fetchPosts = useRef(async () => { });
    fetchPosts.current = async () => {
        try {
            setIsLoading(true);
            setError(false);

            const response = await PostService.fetchPosts(page, 5);
            setPosts(response.data);
        } catch (e) {
            console.log(e);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts.current();
    }, [setPage]);


    return (
        <div className='home-view container'>
            {isLoading &&
                <Loader centered />
            }
            <List items={posts} />
            {error &&
                <Alert color='error'>Something went wrong</Alert>
            }
        </div>
    )
}

export default Home;