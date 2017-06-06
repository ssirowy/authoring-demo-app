import Ember from 'ember';

const typeField = '@{http://www.w3.org/2001/XMLSchema-instance}type';

// Base class for content resources
const contentResourceBase = Ember.Object.extend({
    type: null,
    guid: null,

    fromJSON: function(json) {

        this.setProperties({
            type: json[typeField],
            guid: json['@guid'],
        });
        return this;
    },
});

const commentClass = contentResourceBase.extend({

    comment: null,
    name: null,
    timestamp: null,

    fromJSON: function(json) {

        this._super(...arguments);

        debugger;

        this.setProperties({
            name: json.name['$'],
            text: json.comment['$'],
            timestamp: new Date(json.timestamp['$']),
        });

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

var crFromJSON = function(json) {

    const crType = json[typeField];
    let crClass = contentResourceBase;

    console.log(crType);
    switch(crType) {
    case 'CommentResource':
        crClass = commentClass;
        break;
    }

    return crClass.create().fromJSON(json);
}

// Section model
export default Ember.Object.extend({

    title: null,

    zypInfos: null,

    contentResources: null,

    fromJSON: function(json) {

        const infos = json.section.zypInfos.zypInfo.map(infoJSON => zypInfoClass.create().fromJSON(infoJSON));

        const contentResources = json.section.contentResources.contentResource.map(crJSON => crFromJSON(crJSON));

        this.setProperties({
            title: json.section.title['$'],
            zypInfos: infos,
            contentResources,
        });

        return this;
    },
});
