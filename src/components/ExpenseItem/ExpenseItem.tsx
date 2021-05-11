import ExpenseDate from './ExpenseDate/ExpenseDate';

import classes from './ExpenseItem.module.css';

import Card from '../UI/Card/Card';

import { numberWithCommas } from '../../shared/utility';

import { Expense } from '../../models/Expense.model';

interface Inputs2 extends Expense {
    index: number;
}

const ExpenseItems = ({ date, title, amount, index }: Inputs2) => {
    return (
        <li>
            <Card className={classes.ExpenseItem}>
                <ExpenseDate date={date as Date} />
                <div className={classes.ExpenseItemDescription}>
                    <h2>{title}</h2>
                </div>
                <div className={classes.ExpenseItemPrice}>
                    PHP {numberWithCommas(amount)}
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItems;
