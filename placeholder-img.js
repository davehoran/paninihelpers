// ====================================================
//  Placeholder image with dimensions
//  ---------------------------------------------------
//  This will allow you to add a placeholder image
//  to the page sourced from http://placehold.it.
//  
//  usage:
//  between the helper delimiters, add the width then 
//  the height of the placeholder image you wish to add. 
//  
// example: {{#placeholder-img}}650,300{{/placeholder-img}}
// 
// ====================================================
module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
  var dimensions = options.fn(this).split(',');
  var img_tag = "<img src='http://placehold.it/" + dimensions[0] + "x" + dimensions[1] + "'>";
  return img_tag;
}