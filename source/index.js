import u from 'umbrellajs';

import('./examples/moment').then((e) => {
    e.default(u('.moment .examples'));
});

import('./examples/dateFns').then((e) => {
    e.default(u('.date-fns .examples'));
});