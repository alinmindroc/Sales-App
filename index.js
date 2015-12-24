angular.module('salesApp', ['ngAnimate', 'ui.bootstrap'])
.controller('salesController', ['$scope', '$uibModal', function ($scope, $uibModal) {
	$scope.
	publications = [
	{magazine:false, book: false, cd: false, selected:false,name:"Kaufland",genre:"Autopromovare",sales:4462569},
	{magazine:false, book: false, cd: false, selected:false,name:"Click! Ghid TV",genre:"Supliment TV",sales:167794},
	{magazine:false, book: false, cd: false, selected:false,name:"Ring",genre:"Cotidian generalist gratuit",sales:95152},
	{magazine:false, book: false, cd: false, selected:false,name:"Click",genre:"Tabloide",sales:89123},
	{magazine:false, book: false, cd: false, selected:false,name:"Libertatea - Supliment Weekend",genre:"Supliment TV",sales:86401},
	{magazine:false, book: false, cd: false, selected:false,name:"Practic in bucatarie",genre:"Culinar",sales:71604},
	{magazine:false, book: false, cd: false, selected:false,name:"Sibiu 100%",genre:"Publicatii cu continut generalist, local sau regional",sales:67000},
	{magazine:false, book: false, cd: false, selected:false,name:"Libertatea",genre:"Tabloide",sales:58628},
	{magazine:false, book: false, cd: false, selected:false,name:"Click! de Duminica",genre:"Publicatie de weekend",sales:50790},
	{magazine:false, book: false, cd: false, selected:false,name:"Libertatea pentru femei",genre:"Femei",sales:46917},
	{magazine:false, book: false, cd: false, selected:false,name:"Click pofta buna!",genre:"Culinar",sales:46232},
	{magazine:false, book: false, cd: false, selected:false,name:"TVMania",genre:"Ghid TV",sales:44643},
	{magazine:false, book: false, cd: false, selected:false,name:"Click! pentru femei",genre:"Femei",sales:38554},
	{magazine:false, book: false, cd: false, selected:false,name:"Libertatea - Editia de duminica",genre:"Publicatie de weekend",sales:33718},
	{magazine:false, book: false, cd: false, selected:false,name:"Femeia de azi",genre:"Femei",sales:31826},
	{magazine:false, book: false, cd: false, selected:false,name:"TV Satelit",genre:"Ghid TV",sales:29895},
	{magazine:false, book: false, cd: false, selected:false,name:"Click SANATATE",genre:"Sanatate & ingrijire personala",sales:27514},
	{magazine:false, book: false, cd: false, selected:false,name:"Libertatea pentru femei - Retete",genre:"Culinar",sales:25467},
	{magazine:false, book: false, cd: false, selected:false,name:"Gazeta Sporturilor",genre:"Sport",sales:23836},
	{magazine:false, book: false, cd: false, selected:false,name:"Sanatatea de azi",genre:"Sanatate & ingrijire personala",sales:23368},
	{magazine:false, book: false, cd: false, selected:false,name:"Ziarul Lumina",genre:"Religie",sales:22751},
	{magazine:false, book: false, cd: false, selected:false,name:"Lumina de duminica",genre:"Religie",sales:22585},
	{magazine:false, book: false, cd: false, selected:false,name:"Practic Carticica Practica",genre:"Culinar",sales:21104},
	{magazine:false, book: false, cd: false, selected:false,name:"Sky Lady",genre:"B2B",sales:20000},
	{magazine:false, book: false, cd: false, selected:false,name:"Insight Tarom",genre:"B2B",sales:20000},
	{magazine:false, book: false, cd: false, selected:false,name:"OK! Romania",genre:"Celebritati",sales:14678},
	{magazine:false, book: false, cd: false, selected:false,name:"Ciao!",genre:"Vedete",sales:13864},
	{magazine:false, book: false, cd: false, selected:false,name:"Weekend Adevarul",genre:"Publicatie de weekend",sales:13438},
	{magazine:false, book: false, cd: false, selected:false,name:"Jurnal Aradean",genre:"Cotidian generalist, local sau regional",sales:13129},
	{magazine:false, book: false, cd: false, selected:false,name:"Practic - Idei pentru casa, gradina si apartament",genre:"Home&Deco",sales:13013},
	{magazine:false, book: false, cd: false, selected:false,name:"Super Bravo Girl",genre:"Reviste pentru adolescenti",sales:12466},
	{magazine:false, book: false, cd: false, selected:false,name:"Evenimentul Zilei",genre:"Cotidian generalist national",sales:12167},
	{magazine:false, book: false, cd: false, selected:false,name:"ELLE",genre:"Femei (Lifestyle / moda)",sales:11881},
	{magazine:false, book: false, cd: false, selected:false,name:"Historia",genre:"Cultura",sales:11662},
	{magazine:false, book: false, cd: false, selected:false,name:"Viva",genre:"Celebritati",sales:11563},
	{magazine:false, book: false, cd: false, selected:false,name:"Avantaje",genre:"Femei (Glossy)",sales:11381},
	{magazine:false, book: false, cd: false, selected:false,name:"Romania Libera",genre:"Cotidian generalist national",sales:11352},
	{magazine:false, book: false, cd: false, selected:false,name:"Weekend Magazin",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:11099},
	{magazine:false, book: false, cd: false, selected:false,name:"Spy",genre:"Vedete",sales:10460},
	{magazine:false, book: false, cd: false, selected:false,name:"Catavencii",genre:"Satira - Umor",sales:10449},
	{magazine:false, book: false, cd: false, selected:false,name:"Unica",genre:"Femei (Glossy)",sales:10348},
	{magazine:false, book: false, cd: false, selected:false,name:"Bihari Naplo",genre:"Cotidian generalist, local sau regional",sales:10256},
	{magazine:false, book: false, cd: false, selected:false,name:"Psychologies",genre:"Femei (Lifestyle / moda)",sales:10203},
	{magazine:false, book: false, cd: false, selected:false,name:"Ioana",genre:"Femei",sales:9810},
	{magazine:false, book: false, cd: false, selected:false,name:"Cosmopolitan",genre:"Femei (Glossy)",sales:9656},
	{magazine:false, book: false, cd: false, selected:false,name:"Tribuna",genre:"Cotidian generalist, local sau regional",sales:9636},
	{magazine:false, book: false, cd: false, selected:false,name:"Magazin Umoristic",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:9588},
	{magazine:false, book: false, cd: false, selected:false,name:"Adevarul",genre:"Cotidian generalist national",sales:9206},
	{magazine:false, book: false, cd: false, selected:false,name:"Glamour",genre:"Femei (Glossy)",sales:9133},
	{magazine:false, book: false, cd: false, selected:false,name:"Gradina mea de vis",genre:"Home&Deco",sales:8746},
	{magazine:false, book: false, cd: false, selected:false,name:"Renasterea Banateana",genre:"Cotidian generalist, local sau regional",sales:8635},
	{magazine:false, book: false, cd: false, selected:false,name:"Transilvania Business",genre:"Economic&financiar",sales:8586},
	{magazine:false, book: false, cd: false, selected:false,name:"National Geographic",genre:"Cultura generala",sales:8435},
	{magazine:false, book: false, cd: false, selected:false,name:"Gigantica",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:7934},
	{magazine:false, book: false, cd: false, selected:false,name:"Surprize",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:7911},
	{magazine:false, book: false, cd: false, selected:false,name:"Jurnal Bihorean",genre:"Cotidian generalist, local sau regional",sales:7786},
	{magazine:false, book: false, cd: false, selected:false,name:"Gazeta Sporturilor de Duminica",genre:"Sport",sales:7694},
	{magazine:false, book: false, cd: false, selected:false,name:"National Geographic Traveler",genre:"Turism & vacante",sales:7693},
	{magazine:false, book: false, cd: false, selected:false,name:"Ziarul Financiar",genre:"Economic&financiar",sales:7337},
	{magazine:false, book: false, cd: false, selected:false,name:"Biz",genre:"Business Lifestyle",sales:7295},
	{magazine:false, book: false, cd: false, selected:false,name:"Beau Monde",genre:"Femei (Lifestyle / moda)",sales:7292},
	{magazine:false, book: false, cd: false, selected:false,name:"Autobild",genre:"Auto - moto",sales:6915},
	{magazine:false, book: false, cd: false, selected:false,name:"Monitorul de Suceava",genre:"Cotidian generalist, local sau regional",sales:6860},
	{magazine:false, book: false, cd: false, selected:false,name:"Auto Motor si Sport",genre:"Auto - moto",sales:6564},
	{magazine:false, book: false, cd: false, selected:false,name:"Dilema Veche",genre:"Cultura",sales:6367},
	{magazine:false, book: false, cd: false, selected:false,name:"Harper`s Bazaar",genre:"Femei (Lifestyle / moda)",sales:6097},
	{magazine:false, book: false, cd: false, selected:false,name:"Marie Claire",genre:"Femei (Lifestyle / moda)",sales:6078},
	{magazine:false, book: false, cd: false, selected:false,name:"Casa mea",genre:"Home&Deco",sales:5909},
	{magazine:false, book: false, cd: false, selected:false,name:"Crisana",genre:"Cotidian generalist, local sau regional",sales:5808},
	{magazine:false, book: false, cd: false, selected:false,name:"Capital",genre:"Economic&financiar",sales:5783},
	{magazine:false, book: false, cd: false, selected:false,name:"Femeia",genre:"Femei (Glossy)",sales:5645},
	{magazine:false, book: false, cd: false, selected:false,name:"BBC Good Food",genre:"Culinar",sales:5422},
	{magazine:false, book: false, cd: false, selected:false,name:"Draga mea pentru copii",genre:"Femei",sales:5179},
	{magazine:false, book: false, cd: false, selected:false,name:"Business Magazin",genre:"Economic&financiar",sales:4899},
	{magazine:false, book: false, cd: false, selected:false,name:"Viata Libera",genre:"Cotidian generalist, local sau regional",sales:4770},
	{magazine:false, book: false, cd: false, selected:false,name:"Plafar",genre:"Sanatate & ingrijire personala",sales:4735},
	{magazine:false, book: false, cd: false, selected:false,name:"Monitorul de Botosani",genre:"Cotidian generalist, local sau regional",sales:4611},
	{magazine:false, book: false, cd: false, selected:false,name:"Ce se intampla doctore?",genre:"Femei (Glossy)",sales:4544},
	{magazine:false, book: false, cd: false, selected:false,name:"Casa Lux",genre:"Home&Deco",sales:4493},
	{magazine:false, book: false, cd: false, selected:false,name:"Men`s Health",genre:"Lifestyle masculin",sales:4286},
	{magazine:false, book: false, cd: false, selected:false,name:"Jurnalul National",genre:"Cotidian generalist national",sales:1280},
	{magazine:false, book: false, cd: false, selected:false,name:"BBC Science World",genre:"Cultura generala",sales:4225},
	{magazine:false, book: false, cd: false, selected:false,name:"Ziarul Hunedoreanului",genre:"Cotidian generalist, local sau regional",sales:3487},
	{magazine:false, book: false, cd: false, selected:false,name:"Casa si gradina",genre:"Home&Deco",sales:3435},
	{magazine:false, book: false, cd: false, selected:false,name:"BBC Top Gear",genre:"Auto - moto",sales:3204},
	{magazine:false, book: false, cd: false, selected:false,name:"Academia Catavencu",genre:"Satira - Umor",sales:2940},
	{magazine:false, book: false, cd: false, selected:false,name:"Bihoreanul",genre:"Publicatii cu continut generalist, local sau regional",sales:2886},
	{magazine:false, book: false, cd: false, selected:false,name:"Cariere",genre:"Business Lifestyle",sales:2520},
	{magazine:false, book: false, cd: false, selected:false,name:"Mamica de azi",genre:"Cresterea si educarea copiilor",sales:2474},
	{magazine:false, book: false, cd: false, selected:false,name:"Realitatea Media",genre:"Cotidian generalist, local sau regional",sales:2447},
	{magazine:false, book: false, cd: false, selected:false,name:"Foreign Policy",genre:"Politica",sales:2365},
	{magazine:false, book: false, cd: false, selected:false,name:"Obiectiv Vocea Brailei",genre:"Cotidian generalist, local sau regional",sales:2281},
	{magazine:false, book: false, cd: false, selected:false,name:"Evenimentul Regional al Moldovei",genre:"Cotidian generalist, local sau regional",sales:1772},
	{magazine:false, book: false, cd: false, selected:false,name:"Monitorul Expres",genre:"Cotidian generalist, local sau regional",sales:1641},
	{magazine:false, book: false, cd: false, selected:false,name:"Mami",genre:"Cresterea si educarea copiilor",sales:1624},
	{magazine:false, book: false, cd: false, selected:false,name:"Replica",genre:"Publicatii cu continut generalist, local sau regional",sales:1591},
	{magazine:false, book: false, cd: false, selected:false,name:"Debizz",genre:"Business Lifestyle",sales:1000},
	{magazine:false, book: false, cd: false, selected:false,name:"Observator de Constanta",genre:"Cotidian generalist, local sau regional",sales:775}];

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

	$scope.dynamicPopover = {
		// content: 'Hello, World!',
		templateUrl: 'myPopoverTemplate.html',
		title: 'Alegere add-on'
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
