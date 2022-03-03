import React, { FC, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import { IPost } from '../../models/IPost';
import { IUser } from '../../models/IUser';
import PostService from '../../services/PostServise';
import UserService from '../../services/UserService';

const Post: FC = () => {

  const { id } = useParams();

  const [post, setPost] = useState<IPost>({} as IPost);
  const [user, setUser] = useState<IUser>({} as IUser);

  let fetchInfo = useRef(async () => { });
  fetchInfo.current = async () => {
    try {
      const postResponse = await PostService.fetchPost(id);
      setPost(postResponse.data);
      const userResponse = await UserService.fetchUserById(postResponse.data.user_id);
      setUser(userResponse.data);
    } catch (e) {
      console.log(e);
    }
  }

  const formatUser = () => {
    if (user.name !== undefined) return `Posted by ${user.name}`;
    return 'Posted by unknown';
  }

  useEffect(() => {
    fetchInfo.current();
  }, [])


  return (
    <div className='post-view container'>
      <Card
        title={[post.title, formatUser()]}
        body={post.body}
        hoverable={true}
        truncateTitle={false}
      >
        <Button
          color='primary'
          size='medium'
          variant='outlined'
          disabled={user.name === undefined ? true : false}
        >
          {user.id === undefined
            ?
            'Open user'
            :
            <Link
              to='/'
              style={{ color: 'inherit', marginRight: '0px' }}
            >
              'Open user'
            </Link>
          }
        </Button>
      </Card>
    </div>
  )
}

export default Post