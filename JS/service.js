appdb.service('getleadersservice', function($http) {
  leaders = [];
  this.getleaders = function() {
    return $http.get('/cgi-bin/getleadersasjson.py')
      .then(function(response) {
        console.log('csclub leaders', response.data);
        leaders = response.data;
        console.log('csclub leaders after set', leaders);
        return leaders;
      });
  };
  this.allleaders = function() {
    return leaders;
  };
});
