import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'img',

    classNames: [ 'image-resource' ],

    attributeBindings: ['src'],

    src: Ember.computed.alias('resource.url'),
});
