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

	$scope.items = ['item1', 'item2', 'item3'];

	$scope.animationsEnabled = true;

	$scope.open = function (size) {

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'myModalContent.html',
			controller: 'ModalInstanceCtrl',
			size: size,
			resolve: {
				items: function () {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	$scope.toggleAnimation = function () {
		$scope.animationsEnabled = !$scope.animationsEnabled;
	};


	$scope.dynamicPopover = {
		templateUrl: 'myPopoverTemplate.html',
	};


}])
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

	$scope.items = items;
	$scope.selected = {
		item: $scope.items[0]
	};

	$scope.ok = function () {
		$uibModalInstance.close($scope.selected.item);
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});
