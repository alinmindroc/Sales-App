angular.module('salesApp', ['ngAnimate', 'ui.bootstrap'])
.controller('salesController', ['$scope', '$uibModal', '$http', function ($scope, $uibModal, $http) {
	
	$http.get('javascripts/data.json').then(function(res){
		$scope.publications = res.data;
		$scope.selectedPub = $scope.publications[0];
		$scope.shownPublications = $scope.publications;
		$scope.shownPublications.sort(function(a, b){
			if($scope.sortAscending)
				return a.name.localeCompare(b.name);
			else
				return b.name.localeCompare(a.name);						
		}
		);

		$scope.categories = [
		'Toate',
		'Economic&financiar',
		'Divertisment, Integrame, Rebus si Jocuri',
		'Cotidian generalist national',
		'Culinar',
		'Home&Deco',
		'Femei',
		'Femei (Lifestyle / moda)',
		'Femei (Glossy)',
		'Cotidian generalist, local sau regional'
		];
	});

	$scope.sortStyle = function(column){
		if($scope.sortAscending == true)
			return "glyphicon glyphicon-sort-by-alphabet";
		else
			return "glyphicon glyphicon-sort-by-alphabet-alt";
	};

	$scope.filter = function(text){
		$scope.shownPublications = $scope.publications.filter(function(x){
			var name = x.name.toLowerCase();
			var genre = x.genre.toLowerCase();
			var term = text.toLowerCase();
			return name.indexOf(term) != -1 || genre.indexOf(term) != -1;
		});
	};

	$scope.sortAscending = true;

	$scope.sortByName = function(){
		$scope.sortAscending =! $scope.sortAscending;

		$scope.shownPublications.sort(function(a, b){
			if($scope.sortAscending)
				return a.name.localeCompare(b.name);
			else
				return b.name.localeCompare(a.name);						
		}
		)
	};

	$scope.selectCategory = function(category){
		$scope.searchText = "";
		$scope.openedCategoryPopover = false;

		if(category == 'Toate'){
			$scope.shownPublications = $scope.publications;
			return;
		}

		$scope.shownPublications = $scope.publications.filter(function(x){
			return x.genre == category;
		});
	};

	$scope.getItemTotal = function(item){
		var price = 0;
		if(item.magazine)
			price += 5;
		if(item.book)
			price += 10;
		if(item.cd)
			price += 5;

		return price;
	}

	$scope.openedPopover = false;

	$scope.open = function () {
		var modalInstance = $uibModal.open({
			templateUrl: 'views/finalizeOrderModal.html',
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

	$scope.addOnTemplate = 'views/addOnDetailsPopover.html';
	$scope.selectCategoryTemplate = 'views/selectCategoryPopover.html';
}])
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
	$scope.items = items;
	$scope.price = 0;
	for(i in $scope.items){
		item = $scope.items[i];
		if(item.magazine)
			$scope.price += 5;
		if(item.book)
			$scope.price += 10;
		if(item.cd)
			$scope.price += 5;
	};

	$scope.getItemTotal = function(item){
		var price = 0;
		if(item.magazine)
			price += 5;
		if(item.book)
			price += 10;
		if(item.cd)
			price += 5;

		return price;
	}

	$scope.ok = function () {
		$uibModalInstance.close($scope.items);
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});
