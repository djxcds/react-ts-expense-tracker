import { useEffect } from 'react';

import classes from './ExpenseForm.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Expense } from '../../../models/Expense.model';

type Props = {
    addExpense: ({ amount, title, date }: Expense) => void;
    cancelEdit: () => void;
};

const schema = yup.object().shape({
    title: yup
        .string()
        .required('Need title you ass')
        .typeError('Need title you ass'),
    amount: yup
        .number()
        .min(5000, `So low you beggar? Need 5000`)
        .required('Amount where you cunt!')
        .typeError('Amount where you cunt!'),
    date: yup
        .date()
        .required('wheres your date you loner')
        .typeError('wheres your date you loner'),
});

const ExpenseForm = ({ addExpense, cancelEdit }: Props) => {
    const {
        register,
        handleSubmit,
        formState,
        formState: { errors },
        reset,
    } = useForm<Expense>({
        resolver: yupResolver(schema),
        defaultValues: {
            amount: 0,
        },
    });

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState, reset]);

    const onSubmitHandler = (data: Expense) => {
        const { date, amount, title } = data;
        addExpense({ date, amount, title });
    };

    const errorsFormat =
        (Object.entries(errors).length && (
            <div style={{ color: 'red', fontWeight: 'bold' }}>
                Fill-up required inputs! Number of errors
                {Object.entries(errors).length}
            </div>
        )) ||
        '';

    const resetHandler = () => {
        reset({ title: '', amount: 0, date: undefined });
    };

    return (
        <div>
            {errorsFormat}
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className={classes.ExpenseFormControls}>
                    <div>
                        <div className={classes.ExpenseFormControl}>
                            <label>Title</label>
                            <input {...register('title')} />
                        </div>
                        {errors?.title && errors.title.message}
                    </div>
                    <div>
                        <div className={classes.ExpenseFormControl}>
                            <label>Amount</label>
                            <input
                                type='number'
                                min='0.01'
                                step='0.01'
                                {...register('amount')}
                            />
                        </div>
                        {errors?.amount && errors.amount.message}
                    </div>
                    <div>
                        <div className={classes.ExpenseFormControl}>
                            <label>Date</label>
                            <input
                                type='date'
                                min='2019-01-01'
                                max='2022-12-31'
                                {...register('date')}
                            />
                        </div>
                        {errors?.date && errors.date.message}
                    </div>
                </div>
                <div className={classes.ExpenseFormActions}>
                    <button type='submit'>Add expense</button>
                    <button type='button' onClick={() => resetHandler()}>
                        Reset
                    </button>
                    <button type='button' onClick={() => cancelEdit()}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;
