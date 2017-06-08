import Ember from 'ember';

const generateDefinitionHTML = function(definition) {

    const definitionArray = definition['#'];
    let htmlString = '';

    definitionArray.forEach(element => {
        if (element['$']) {
            htmlString += element['$'];
        }
        else if (element.term) {
            htmlString += `<span class="term">${element.term['$']}</span>`;
        }
    });

    return Ember.String.htmlSafe(htmlString);
};

export function attributedString(params) {

    const textArray = params[0];
    let htmlString = '';
    let openParagraph = false;

    textArray.forEach(element => {
        if (element['$']) {
            const str = element['$'];

            if (str.startsWith('\n')) {
                htmlString += openParagraph ? '</p><p>' : '<p>';
                openParagraph != openParagraph;
            }
            else {
                htmlString += element['$'];
            }
        }
        else if (element.definition) {
            htmlString += generateDefinitionHTML(element.definition);
        }
    });

    if (openParagraph) {
        htmlString += '</p>';
    }

    return Ember.String.htmlSafe(htmlString);
}

export default Ember.Helper.helper(attributedString);
