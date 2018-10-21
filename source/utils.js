import { addMinutes, subMinutes } from "date-fns";

/**
 * Convert given date to UTC
 * @link https://github.com/date-fns/date-fns/issues/556#issuecomment-391048347
 * @param date | plain JS date object
 * @return {Date | *}
 */
export function toUTC(date) {
    const offset = date.getTimezoneOffset();

    return Math.sign(offset) !== -1 ? addMinutes(date, offset) : subMinutes(date, Math.abs(offset));
}