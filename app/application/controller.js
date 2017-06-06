import Ember from 'ember';
import fetchSectionData from '../utils/section-data';
import sectionModelClass from '../models/section';

export default Ember.Controller.extend({

    section: null,

    init: function() {
        const sectionJSON = fetchSectionData();

        console.log(sectionJSON);

        const section = sectionModelClass.create().fromJSON(sectionJSON);

        this.set('section', section);
    },
});
