import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css';
import { Expense } from './models/Expense.model';

const App = () => {
    const [state, setState] = useState({
        filteredYear: '2021',
        expenses: [
            {
                id: '01',
                date: new Date(2021, 4, 15),
                title: 'Car Insurance',
                amount: 40_000,
            },
            {
                id: '02',
                date: new Date(2021, 4, 29),
                title: 'House Insurance',
                amount: 32_000,
            },
            {
                id: '03',
                date: new Date(2021, 5, 30),
                title: 'Health Insurance',
                amount: 51_000,
            },
        ],
    });
    const { expenses } = state;

    const filterYearChange = (year: string) => {
        setState((prevState) => {
            return { ...prevState, filteredYear: year };
        });
    };

    const addExpenseHandler = ({ amount, title, date }: Expense) => {
        const newExpense = {
            amount,
            title,
            date: date as Date,
            id: `${Math.floor(Math.random() * 1000)}`,
        };
        const expensesCopy = { expenses: [...expenses, newExpense] };
        setState((prevState) => {
            return { ...prevState, ...expensesCopy };
        });
    };

    return (
        <div>
            <h2>Let's get started!</h2>
            <NewExpense addExpense={addExpenseHandler} />
            <Expenses {...state} filterYearChange={filterYearChange} />
        </div>
    );
};

export default App;
