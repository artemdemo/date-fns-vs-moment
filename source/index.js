import u from 'umbrellajs';

// I'm using dynamic import in order to separate the code,
// as well as get in one build both examples

import(/* webpackChunkName: "moment-example" */ './examples/moment').then((e) => {
    e.default(u('.moment .examples'));
});

import(/* webpackChunkName: "dateFns-example" */'./examples/dateFns').then((e) => {
    e.default(u('.date-fns .examples'));
});