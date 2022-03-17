import React, { FC, Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Alert from '../../components/UI/Alert/Alert';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import Loader from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/IPost';
import { IUser } from '../../models/IUser';
import { fetchPosts } from '../../store/posts/ActionCreators';
import { fetchUserByID } from '../../store/users/ActionCreators';

const Post: FC = () => {

  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { posts, isPostLoading, } = useAppSelector(state => state.post);
  const { users, isUserLoading, isUserError } = useAppSelector(state => state.user);

  const [post, setPost] = useState<IPost>({} as IPost);
  const [user, setUser] = useState<IUser>({
    id: null,
    name: 'unknown',
    email: 'unknown',
    gender: 'unknown',
    status: 'unknown'
  } as IUser);

  let findPost = useRef(async () => { });
  findPost.current = async () => {
    if (!posts.length) await dispatch(fetchPosts(1));
    posts.forEach(el => {
      if (String(el.id) === id) setPost(el);
    });
  }

  let findUser = useRef(async () => { });
  findUser.current = async () => {
    if (!users.length) return await dispatch(fetchUserByID(post.user_id));
    for (let i = 0; i < users.length; i++) {
      if (post.user_id === users[i].id) {
        return setUser(users[i]);
      }
    }
    dispatch(fetchUserByID(post.user_id));
  }

  useEffect(() => {
    findPost.current();
  }, [posts]);

  useEffect(() => {
    if (post.user_id) findUser.current();
  }, [post, users]);

  return (
    <div className='post-view container'>
      {isPostLoading || isUserLoading
        ?
        <Loader centered />
        :
        <Fragment>
          {isUserError &&
            <Alert
              color='error'
              style={{
                width: '64%',
                margin: '15px auto'
              }}
            >
              User not found
            </Alert>
          }
          <Card
            title={[post.title, `Posted by ${user.name}`]}
            body={post.body}
            hoverable={true}
            truncateTitle={false}
          >
            <Button
              color='primary'
              size='medium'
              variant='outlined'
              disabled={user.id === null}
            >
              {user.id === null
                ?
                'Open user'
                :
                <Link
                  to={`/user/${post.user_id}`}
                  style={{ color: 'inherit', marginRight: '0px' }}
                >
                  Open user
                </Link>
              }
            </Button>
          </Card>
        </Fragment>
      }
    </div>
  )
}

export default Post