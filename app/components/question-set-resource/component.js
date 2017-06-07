import Ember from 'ember';

export default Ember.Component.extend({


    actions: {
        /**
           Action method fired when a choice is clicked. Shows the explanation after a delay.
           @method choiceClicked
           @return {void}
        */
        choiceClicked: function(question) {
            this.set('question.showExplanation', true);
        },

    }
});
