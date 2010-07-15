Drupal.theme.prototype.velveeticon = function (icon, width, height) {
  var src = Drupal.settings.velveeticons + '/16x16/' + icon + '.png';
  return $('<img />').attr('src', src);
};
