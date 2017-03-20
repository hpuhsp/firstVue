var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.person = ['章三', '王五', '赵六'];
    $scope.city = [{ name: '长沙', num: '0' }, { name: '澳门', num: '1' }, { name: '郑州', num: '2' }];
    $scope.firstName = "Alice";
    $scope.secondName = "Shmith";
    $scope.fullName = function () {
        return $scope.firstName + "  " + $scope.secondName;
    }
})

        // function myCtrl($scope) {
        //     $scope.lala = {
        //         firstName: "哈哈哈",
        //         secondName: "啦啦啦",
        //     };

        //     $scope.fullName = function () {
        //         var xv = $scope.lala;
        //         return xv.firstName + " " + xv.secondName;
        //     }
        // }