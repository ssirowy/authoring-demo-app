import Ember from 'ember';

const generateDefinitionHTML = function(definition) {
    return Ember.String.htmlSafe('<b>DEFINITION</b>');
};

export function attributedString(params) {

    const textArray = params[0];
    let htmlString = '';

    textArray.forEach(element => {
        if (element['$']) {
            htmlString += element['$'];
        }
        else if (element.definition) {
            htmlString += generateDefinitionHTML(element.definition);
        }
    });

    return Ember.String.htmlSafe(htmlString);
}

export default Ember.Helper.helper(attributedString);
