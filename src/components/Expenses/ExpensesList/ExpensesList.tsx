import { Expense } from '../../../models/Expense.model';
import ExpenseItems from '../../../components/ExpenseItem/ExpenseItem';

import classes from './ExpensesList.module.css';

interface Props {
    expenses: Expense[];
    filteredYear: string;
}

const ExpensesList = ({ expenses, filteredYear }: Props) => {
    const expenseView = expenses.map((value, index) => (
        <ExpenseItems key={value.id} {...value} index={index} />
    ));

    return (
        <ul className={classes.ExpensesList}>
            {expenseView.length ? (
                expenseView
            ) : (
                <div className={classes.ExpensesListFallback}>No Expenses.</div>
            )}
        </ul>
    );
};

export default ExpensesList;
