import React, { FC, useState, useEffect, useRef, Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Alert from '../../components/UI/Alert/Alert';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import Loader from '../../components/UI/Loader/Loader';
import { IUser } from '../../models/IUser';
import UserService from '../../services/UserService';

const User: FC = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>({} as IUser);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    let fetchUser = useRef(async () => { });
    fetchUser.current = async () => {
        try {
            setIsLoading(true);
            setError(false);

            const response = await UserService.fetchUserById(id);
            setUser(response.data);
        } catch (e) {
            console.log(e);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchUser.current();
    }, [])


    return (
        <div className="user-view container">
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