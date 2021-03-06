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
			controller: ['$scope','luiTooltip', function ( $scope, tooltip ) {

				var app = qlik.currApp(this);

				console.log(tooltip);

				$scope.userval = {};

				$scope.resetButton = function(){
					$scope.layout.varlist.forEach(function(item){
						//console.log("Reset");
						//console.log(item);
						$scope.setItem(item, item.vardefault);

					});
				};

				$scope.setItem = function(item, itemValue){
					//console.log(itemName);
					//console.log(itemValue);
					if(itemValue != item.vardefault){
						//Store User value
						$scope.userval[item.varname] = itemValue;
					}
					app.variable.setStringValue(item.varname,itemValue);
				};

				$scope.testEquals = function(left,right){
					if(left == right) return false;
					if (typeof right == 'undefined') return false;
					if (typeof left == 'undefined') return false;
					return true;
				};

				$scope.showTooltip = function(e){
					console.log(e);
					tooltip.show( {
		        alignTo: e.currentTarget,
		        dock: "right"
		      } );
				};

		//  		$scope.addTooltip = function(){
		// 			var docks = ["top", ["right", "left"], "bottom", ["left", "right"], "right"];
	  // 			var tooltipTriggers = Array.prototype.slice.apply( document.querySelectorAll( ".tooltip-trigger" ) );
	  // 			tooltipTriggers.forEach( function( element, idx ) {
	  //   		var dock = docks[idx];
	  //   var ttip;
	  //   element.addEventListener( "mouseover", function() {
	  //     var options = {
	  //       alignTo: element,
	  //       dock: dock
	  //     };
	  //     if ( idx === 4 ) {
	  //       options.content = "<span>This text is bold and italic: <b><i>1337</i></b></span>"
	  //     }
	  //     ttip = tooltip.show( options );
	  //   } );
	  //   element.addEventListener( "mouseout", function() {
	  //     if ( ttip ) {
	  //       //tooltip.close();
	  //     }
	  //   } );
	  // } );
		//  		};



			}]
		};

	} );
