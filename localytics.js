// ====================================================
//  Localtyics template variables
//  ---------------------------------------------------
//  This will allow you to add in handlebars-style 
//  valriable without blowing up the Zurb compiler.
//  
// example: {{#localytics}}email['org']{{/localytics}}
// ====================================================
module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
  var email_field = '{{' + options.fn(this) + '}}';
  return email_field;
}