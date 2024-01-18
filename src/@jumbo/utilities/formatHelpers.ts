import moment from 'moment';

export const getCustomDateTime = (
  value = 0,
  unit = 'days',
  format = 'HH:mm a | MMMM DD, YYYY'
) => {
  if (value === 0) {
    return moment().format(format);
  } else {
    return moment().add(value, unit).format(format);
  }
};
