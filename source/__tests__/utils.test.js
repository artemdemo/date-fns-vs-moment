import { toUTC } from '../utils';

describe('utils', () => {
    describe('toUTC', () => {
        const date = new Date(1540035262000);

        it('should subtract minutes', () => {
            date.getTimezoneOffset = () => -1;
            expect(toUTC(date)).toBe('1540035262000 - 1');
        });

        it('should add minutes', () => {
            date.getTimezoneOffset = () => 1;
            expect(toUTC(date)).toBe('1540035262000 + 1');
        });
    });
});