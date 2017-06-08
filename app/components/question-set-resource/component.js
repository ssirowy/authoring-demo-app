import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['zb-card', 'multiple-choice-resource'],

    actions: {
        /**
           Action method fired when a choice is clicked. Shows the explanation after a delay.
           @method choiceClicked
           @return {void}
        */
        choiceClicked: function(question) {
            question.set('showExplanation', true);
        },
    }
});
