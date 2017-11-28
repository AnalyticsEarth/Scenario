define( ["qlik", "text!./template.html","./definition","css!./aeScenarioStyle.css"],
	function ( qlik, template, definition, cssStyle ) {

		return {
			template: template,
			definition: definition,
			initialProperties: {
				varlist:[],
				buttontitle: "Reset Scenario",
				showvariables: true
			},
			support: {
				snapshot: true,
				export: true,
				exportData: false
			},
			paint: function () {
				return qlik.Promise.resolve();
			},
			controller: ['$scope', function ( $scope ) {

				var app = qlik.currApp(this);

				$scope.resetButton = function(){
					$scope.layout.varlist.forEach(function(item){
						//console.log("Reset");
						//console.log(item);
						$scope.setItem(item.varname, item.vardefault);

					});
				};

				$scope.setItem = function(itemName, itemValue){
					//console.log(itemName);
					//console.log(itemValue);
					app.variable.setStringValue(itemName,itemValue);
				};


			}]
		};

	} );
