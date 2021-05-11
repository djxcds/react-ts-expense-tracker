import { useState } from 'react';
import classes from './NewExpense.module.css';

import ExpenseForm from './ExpenseForm/ExpenseForm';
import { Expense } from '../../models/Expense.model';

type Props = {
    addExpense: ({ amount, title, date }: Expense) => void;
};

const NewExpense = ({ addExpense }: Props) => {
    const [isEditing, setIsEditing] = useState(false);

    const addExpenseExtended = (expense: Expense) => {
        addExpense(expense);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const cancelEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className={classes.NewExpense}>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    addExpense={addExpenseExtended}
                    cancelEdit={cancelEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
