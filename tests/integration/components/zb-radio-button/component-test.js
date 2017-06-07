import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zb-radio-button', 'Integration | Component | zb radio button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{zb-radio-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#zb-radio-button}}
      template block text
    {{/zb-radio-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
