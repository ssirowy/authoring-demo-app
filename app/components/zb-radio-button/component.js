import Ember from 'ember';

/**
   zyBook radio button. Thinly wraps an HTML radio button within a label and with some useful properties.
   @class ZbRadioButton
   @extend {Ember.Component}
   @uses {ComponentColorMixin}
 */
export default Ember.Component.extend({

    /**
       Ember overridden tag name for component.
       @property tagName
       @type {String}
       @default 'label'
       @readOnly
     */
    tagName: 'label',

    /**
       Ember overridden class names for component.
       @property classNames
       @type {Array} of String
       @readOnly
     */
    classNames: [ 'zb-radio-button' ],

    /**
       Ember overridden class name bindings for component.
       @property classNameBindings
       @type {Array} of String
       @readOnly
     */
    classNameBindings: [ 'disabled', 'textUnder' ],

    /**
       Name of the radio button. Optional.
       @property name
       @type {String}
       @default null
     */
    name: null,

    /**
        Value of the radio button.
        @property value
        @type {Object}
        @default null
     */
    value: null,

    /**
       Value of the selected radio button in the button group.
       @property selected
       @type {Object}
       @default null
    */
    selected: null,

    /**
       Set to true if the radio button value matches the group value.
       @event checked
       @param {Object} value Value of this checkbox.
       @param {Object} selected Value of the selected radio button in the button group.
       @return {Boolean}
    */
    checked: function() {
        return (this.get('value') === this.get('selected'));
    }.property('value', 'selected'),

    /**
        Set to true to disable radio button use.
        @property disabled
        @type {Boolean}
        @default false
     */
    disabled: false,

    /**
        String to display to the user next to the radio button.
        @property displayText
        @type {String}
        @default null
    */
    displayText: null,

    /**
       If true then displayText is rendered in a div under the radio button label.
       @property textUnder
       @type {Boolean}
       @default false
    */
    textUnder: false,
});
