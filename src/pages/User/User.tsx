import React, { FC, useState, useEffect, useRef, Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Alert from '../../components/UI/Alert/Alert';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import Loader from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IUser } from '../../models/IUser';
import { getUser } from '../../store/users/userSlice';

const User: FC = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const { users, isUserLoading, isUserError } = useAppSelector(state => state.user);

    const [user, setUser] = useState<IUser>({} as IUser);

    let findUser = useRef(() => { });
    findUser.current = async () => {
        if (!users.length) return await dispatch(getUser(id));
        for (let i = 0; i < users.length; i++) {
            if (id === String(users[i].id)) {
                return setUser(users[i]);
            }
        }
        dispatch(getUser(id));
    }

    useEffect(() => {
        findUser.current();
    }, [users]);

    return (
        <div className="user-view container">
            {isUserLoading
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
                        title={`User profile ${user.id !== undefined ? `№ ${user.id}` : ''}`}
                        body={[
                            `name: ${user.name}`,
                            `email: ${user.email}`,
                            `gender: ${user.gender}`,
                            `status: ${user.status}`
                        ]}
                        truncateTitle={false}
                        hoverable
                    >
                        <Button
                            color='primary'
                            size='medium'
                            variant='outlined'
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </Button>
                    </Card>
                </Fragment>
            }
        </div>
    )
}

export default User