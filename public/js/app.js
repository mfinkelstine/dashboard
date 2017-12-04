// Define the `phonecatApp` module
var elkdashboard = angular.module('ibmElasticDashboard', []);


// Defined the `ibmTopMenuBar` menu bar

elkdashboard.controller('ibmTopMenuBar', ['$scope', '$controller', function ibmTopMenuBar($scope){
  $scope.topbarmenu = [
    {
      name:'Kibana',
      path:'/kibana',
      tooltip:'Kibana'
    },
    {
      name:'Permission',
      path:'/permission',
      tooltip:'Permission'
    },
    {
      name:'Alerts & Events',
      path:'/alerts',
      tooltip:'Alerts & Events'
    },
    {
      name:'Live Tail',
      path:'/logtail',
      tooltip:'Live Tail '
    },
    {
      name:'Integrations',
      path:'/integrations',
      tooltip:'Integrations Dashboard'
    }
  ];
}]);

elkdashboard.controller('ibmElasticSideBar',['$scope', function ibmElasticSideBar($scope){ 
  console.log('ibmElasticSideBar');
}]);


// Define the `ibmElasticController` controller on the `phonecatApp` module
elkdashboard.controller('ibmElasticController', ['$scope', function ibmElasticController($scope) {
  $scope.menu = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
}]);