angular.module('salesApp', ['ngAnimate', 'ui.bootstrap'])
.controller('salesController', ['$scope', '$uibModal', function ($scope, $uibModal) {
	$scope.
	publications = [
	{selected:false,name:"Kaufland",genre:"Autopromovare",sales:4462569},
	{selected:false,name:"Click! Ghid TV",genre:"Supliment TV",sales:167794},
	{selected:false,name:"Ring",genre:"Cotidian generalist gratuit",sales:95152},
	{selected:false,name:"Click",genre:"Tabloide",sales:89123},
	{selected:false,name:"Libertatea - Supliment Weekend",genre:"Supliment TV",sales:86401},
	{selected:false,name:"Practic in bucatarie",genre:"Culinar",sales:71604},
	{selected:false,name:"Sibiu 100%",genre:"Publicatii cu continut generalist, local sau regional",sales:67000},
	{selected:false,name:"Libertatea",genre:"Tabloide",sales:58628},
	{selected:false,name:"Click! de Duminica",genre:"Publicatie de weekend",sales:50790},
	{selected:false,name:"Libertatea pentru femei",genre:"Femei",sales:46917},
	{selected:false,name:"Click pofta buna!",genre:"Culinar",sales:46232},
	{selected:false,name:"TVMania",genre:"Ghid TV",sales:44643},
	{selected:false,name:"Click! pentru femei",genre:"Femei",sales:38554},
	{selected:false,name:"Libertatea - Editia de duminica",genre:"Publicatie de weekend",sales:33718},
	{selected:false,name:"Femeia de azi",genre:"Femei",sales:31826},
	{selected:false,name:"TV Satelit",genre:"Ghid TV",sales:29895},
	{selected:false,name:"Click SANATATE",genre:"Sanatate & ingrijire personala",sales:27514},
	{selected:false,name:"Libertatea pentru femei - Retete",genre:"Culinar",sales:25467},
	{selected:false,name:"Gazeta Sporturilor",genre:"Sport",sales:23836},
	{selected:false,name:"Sanatatea de azi",genre:"Sanatate & ingrijire personala",sales:23368},
	{selected:false,name:"Ziarul Lumina",genre:"Religie",sales:22751},
	{selected:false,name:"Lumina de duminica",genre:"Religie",sales:22585},
	{selected:false,name:"Practic Carticica Practica",genre:"Culinar",sales:21104},
	{selected:false,name:"Sky Lady",genre:"B2B",sales:20000},
	{selected:false,name:"Insight Tarom",genre:"B2B",sales:20000},
	{selected:false,name:"OK! Romania",genre:"Celebritati",sales:14678},
	{selected:false,name:"Ciao!",genre:"Vedete",sales:13864},
	{selected:false,name:"Weekend Adevarul",genre:"Publicatie de weekend",sales:13438},
	{selected:false,name:"Jurnal Aradean",genre:"Cotidian generalist, local sau regional",sales:13129},
	{selected:false,name:"Practic - Idei pentru casa, gradina si apartament",genre:"Home&Deco",sales:13013},
	{selected:false,name:"Super Bravo Girl",genre:"Reviste pentru adolescenti",sales:12466},
	{selected:false,name:"Evenimentul Zilei",genre:"Cotidian generalist national",sales:12167},
	{selected:false,name:"ELLE",genre:"Femei (Lifestyle / moda)",sales:11881},
	{selected:false,name:"Historia",genre:"Cultura",sales:11662},
	{selected:false,name:"Viva",genre:"Celebritati",sales:11563},
	{selected:false,name:"Avantaje",genre:"Femei (Glossy)",sales:11381},
	{selected:false,name:"Romania Libera",genre:"Cotidian generalist national",sales:11352},
	{selected:false,name:"Weekend Magazin",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:11099},
	{selected:false,name:"Spy",genre:"Vedete",sales:10460},
	{selected:false,name:"Catavencii",genre:"Satira - Umor",sales:10449},
	{selected:false,name:"Unica",genre:"Femei (Glossy)",sales:10348},
	{selected:false,name:"Bihari Naplo",genre:"Cotidian generalist, local sau regional",sales:10256},
	{selected:false,name:"Psychologies",genre:"Femei (Lifestyle / moda)",sales:10203},
	{selected:false,name:"Ioana",genre:"Femei",sales:9810},
	{selected:false,name:"Cosmopolitan",genre:"Femei (Glossy)",sales:9656},
	{selected:false,name:"Tribuna",genre:"Cotidian generalist, local sau regional",sales:9636},
	{selected:false,name:"Magazin Umoristic",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:9588},
	{selected:false,name:"Adevarul",genre:"Cotidian generalist national",sales:9206},
	{selected:false,name:"Glamour",genre:"Femei (Glossy)",sales:9133},
	{selected:false,name:"Gradina mea de vis",genre:"Home&Deco",sales:8746},
	{selected:false,name:"Renasterea Banateana",genre:"Cotidian generalist, local sau regional",sales:8635},
	{selected:false,name:"Transilvania Business",genre:"Economic&financiar",sales:8586},
	{selected:false,name:"National Geographic",genre:"Cultura generala",sales:8435},
	{selected:false,name:"Gigantica",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:7934},
	{selected:false,name:"Surprize",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:7911},
	{selected:false,name:"Jurnal Bihorean",genre:"Cotidian generalist, local sau regional",sales:7786},
	{selected:false,name:"Gazeta Sporturilor de Duminica",genre:"Sport",sales:7694},
	{selected:false,name:"National Geographic Traveler",genre:"Turism & vacante",sales:7693},
	{selected:false,name:"Ziarul Financiar",genre:"Economic&financiar",sales:7337},
	{selected:false,name:"Biz",genre:"Business Lifestyle",sales:7295},
	{selected:false,name:"Beau Monde",genre:"Femei (Lifestyle / moda)",sales:7292},
	{selected:false,name:"Autobild",genre:"Auto - moto",sales:6915},
	{selected:false,name:"Monitorul de Suceava",genre:"Cotidian generalist, local sau regional",sales:6860},
	{selected:false,name:"Auto Motor si Sport",genre:"Auto - moto",sales:6564},
	{selected:false,name:"Dilema Veche",genre:"Cultura",sales:6367},
	{selected:false,name:"Harper`s Bazaar",genre:"Femei (Lifestyle / moda)",sales:6097},
	{selected:false,name:"Marie Claire",genre:"Femei (Lifestyle / moda)",sales:6078},
	{selected:false,name:"Casa mea",genre:"Home&Deco",sales:5909},
	{selected:false,name:"Crisana",genre:"Cotidian generalist, local sau regional",sales:5808},
	{selected:false,name:"Capital",genre:"Economic&financiar",sales:5783},
	{selected:false,name:"Femeia",genre:"Femei (Glossy)",sales:5645},
	{selected:false,name:"BBC Good Food",genre:"Culinar",sales:5422},
	{selected:false,name:"Draga mea pentru copii",genre:"Femei",sales:5179},
	{selected:false,name:"Business Magazin",genre:"Economic&financiar",sales:4899},
	{selected:false,name:"Viata Libera",genre:"Cotidian generalist, local sau regional",sales:4770},
	{selected:false,name:"Plafar",genre:"Sanatate & ingrijire personala",sales:4735},
	{selected:false,name:"Monitorul de Botosani",genre:"Cotidian generalist, local sau regional",sales:4611},
	{selected:false,name:"Ce se intampla doctore?",genre:"Femei (Glossy)",sales:4544},
	{selected:false,name:"Casa Lux",genre:"Home&Deco",sales:4493},
	{selected:false,name:"Men`s Health",genre:"Lifestyle masculin",sales:4286},
	{selected:false,name:"Jurnalul National",genre:"Cotidian generalist national",sales:1280},
	{selected:false,name:"BBC Science World",genre:"Cultura generala",sales:4225},
	{selected:false,name:"Ziarul Hunedoreanului",genre:"Cotidian generalist, local sau regional",sales:3487},
	{selected:false,name:"Casa si gradina",genre:"Home&Deco",sales:3435},
	{selected:false,name:"BBC Top Gear",genre:"Auto - moto",sales:3204},
	{selected:false,name:"Academia Catavencu",genre:"Satira - Umor",sales:2940},
	{selected:false,name:"Bihoreanul",genre:"Publicatii cu continut generalist, local sau regional",sales:2886},
	{selected:false,name:"Cariere",genre:"Business Lifestyle",sales:2520},
	{selected:false,name:"Mamica de azi",genre:"Cresterea si educarea copiilor",sales:2474},
	{selected:false,name:"Realitatea Media",genre:"Cotidian generalist, local sau regional",sales:2447},
	{selected:false,name:"Foreign Policy",genre:"Politica",sales:2365},
	{selected:false,name:"Obiectiv Vocea Brailei",genre:"Cotidian generalist, local sau regional",sales:2281},
	{selected:false,name:"Evenimentul Regional al Moldovei",genre:"Cotidian generalist, local sau regional",sales:1772},
	{selected:false,name:"Monitorul Expres",genre:"Cotidian generalist, local sau regional",sales:1641},
	{selected:false,name:"Mami",genre:"Cresterea si educarea copiilor",sales:1624},
	{selected:false,name:"Replica",genre:"Publicatii cu continut generalist, local sau regional",sales:1591},
	{selected:false,name:"Debizz",genre:"Business Lifestyle",sales:1000},
	{selected:false,name:"Observator de Constanta",genre:"Cotidian generalist, local sau regional",sales:775}];

	$scope.sortStyle = function(column){
		if($scope.sortedColumn != column)
			return "";
		if($scope.sortAscending == true)
			return "glyphicon glyphicon-sort-by-alphabet";
		else
			return "glyphicon glyphicon-sort-by-alphabet-alt";
	}

	$scope.shownPublications = $scope.publications;

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
