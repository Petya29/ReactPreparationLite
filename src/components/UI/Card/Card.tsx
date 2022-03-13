import React, { FC } from 'react';
import classes from './Card.module.css';

interface IProps {
    title?: string | string[],
    body?: string | string[] | JSX.Element,
    truncateTitle?: boolean,
    hoverable?: boolean,
    children?: JSX.Element | JSX.Element[] | string
}

const Card: FC<IProps> = (props) => {

    const {
        title,
        body,
        truncateTitle = true,
        hoverable = false,
        children
    } = props;

    return (
        <div className={`row ${classes.cardWrap}`}>
            <div className="col s12 m2"></div>
            <div className="col s12 m8">
                <div className={`card blue-grey ${hoverable ? 'hoverable' : ''} ${classes.card}`}>
                    <div className="card-content white-text">
                        {Array.isArray(title)
                            ?
                            title.map((el, i) => (
                                <span className={`card-title ${truncateTitle ? 'truncate' : ''}`} key={i}>{el}</span>
                            ))
                            :
                            <span className={`card-title ${truncateTitle ? 'truncate' : ''}`}>{title}</span>
                        }
                        {Array.isArray(body)
                            ?
                            body.map(el => (
                                <p key={el}>{el}</p>
                            ))
                            :
                            <p>{body}</p>
                        }
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