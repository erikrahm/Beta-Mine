// public/js/services/DataService.js
angular.module('DataService', []).factory('Data', ['$http', function($http) {

    return {
        // call to get all sites
        get : function() {
            return $http.get('/api/sites');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new site
        create : function(siteData) {
            return $http.post('/api/sites', siteData);
        },

        // call to DELETE a site
        delete : function(id) {
            return $http.delete('/api/sites/' + id);
        }
    }       

}]);