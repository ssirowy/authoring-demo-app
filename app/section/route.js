import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params) {
        return this.controllerFor('application').get('sections')[params.section_number -1];
    },
});
