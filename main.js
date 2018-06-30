angular.module("myApp",[]).controller('myCtrl', function($scope){
	$scope.listProduct=[
		{id:'P01', name:'Product1', price:1000, quantity:10},
		{id:'P02', name:'Product2', price:2000, quantity:20},
		{id:'P03', name:'Product3', price:3000, quantity:30},
		{id:'P04', name:'Product4', price:4000, quantity:40},
		{id:'P05', name:'Product5', price:5000, quantity:50}
	];

	$scope.btnDelete=function(index){
		$scope.listProduct.splice(index,1);
		//$scope.clear();
	}
	$scope.btnUpdate=function(index, event){
		$scope.id=$scope.listProduct[index].id;
		$scope.name=$scope.listProduct[index].name;
		$scope.price=$scope.listProduct[index].price;
		$scope.quantity=$scope.listProduct[index].quantity;
		document.querySelectorAll("input[ng-model=id]")[0].setAttribute('disabled','disabled');
	}
	$scope.btnSave=function(index){
		for (var i = 0; i < $scope.listProduct.length; i++) {
			if($scope.listProduct[i].id==index){				
				$scope.listProduct[i].id=$scope.id;
				$scope.listProduct[i].name=$scope.name;
				$scope.listProduct[i].price=$scope.price;
				$scope.listProduct[i].quantity=$scope.quantity;
				$scope.clear();
				document.querySelectorAll("input[ng-model=id]")[0].removeAttribute('disabled');
			}
		}		
	};

	$scope.btnAdd=function(index){
		for (var i = 0; i < $scope.listProduct.length; i++) {
			if($scope.listProduct[i].id ==index){
				return;
			}			
		}
		if($scope.id !="" && $scope.id !=null  && $scope.name !="" && $scope.name !=null){			
			$scope.listProduct.push({id:$scope.id, name:$scope.name, price:$scope.price, quantity:$scope.quantity})
			document.querySelectorAll("input[ng-model=id]")[0].removeAttribute('disabled');
			$scope.clear();
		}
	}
	$scope.clear=function(){
			$scope.id="";
			$scope.name="";
			$scope.price="";
			$scope.quantity="";		
	}

})