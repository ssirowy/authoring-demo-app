import Ember from 'ember';
import fetchSectionData from '../utils/section-data';
import sectionModelClass from '../models/section';

export default Ember.Controller.extend({

    sections: null,

    init: function() {
        const sectionsJSON = fetchSectionData();

        console.log(sectionsJSON);

        const sections = sectionsJSON.map(sectionJSON => sectionModelClass.create().fromJSON(sectionJSON));

        this.set('section', sections[0]);
    },
});
