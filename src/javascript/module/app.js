var Regular = require('regularjs');
var tpl = `
    <p>app</p>
    <div r-view></div>
`

module.exports = Regular.extend({

    template: tpl,

    config (data) {

    }
});
  