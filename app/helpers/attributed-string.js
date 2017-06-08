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
            let str = element['$'];

            // Matches two newline characters (possibly separated by spaces) and replaces with <p> tags.
            str = str.replace(/[\r?\n|\r][^\S\r\n]*[\r?\n|\r]/g, () => {
                const returnVal = openParagraph ? '</p><p>' : '<p>';

                openParagraph = !openParagraph;
                return returnVal;
            });

            htmlString += str;
        }
        else if (element.definition) {
            htmlString += generateDefinitionHTML(element.definition);
        }
    });

    if (openParagraph) {
        htmlString += '</p>';
        openParagraph = !openParagraph;
    }

    return Ember.String.htmlSafe(htmlString);
}

export default Ember.Helper.helper(attributedString);
