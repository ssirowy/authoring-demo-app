import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'img',

    attributeBindings: ['src'],

    src: Ember.computed.alias('resource.url'),
});
