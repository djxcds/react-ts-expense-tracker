import ChartBar from './ChartBar/ChartBar';

import classes from './Chart.module.css';
import { DataPoint } from '../../models/DataPoint.model';

interface Props {
    dataPoints: DataPoint[];
}

const Chart = ({ dataPoints }: Props) => {
    const dataPointValues = dataPoints.map(({ value }) => value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className={classes.Chart}>
            {dataPoints.map(({ label, value }) => (
                <ChartBar
                    key={label}
                    value={value}
                    maxValue={totalMaximum}
                    label={label}
                />
            ))}
        </div>
    );
};

export default Chart;
