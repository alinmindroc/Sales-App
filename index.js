angular.module('salesApp', [])
.controller('salesController', ['$scope', function ($scope) {
	$scope.
	publications = [
	{name:"Kaufland",genre:"Autopromovare",sales:4462569},
	{name:"Click! Ghid TV",genre:"Supliment TV",sales:167794},
	{name:"Ring",genre:"Cotidian generalist gratuit",sales:95152},
	{name:"Click",genre:"Tabloide",sales:89123},
	{name:"Libertatea - Supliment Weekend",genre:"Supliment TV",sales:86401},
	{name:"Practic in bucatarie",genre:"Culinar",sales:71604},
	{name:"Sibiu 100%",genre:"Publicatii cu continut generalist, local sau regional",sales:67000},
	{name:"Libertatea",genre:"Tabloide",sales:58628},
	{name:"Click! de Duminica",genre:"Publicatie de weekend",sales:50790},
	{name:"Libertatea pentru femei",genre:"Femei",sales:46917},
	{name:"Click pofta buna!",genre:"Culinar",sales:46232},
	{name:"TVMania",genre:"Ghid TV",sales:44643},
	{name:"Click! pentru femei",genre:"Femei",sales:38554},
	{name:"Libertatea - Editia de duminica",genre:"Publicatie de weekend",sales:33718},
	{name:"Femeia de azi",genre:"Femei",sales:31826},
	{name:"TV Satelit",genre:"Ghid TV",sales:29895},
	{name:"Click SANATATE",genre:"Sanatate & ingrijire personala",sales:27514},
	{name:"Libertatea pentru femei - Retete",genre:"Culinar",sales:25467},
	{name:"Gazeta Sporturilor",genre:"Sport",sales:23836},
	{name:"Sanatatea de azi",genre:"Sanatate & ingrijire personala",sales:23368},
	{name:"Ziarul Lumina",genre:"Religie",sales:22751},
	{name:"Lumina de duminica",genre:"Religie",sales:22585},
	{name:"Practic Carticica Practica",genre:"Culinar",sales:21104},
	{name:"Sky Lady",genre:"B2B",sales:20000},
	{name:"Insight Tarom",genre:"B2B",sales:20000},
	{name:"OK! Romania",genre:"Celebritati",sales:14678},
	{name:"Ciao!",genre:"Vedete",sales:13864},
	{name:"Weekend Adevarul",genre:"Publicatie de weekend",sales:13438},
	{name:"Jurnal Aradean",genre:"Cotidian generalist, local sau regional",sales:13129},
	{name:"Practic - Idei pentru casa, gradina si apartament",genre:"Home&Deco",sales:13013},
	{name:"Super Bravo Girl",genre:"Reviste pentru adolescenti",sales:12466},
	{name:"Evenimentul Zilei",genre:"Cotidian generalist national",sales:12167},
	{name:"ELLE",genre:"Femei (Lifestyle / moda)",sales:11881},
	{name:"Historia",genre:"Cultura",sales:11662},
	{name:"Viva",genre:"Celebritati",sales:11563},
	{name:"Avantaje",genre:"Femei (Glossy)",sales:11381},
	{name:"Romania Libera",genre:"Cotidian generalist national",sales:11352},
	{name:"Weekend Magazin",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:11099},
	{name:"Spy",genre:"Vedete",sales:10460},
	{name:"Catavencii",genre:"Satira - Umor",sales:10449},
	{name:"Unica",genre:"Femei (Glossy)",sales:10348},
	{name:"Bihari Naplo",genre:"Cotidian generalist, local sau regional",sales:10256},
	{name:"Psychologies",genre:"Femei (Lifestyle / moda)",sales:10203},
	{name:"Ioana",genre:"Femei",sales:9810},
	{name:"Cosmopolitan",genre:"Femei (Glossy)",sales:9656},
	{name:"Tribuna",genre:"Cotidian generalist, local sau regional",sales:9636},
	{name:"Magazin Umoristic",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:9588},
	{name:"Adevarul",genre:"Cotidian generalist national",sales:9206},
	{name:"Glamour",genre:"Femei (Glossy)",sales:9133},
	{name:"Gradina mea de vis",genre:"Home&Deco",sales:8746},
	{name:"Renasterea Banateana",genre:"Cotidian generalist, local sau regional",sales:8635},
	{name:"Transilvania Business",genre:"Economic&financiar",sales:8586},
	{name:"National Geographic",genre:"Cultura generala",sales:8435},
	{name:"Gigantica",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:7934},
	{name:"Surprize",genre:"Divertisment, Integrame, Rebus si Jocuri",sales:7911},
	{name:"Jurnal Bihorean",genre:"Cotidian generalist, local sau regional",sales:7786},
	{name:"Gazeta Sporturilor de Duminica",genre:"Sport",sales:7694},
	{name:"National Geographic Traveler",genre:"Turism & vacante",sales:7693},
	{name:"Ziarul Financiar",genre:"Economic&financiar",sales:7337},
	{name:"Biz",genre:"Business Lifestyle",sales:7295},
	{name:"Beau Monde",genre:"Femei (Lifestyle / moda)",sales:7292},
	{name:"Autobild",genre:"Auto - moto",sales:6915},
	{name:"Monitorul de Suceava",genre:"Cotidian generalist, local sau regional",sales:6860},
	{name:"Auto Motor si Sport",genre:"Auto - moto",sales:6564},
	{name:"Dilema Veche",genre:"Cultura",sales:6367},
	{name:"Harper`s Bazaar",genre:"Femei (Lifestyle / moda)",sales:6097},
	{name:"Marie Claire",genre:"Femei (Lifestyle / moda)",sales:6078},
	{name:"Casa mea",genre:"Home&Deco",sales:5909},
	{name:"Crisana",genre:"Cotidian generalist, local sau regional",sales:5808},
	{name:"Capital",genre:"Economic&financiar",sales:5783},
	{name:"Femeia",genre:"Femei (Glossy)",sales:5645},
	{name:"BBC Good Food",genre:"Culinar",sales:5422},
	{name:"Draga mea pentru copii",genre:"Femei",sales:5179},
	{name:"Business Magazin",genre:"Economic&financiar",sales:4899},
	{name:"Viata Libera",genre:"Cotidian generalist, local sau regional",sales:4770},
	{name:"Plafar",genre:"Sanatate & ingrijire personala",sales:4735},
	{name:"Monitorul de Botosani",genre:"Cotidian generalist, local sau regional",sales:4611},
	{name:"Ce se intampla doctore?",genre:"Femei (Glossy)",sales:4544},
	{name:"Casa Lux",genre:"Home&Deco",sales:4493},
	{name:"Men`s Health",genre:"Lifestyle masculin",sales:4286},
	{name:"Jurnalul National",genre:"Cotidian generalist national",sales:1280},
	{name:"BBC Science World",genre:"Cultura generala",sales:4225},
	{name:"Ziarul Hunedoreanului",genre:"Cotidian generalist, local sau regional",sales:3487},
	{name:"Casa si gradina",genre:"Home&Deco",sales:3435},
	{name:"BBC Top Gear",genre:"Auto - moto",sales:3204},
	{name:"Academia Catavencu",genre:"Satira - Umor",sales:2940},
	{name:"Bihoreanul",genre:"Publicatii cu continut generalist, local sau regional",sales:2886},
	{name:"Cariere",genre:"Business Lifestyle",sales:2520},
	{name:"Mamica de azi",genre:"Cresterea si educarea copiilor",sales:2474},
	{name:"Realitatea Media",genre:"Cotidian generalist, local sau regional",sales:2447},
	{name:"Foreign Policy",genre:"Politica",sales:2365},
	{name:"Obiectiv Vocea Brailei",genre:"Cotidian generalist, local sau regional",sales:2281},
	{name:"Evenimentul Regional al Moldovei",genre:"Cotidian generalist, local sau regional",sales:1772},
	{name:"Monitorul Expres",genre:"Cotidian generalist, local sau regional",sales:1641},
	{name:"Mami",genre:"Cresterea si educarea copiilor",sales:1624},
	{name:"Replica",genre:"Publicatii cu continut generalist, local sau regional",sales:1591},
	{name:"Debizz",genre:"Business Lifestyle",sales:1000},
	{name:"Observator de Constanta",genre:"Cotidian generalist, local sau regional",sales:775}];

	$scope.sortStyle = function(column){
		if($scope.sortedColumn != column)
			return "";
		if($scope.sortAscending == true)
			return "glyphicon glyphicon-sort-by-alphabet";
		else
			return "glyphicon glyphicon-sort-by-alphabet-alt";
	}

	$scope.sortAscending = true;
	$scope.sortBy = function(column){
		if($scope.sortedColumn == column)
			$scope.sortAscending =! $scope.sortAscending;

		$scope.sortedColumn = column;

		$scope.publications.sort(function(a, b){
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
}]);
