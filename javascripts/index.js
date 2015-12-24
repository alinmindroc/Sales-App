angular.module('salesApp', ['ngAnimate', 'ui.bootstrap'])
.controller('salesController', ['$scope', '$uibModal', '$http', function ($scope, $uibModal, $http) {
	
	$http.get('javascripts/data.json').then(function(res){
		$scope.publications = res.data;
		$scope.selectedPub = $scope.publications[0];
		$scope.shownPublications = $scope.publications;
	});

	$scope.sortStyle = function(column){
		if($scope.sortedColumn != column)
			return "";
		if($scope.sortAscending == true)
			return "glyphicon glyphicon-sort-by-alphabet";
		else
			return "glyphicon glyphicon-sort-by-alphabet-alt";
	}

	$scope.filter = function(text){
		$scope.shownPublications = $scope.publications.filter(function(x){
			var name = x.name.toLowerCase();
			var genre = x.genre.toLowerCase();
			var term = text.toLowerCase();
			return name.indexOf(term) != -1 || genre.indexOf(term) != -1;
		});
	}

	$scope.sortAscending = true;
	$scope.sortBy = function(column){
		if($scope.sortedColumn == column)
			$scope.sortAscending =! $scope.sortAscending;

		$scope.sortedColumn = column;

		$scope.shownPublications.sort(function(a, b){
			switch(column){
				case 'name':
				if($scope.sortAscending)
					return a.name.localeCompare(b.name);
				else
					return b.name.localeCompare(a.name);						
				case 'genre':
				if($scope.sortAscending)				
					return a.genre.localeCompare(b.genre);
				else
					return b.genre.localeCompare(a.genre);
				case 'sales':
				if($scope.sortAscending)			
					return a.sales - b.sales;
				else
					return b.sales - a.sales;
			}
		})
	}

	$scope.openedPopover = false;

	$scope.open = function () {
		var modalInstance = $uibModal.open({
			templateUrl: 'modalTemplate.html',
			controller: 'ModalInstanceCtrl',
			resolve: {
				items: function () {
					return $scope.publications.filter(function(p){
						return p.selected == true;
					});
				}
			}
		});

		modalInstance.result.then(function (items) {
			for(i in $scope.publications){
				$scope.publications[i].selected = false;
				$scope.publications[i].magazine = false;
				$scope.publications[i].book = false;
				$scope.publications[i].cd = false;
			}
			$scope.selectedPub = $scope.publications[0];
			$scope.shownPublications = $scope.publications;
		});
	};

	$scope.dynamicPopover = {
		templateUrl: 'popoverTemplate.html',
	};
}])
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
	$scope.items = items;
	$scope.price = 0;
	for(i in $scope.items){
		item = $scope.items[i];
		if(item.magazine)
			$scope.price += 5;
		else if(item.book)
			$scope.price += 10;
		else if(item.cd)
			$scope.price += 5;
	}

	$scope.ok = function () {
		$uibModalInstance.close($scope.items);
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});
