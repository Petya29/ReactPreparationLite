import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../../models/IPost';
import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './List.module.css';

interface IProps {
    items?: IPost[]
}

const List: FC<IProps> = (props) => {

    const { items = [] } = props;

    if (!items.length) return null;

    return (
        <ul className={`collection ${classes.list}`}>
            {items.map(item => (
                <li
                    className={`collection-item ${classes.listItem}`}
                    key={item.id}
                >
                    <Card
                        title={item.title}
                        body={item.body}
                        hoverable={true}
                        truncateTitle={true}
                    >
                        <Button
                            color='primary'
                            size='medium'
                            variant='outlined'
                        >
                            <Link
                                to={`post/${item.id}`}
                                style={{ color: 'inherit', marginRight: '0px' }}
                            >
                                Open
                            </Link>
                        </Button>
                    </Card>
                </li>
            ))}
        </ul>
    )
}

export default List