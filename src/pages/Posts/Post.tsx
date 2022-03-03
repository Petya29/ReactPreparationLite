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

      const elems = document.querySelectorAll('.tooltipped');
      M.Tooltip.init(elems, {});
      const instance = M.Tooltip.getInstance(elems[0]);
      instance.destroy()
    } catch (e) {
      console.log(e);
      const elems = document.querySelectorAll('.tooltipped');
      M.Tooltip.init(elems, {});
    }
  }

  useEffect(() => {
    fetchInfo.current();
  }, [])


  return (
    <div className='post-view container'>
      <Card
        data={post}
        user={user}
        truncateTitle={false}
      >
        <span
          className='tooltipped'
          data-position="bottom"
          data-tooltip="User is Unknown"
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
                Open user
              </Link>
            }
          </Button>
        </span>
      </Card>
    </div>
  )
}

export default Post