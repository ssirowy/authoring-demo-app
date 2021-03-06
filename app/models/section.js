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

    componentName: 'comment-resource',

    fromJSON: function(json) {

        this._super(...arguments);

        this.setProperties({
            name: json.name['$'],
            text: json.comment['$'],
            timestamp: new Date(json.timestamp['$']),
        });

        return this;
    },
});

const codeClass = contentResourceBase.extend({

    code: null,
    language: null,

    componentName: 'code-resource',

    fromJSON: function(json) {

        this._super(...arguments);

        this.setProperties({
            code: json.code['$'],
            language: json['@language'],
        });

        return this;
    },
});


const imageClass = contentResourceBase.extend({

    url: null,

    caption: null,

    componentName: 'image-resource',

    fromJSON: function(json) {

        this._super(...arguments);

        this.setProperties({
            url: json.url['$'],
            caption: json.caption['$'],
        });

        return this;
    },
});

const textClass = contentResourceBase.extend({

    // JSON object.
    text: null,

    componentName: 'text-resource',

    fromJSON: function(json) {

        this._super(...arguments);

        let text = [];

        if (json.hasOwnProperty('#')) {
            text = json['#'];
        }
        else {

            // eslint-disable-next-line id-length
            text.pushObject({ $: json.$ });
        }

        this.setProperties({
            text,
        });

        return this;
    },
});

const choiceClass = Ember.Object.extend({

    correct: false,

    label: null,

    explanation: null,

    fromJSON: function(json) {

        this._super(...arguments);

        this.setProperties({
            correct: json.correct['$'],
            label: json.label['$'],
            explanation: json.explanation['$'],
        });

        return this;
    },
});

const questionClass = Ember.Object.extend({

    text: null,

    choices: null,

    fromJSON: function(json) {

        this._super(...arguments);

        this.setProperties({
            text: json.text['$'],
            choices: json.choice.map(choiceJSON => choiceClass.create().fromJSON(choiceJSON)),
        });

        return this;
    },
});

const questionResourceClass = contentResourceBase.extend({

    componentName: 'question-set-resource',

    questions: null,

    fromJSON: function(json) {

        this._super(...arguments);

        this.setProperties({
            questions: json.question.map(questionJSON => questionClass.create().fromJSON(questionJSON)),
        });

        this.get('questions').forEach((question, index) => { question.set('number', index + 1); });

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

    switch(crType) {
    case 'CommentResource':
        crClass = commentClass;
        break;
    case 'CodeResource':
        crClass = codeClass;
        break;
    case 'ImageResource':
        crClass = imageClass;
        break;
    case 'TextResource':
        crClass = textClass;
        break;
    case 'MultipleChoiceResource':
        crClass = questionResourceClass;
        break;
    }

    return crClass.create().fromJSON(json);
};

// Section model
export default Ember.Object.extend({

    title: null,

    zypInfos: null,

    contentResources: null,

    fromJSON: function(json) {
        const infosJSON = Array.isArray(json.zypInfos.zypInfo) ? json.zypInfos.zypInfo : [ json.zypInfos.zypInfo ];
        const infos = infosJSON.map(infoJSON => zypInfoClass.create().fromJSON(infoJSON));

        const crsJSON = Array.isArray(json.contentResources.contentResource) ?
                  json.contentResources.contentResource : [ json.contentResources.contentResource ];
        const contentResources = crsJSON.map(crJSON => crFromJSON(crJSON));

        this.setProperties({
            title: json.title['$'],
            zypInfos: infos,
            contentResources,
        });

        return this;
    },
});
