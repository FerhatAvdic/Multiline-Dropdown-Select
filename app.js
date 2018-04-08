let app = angular.module('app', []);
app.controller('mainCtrl', mainCtrl);

function mainCtrl(){
  let vm = this;
  vm.accs = [
    {
      'type': 'Main Account',
      'issuer': 'Lloyds',
      'number': '117183230-85628290-123912373',
      'balance': 98005
    },
    {
      'type': 'Concentration Account',
      'issuer': 'Lloyds',
      'number': '117183230-85628290-123912373',
      'balance': 5
    },
    {
      'type': 'Main Account',
      'issuer': 'Barclays',
      'number': '117183230-85628290-123912373',
      'balance': 98005
    }
  ];
}