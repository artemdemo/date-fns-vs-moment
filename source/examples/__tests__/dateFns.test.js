import dateFnsExample from '../dateFns';

jest.mock('date-fns');
jest.mock('../../utils');

const elMock = {
    html: jest.fn(),
};

describe('dateFns example', () => {
    it('should render example', () => {
        dateFnsExample(elMock);
        expect(elMock.html).toBeCalledWith(
            `<div>
            <p>Regular: 1540035262000 [HH:mm:ss, YYYY-MM-DD]</p>
            <p>UTC: 1540035262000 [HH:mm:ss, YYYY-MM-DD]</p>
            <p>Duration in days: 1200000000 -> 0 (provides difference in <strong>full</strong> days)</p>
            <p>Duration human readable: 1200000000 -> 0</p>
            <p>Timestamp: 1540035262000 [x]</p>
        </div>`
        );
    });
});