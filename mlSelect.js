(function () {
  'use strict';

  angular.module('app')
    .component('mlSelect', {
      templateUrl: 'views/ml-select.html',
      controller: mlSelectController,
      controllerAs: 'vm',
      bindings: {
        accounts: '<'
      }
    });

  function mlSelectController() {
    // CTRL init
    var vm = this;

    vm.selectOpen = false;
    vm.selectedAcc = null;

    vm.selectAccount = selectAccount;

    // Lifecycle
    vm.$onInit = function () {
      console.log('onInit', vm.accounts);
    };
    vm.$postLink = function () {
      console.log('postLink', vm.accounts);
    };

    // Functions
    function selectAccount(acc){
      vm.selectedAcc = acc;
      vm.selectOpen = false;
    }
  }
})();
