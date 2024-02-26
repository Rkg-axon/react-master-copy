import { USE_IMAGE_PLACEHOLDERS } from '@app/utilities/constants/paths';
import moment from 'moment';

export const getCustomDateTime = (
  value: number = 0,
  unit: moment.unitOfTime.DurationConstructor = 'days',
  format: string = 'HH:mm a | MMMM DD, YYYY'
) => {
  if (value === 0) {
    return moment().format(format);
  } else {
    return moment().add(value, unit).format(format);
  }
};

export const getDateElements = (date: string) => {
  const dateString = moment(date).format('dddd, MMMM DD YYYY, hh:mm A');
  const dateSections = dateString.split(',');
  const day = dateSections[0];
  const time = dateSections[2];
  const datePart = dateSections[1].trim().split(' ');
  return {
    day,
    time,
    date: {
      dateString: dateSections[1],
      month: datePart[0],
      date: datePart[1],
      year: datePart[2],
    },
  };
};

export const getAssetPath = (url: string, size: string) => {
  if (USE_IMAGE_PLACEHOLDERS) {
    return `https://via.placeholder.com/${size}.png`;
  }

  return url;
};

export const timeSince = (days: number) => {
  let calcDate = new Date(Date.now() - days * 24 * 3600 * 1000);
  let seconds = Math.floor((new Date().getTime() - calcDate.getTime()) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + 'y ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + 'm ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + 'd ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + 'h ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + 'm ago';
  }
  return Math.floor(seconds) + 's ago';
};

function isColorCode(value: string) {
  return (
    typeof value === 'string' &&
    value[0] === '#' &&
    (value.length === 4 || value.length === 7)
  );
}

function isDegree(value: string) {
  const degArray = value.split('deg');
  return degArray.length === 2 && !Number.isNaN(parseInt(degArray[0]));
}

export function getBackgroundColorStyle(colors?: string[]) {
  if (!colors) return {};

  const foundColors: string[] = [];
  let gradientDegree;
  let gradientType = 'linear-gradient';

  colors.forEach((color) => {
    if (isColorCode(color)) {
      foundColors.push(color);
    } else if (isDegree(color)) {
      gradientDegree = color;
    }
  });

  if (foundColors.length <= 0) return {};

  if (foundColors.length === 1)
    return {
      backgroundColor: foundColors[0],
    };

  const gradientValue = gradientDegree
    ? `${gradientDegree}, ${foundColors.toString()}`
    : foundColors.toString();
  return {
    backgroundImage: `${gradientType}(${gradientValue})`,
  };
}

export function getBackgroundImageStyle(src?: string) {
  if (!src) return {};

  return {
    background: `url(${src}) no-repeat center`,
    backgroundSize: 'cover',
  };
}
