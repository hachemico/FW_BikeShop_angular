bikeShop.factory("services", ['$http','$q', function ($http, $q) {
    let serviceBase = '/FW_BikeShop_angular/backend/index.php?module=';
    let obj = {};

        obj.get = function (module, functi) {
            var defered = $q.defer();
            var promise = defered.promise;
            $http({
                  method: 'GET',
                  url: serviceBase + module + '&function=' + functi
              }).success(function(data, status, headers, config) {
                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                 defered.reject(data);
              });
            return promise;
        };

        obj.get2 = function (module, functi, dada) {
            var defered=$q.defer();
            var promise=defered.promise;
            $http({
                  method: 'GET',
                  url: serviceBase + module + '&function=' + functi + '&param=' + dada
              }).success(function(data, status, headers, config) {

                 defered.resolve(data);
              }).error(function(data, status, headers, config) {
                 defered.reject(data);
              });
            return promise;
        };


        obj.post = function (module, option, data) {
            var defered = $q.defer();
            var promise = defered.promise;
            $http({
                  method: 'POST',
                  url: serviceBase + module + '&function=' + option,
                  data: data
              }).success(function(response, status, headers, config) {

                defered.resolve(response);
              }).error(function(error, status, headers, config) {
                 defered.reject(error);
              });
            return promise;
        };

        obj.put = function (module, functi, dada) {
          var defered=$q.defer();
          var promise=defered.promise;
          $http({
                method: 'PUT',
                url: serviceBase + module + '&function=' + functi,
                data: dada
            }).success(function(data, status, headers, config) {
      	       defered.resolve(data);
            }).error(function(data, status, headers, config) {
               defered.reject(data);
            });
          return promise;
        };
        
        obj.delete = function (module, functi, dada) {
          var defered=$q.defer();
          var promise=defered.promise;
          $http({
                method: 'DELETE',
                url: serviceBase + module + '&function=' + functi + '&param=' + dada
            }).success(function(data, status, headers, config) {

               defered.resolve(data);
            }).error(function(data, status, headers, config) {
               defered.reject(data);
            });
          return promise;
        };

        return obj;
    }]);