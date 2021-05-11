import classes from './ChartBar.module.css';

interface Props {
    label: string;
    value: number;
    maxValue: number;
}

const ChartBar = ({ label, value, maxValue }: Props) => {
    let barFillHeight = '0%';

    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%';
    }

    return (
        <div className={classes.ChartBar}>
            <div className={classes.ChartBarInner}>
                <div
                    className={classes.ChartBarFill}
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className={classes.ChartBarLabel}>{label}</div>
        </div>
    );
};

export default ChartBar;
