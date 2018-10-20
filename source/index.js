import u from 'umbrellajs';
import dateFnsExample from './examples/dateFns';

import('./examples/moment').then((e) => {
    e.default(u('.moment .examples'));
});