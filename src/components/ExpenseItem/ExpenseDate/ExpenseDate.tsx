import classes from './ExpenseDate.module.css';

interface DateFormat {
    date: Date;
}

const ExpenseDate = ({ date }: DateFormat) => {
    const yearFmt = date.getFullYear();
    const monthFmt = date.toLocaleString('en-ph', { month: 'long' });
    const dateFmt = date.toLocaleString('en-ph', { day: '2-digit' });

    return (
        <div className={classes.ExpenseDate}>
            <div className={classes.ExpenseDateMonth}>{monthFmt}</div>
            <div className={classes.ExpenseDateYear}>{yearFmt}</div>
            <div className={classes.ExpenseDateDay}>{dateFmt}</div>
        </div>
    );
};

export default ExpenseDate;
