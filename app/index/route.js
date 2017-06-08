import Ember from 'ember';

export default Ember.Route.extend({

    setupController: function() {
        this._super(...arguments);

        this.transitionTo('section', 1);
    },
});
