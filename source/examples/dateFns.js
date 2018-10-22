import { format, differenceInDays, distanceInWords } from 'date-fns';
import { timestamp, diffTimestamp, formatStr } from '../constants';
import { toUTC } from '../utils';

const dateFnsExample = ($el) => {
    console.log(toUTC(new Date(timestamp)));
    $el.html(
        `<div>
            <p>Regular: ${format(timestamp, formatStr)}</p>
            <p>UTC: ${format(+(toUTC(new Date(timestamp))), formatStr)}</p>
            <p>Duration in days: ${differenceInDays(diffTimestamp, 0)} (provides difference in <strong>full</strong> days)</p>
            <p>Duration human readable: ${distanceInWords(diffTimestamp, 0)}</p>
            <p>Timestamp: ${format(timestamp, 'x')}</p>
        </div>`
    );
};

export default dateFnsExample;