import { format, differenceInDays, distanceInWords } from 'date-fns';

const dateFnsExample = ($el) => {
    const timestamp = 1540035262000;
    const utcString = new Date(1540035262000).toUTCString();
    $el.html(`
        <div>
            <p>Regular: ${format(timestamp, 'HH:mm:ss, YYYY-MM-DD')}</p>
            <p>UTC: ${format(utcString, 'HH:mm:ss, YYYY-MM-DD')}</p>
            <p>Duration in days: ${differenceInDays(1200000000, 0)} (provides difference in <strong>full</strong> days)</p>
            <p>Duration human readable: ${distanceInWords(1200000000, 0)}</p>
            <p>Timestamp: ${format(new Date(), 'x')}</p>
        </div>
    `);
};

export default dateFnsExample;