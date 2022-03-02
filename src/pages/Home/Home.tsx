import React, { FC, useEffect, useState, useRef } from 'react';
import List from '../../components/UI/List/List';
import { IPost } from '../../models/IPost';
import PostService from '../../services/PostServise';

const Home: FC = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [page, setPage] = useState<number>(1);

    let fetchPosts = useRef(async () => { });
    fetchPosts.current = async () => {
        try {
            const response = await PostService.fetchPosts(page, 5);
            setPosts(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPosts.current();
    }, [setPage]);


    return (
        <div className='home-view container'>
            <List items={posts} />
        </div>
    )
}

export default Home;