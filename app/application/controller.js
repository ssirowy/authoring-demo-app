import Ember from 'ember';
import fetchSectionData from '../utils/section-data';
import sectionModelClass from '../models/section';

export default Ember.Controller.extend({

    sections: null,

    init: function() {
        const sectionsJSON = fetchSectionData();

        console.log(sectionsJSON);

        const sections = sectionsJSON.map(sectionJSON => sectionModelClass.create().fromJSON(sectionJSON));

        sections.forEach((section, index) => { section.set('number', index + 1); });

        this.set('sections', sections);
    },
});
