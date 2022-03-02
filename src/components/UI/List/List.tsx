import React, { FC } from 'react';
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

    const temp = () => {
        console.log('asd')
    }

    return (
        <ul className={`collection ${classes.list}`}>
            {items.map(item => (
                <li
                    className={`collection-item ${classes.listItem}`}
                    key={item.id}
                >
                    <Card data={item}>
                        <Button color='primary' onClick={temp}>Open</Button>
                    </Card>
                </li>
            ))}
        </ul>
    )
}

export default List