import moment from 'moment';

const momentExample = ($el) => {
    const timestamp = 1540035262000;
    $el.html(`
        <div>
            <p>Regular: ${moment(timestamp).format('HH:mm:ss, YYYY-MM-DD')}</p>
            <p>UTC: ${moment.utc(timestamp).format('HH:mm:ss, YYYY-MM-DD')}</p>
            <p>Duration in days: ${moment.duration(1200000000).asDays()}</p>
            <p>Duration human readable: ${moment.duration(1200000000).humanize()}</p>
            <p>Timestamp: ${moment(new Date()).format('x')}</p>
        </div>
    `);
};

export default momentExample;