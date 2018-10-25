import u from 'umbrellajs';

// I'm using dynamic import in order to separate the code,
// as well as get in one build both examples

import('./examples/moment').then((e) => {
    e.default(u('.moment .examples'));
});

import('./examples/dateFns').then((e) => {
    e.default(u('.date-fns .examples'));
});