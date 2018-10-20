import { format, differenceInDays, distanceInWords, addMinutes, subMinutes } from 'date-fns';
import { timestamp, diffTimestamp, formatStr } from './constants';

/**
 * Convert given date to UTC
 * @link https://github.com/date-fns/date-fns/issues/556#issuecomment-391048347
 * @param date | JS date
 * @return {Date | *}
 */
function toUTC(date) {
    const offset = date.getTimezoneOffset();

    return Math.sign(offset) !== -1 ? addMinutes(date, offset) : subMinutes(date, Math.abs(offset));
}

const dateFnsExample = ($el) => {
    $el.html(`
        <div>
            <p>Regular: ${format(timestamp, formatStr)}</p>
            <p>UTC: ${format(toUTC(new Date(timestamp)), formatStr)}</p>
            <p>Duration in days: ${differenceInDays(diffTimestamp, 0)} (provides difference in <strong>full</strong> days)</p>
            <p>Duration human readable: ${distanceInWords(diffTimestamp, 0)}</p>
            <p>Timestamp: ${format(new Date(), 'x')}</p>
        </div>
    `);
};

export default dateFnsExample;