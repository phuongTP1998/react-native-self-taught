import Moment from 'moment/min/moment-with-locales'

const getTimeFromNow = data => {
    const a = Moment(data);
    Moment.locale('vi');
    return a.startOf('minute').fromNow();
}

const convertTime = data => {
    const a = Moment(data);
    Moment.locale('vi');
    return a.format('Do MMMM YYYY');
}

const convertTimeShort = data => {
    const a = Moment(data);
    Moment.locale('vi');
    return a.format('DD MMM');
};

export { getTimeFromNow, convertTime, convertTimeShort }