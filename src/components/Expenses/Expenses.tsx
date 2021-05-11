import Card from '../UI/Card/Card';
import ExpensesFilter from '../Expenses/ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';

import classes from './Expenses.module.css';
import { Expense } from '../../models/Expense.model';
import ExpensesChart from './ExpensesChart/ExpensesChart';

interface ExpensesArray {
    expenses: Expense[];
    filteredYear: string;
    filterYearChange: (date: string) => void;
}

const Expenses = ({
    expenses,
    filteredYear,
    filterYearChange,
}: ExpensesArray) => {
    const filteredExpenses = expenses.filter(
        (value) => `${new Date(value.date).getFullYear()}` === filteredYear
    );

    return (
        <Card className={classes.Expenses}>
            <ExpensesFilter
                filteredYear={filteredYear}
                filterYearChange={filterYearChange}
            />

            <ExpensesChart expenses={filteredExpenses} />

            <ExpensesList
                expenses={filteredExpenses}
                filteredYear={filteredYear}
            />
        </Card>
    );
};

export default Expenses;
