angular.module('rsvpApp')
.filter('drinkimage', function () {
    return  function(drinkName) {
        var output = drinkName ? drinkName.replace(/ /g,'').toLowerCase() : 'default';
        return output;
  };
});