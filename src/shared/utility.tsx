const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const dateToString = (date: Date) => {
    const yearFmt = date.getFullYear();
    const monthFmt = date.toLocaleString('en-ph', { month: '2-digit' });
    const dateFmt = date.toLocaleString('en-ph', { day: '2-digit' });
    return `${yearFmt}-${monthFmt}-${dateFmt}`;
};

const convertToDate = (date: string) => {
    const [year, month, day] = date.split('-');
    return new Date(+year, +month, +day);
};

export { numberWithCommas, dateToString, convertToDate };
