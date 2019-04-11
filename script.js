var app = angular
    .module('taskApp', [])
    .controller("taskController", function ($scope) {
        $scope.tasks =
            [
                { title: "Test Titel", description: "Detta är en beskrivning", deadline: "12-04" }
            ]

        $scope.addTask = function (title, description, deadline) {
            if (title || description || deadline != "") {
                console.log("Missing input");
            } else {
                $scope.tasks.push({ title: title, description: description, deadline: deadline })
            }


        }

    })