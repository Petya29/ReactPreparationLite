import React, { FC } from 'react';
import { IPost } from '../../../models/IPost';
import classes from './Card.module.css';

interface IProps {
    data: IPost,
    children?: JSX.Element | JSX.Element[] | string
}

const Card: FC<IProps> = (props) => {

    const { data, children } = props;

    return (
        <div className={`row ${classes.cardWrap}`}>
            <div className="col s12 m2"></div>
            <div className="col s12 m8">
                <div className={`card blue-grey hoverable ${classes.card}`}>
                    <div className="card-content white-text">
                        <span className="card-title truncate">{data.title}</span>
                        <p>{data.body}</p>
                    </div>
                    <div className="card-action">
                        {children}
                    </div>
                </div>
            </div>
            <div className="col s12 m2"></div>
        </div>
    )
}

export default Card