import momentExample from '../moment';

jest.mock('moment');

const elMock = {
    html: jest.fn(),
};

describe('moment example', () => {
    it('should render example', () => {
        momentExample(elMock);
        expect(elMock.html).toBeCalledWith(
        `<div>
            <p>Regular: 1540035262000 [HH:mm:ss, YYYY-MM-DD]</p>
            <p>UTC: 1540035262000 [HH:mm:ss, YYYY-MM-DD]</p>
            <p>Duration in days: 1200000000 asDays</p>
            <p>Duration human readable: 1200000000 humanize</p>
            <p>Timestamp: 1540035262000 [x]</p>
        </div>`
        );
    });
});