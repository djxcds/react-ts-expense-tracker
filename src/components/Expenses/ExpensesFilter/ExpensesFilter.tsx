import { ChangeEvent } from 'react';

import classes from './ExpensesFilter.module.css';

interface Props {
    filteredYear: string;
    filterYearChange: (date: string) => void;
}

const ExpensesFilter = ({ filterYearChange, filteredYear }: Props) => {
    const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        filterYearChange(event.target.value);
    };

    return (
        <div className={classes.ExpensesFilter}>
            <div className={classes.ExpensesFilterControl}>
                <label>Filter by year</label>
                <select value={filteredYear} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
