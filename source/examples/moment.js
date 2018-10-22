import moment from 'moment';
import { timestamp, diffTimestamp, formatStr } from '../constants';

const momentExample = ($el) => {
    $el.html(
        `<div>
            <p>Regular: ${moment(timestamp).format(formatStr)}</p>
            <p>UTC: ${moment.utc(timestamp).format(formatStr)}</p>
            <p>Duration in days: ${moment.duration(diffTimestamp).asDays()}</p>
            <p>Duration human readable: ${moment.duration(diffTimestamp).humanize()}</p>
            <p>Timestamp: ${moment(timestamp).format('x')}</p>
        </div>`
    );
};

export default momentExample;