import React, { FC, useState, useEffect, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Alert from '../../components/UI/Alert/Alert';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import Loader from '../../components/UI/Loader/Loader';
import { IPost } from '../../models/IPost';
import { IUser } from '../../models/IUser';
import PostService from '../../services/PostServise';
import UserService from '../../services/UserService';

const Post: FC = () => {

  const { id } = useParams();

  const [post, setPost] = useState<IPost>({} as IPost);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let fetchInfo = useRef(async () => { });
  fetchInfo.current = async () => {
    try {
      setIsLoading(true);
      setError(false);

      const postResponse = await PostService.fetchPost(id);
      setPost(postResponse.data);
      const userResponse = await UserService.fetchUserById(postResponse.data.user_id);
      setUser(userResponse.data);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setIsLoading(false);
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
      {isLoading
        ?
        <Loader centered />
        :
        <Fragment>
          {error &&
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
                  to={`/user/${id}`}
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