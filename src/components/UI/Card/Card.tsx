import { FunctionComponent } from 'react';
import classes from './Card.module.css';

interface Props {
    className: string;
}

const Card: FunctionComponent<Props> = ({ className, children }) => {
    const classesFinal = `${classes.Card} ${className}`;
    return <div className={classesFinal}>{children}</div>;
};

export default Card;
