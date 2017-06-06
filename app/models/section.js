import Ember from 'ember';

// Base class for content resources
const contentResourceBase = Ember.Object.extend({
    type: null,

    fromJSON: function(json) {
        return this;
    },
});

// Base class for a zypInfo
const zypInfoClass = Ember.Object.extend({

    // Properties
    name: null,
    text: null,
    timestamp: null,

    fromJSON: function(json) {

        this.setProperties({
            name: json.name['$'],
            text: json.text['$'],
            timestamp: new Date(json.timestamp['$']),
        });

        return this;
    },
});

// Section model
export default Ember.Object.extend({

    title: null,

    zypInfos: null,

    contentResources: null,

    fromJSON: function(json) {

        const infos = json.section.zypInfos.zypInfo.map(infoJSON => zypInfoClass.create().fromJSON(infoJSON));

        this.setProperties({
            title: json.section.title['$'],
            zypInfos: infos,
        });

        return this;
    },
});
