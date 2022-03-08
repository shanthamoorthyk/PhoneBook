var app = angular.module("addrBook",[]);
        app.controller("myCtrl",function($scope, $http){
            //To get the contacts
              $http.get("https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts")
              .then(function(response) {
                $scope.info = response.data;
              });
            //To add Contact
            $scope.addContact = function(){
                return {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    phone:$scope.phone
                }
            }
            //To check duplicate contact
            $scope.addItem = function(){
                for(var i=0;i<$scope.info.length;i++){
                    if(($scope.info[i].firstName == $scope.addContact().firstName)||
                    ($scope.info[i].lastName == $scope.addContact().lastName)||
                        ($scope.info[i].phone == $scope.addContact().phone)){
                        alert("First Name or Last Name or Phone Number was repeated");
                        return false;
                    }
                }
                $scope.info.push($scope.addContact());
            }
            //To remove contact
            $scope.removeContact = function(){
                $scope.info.splice(this.$index,1)
            }
            //To change the contact    
            $scope.change = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return true;                 
                  }
              }    
            }
          //To save the conatct
            $scope.save = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return false;                 
                  }
              }    
            }            
        })
