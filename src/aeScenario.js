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

		// 		$scope.addTooltip = function(){
		// 			var docks = ["top", ["right", "left"], "bottom", ["left", "right"], "right"];
	  // 			var tooltipTriggers = Array.prototype.slice.apply( document.querySelectorAll( ".tooltip-trigger" ) );
	  // 			tooltipTriggers.forEach( function( element, idx ) {
	  //   		var dock = docks[idx];
	  //   var tooltip;
	  //   element.addEventListener( "mouseover", function() {
	  //     var options = {
	  //       alignTo: element,
	  //       dock: dock
	  //     };
	  //     if ( idx === 4 ) {
	  //       options.content = "<span>This text is bold and italic: <b><i>1337</i></b></span>"
	  //     }
	  //     tooltip = leonardoui.tooltip( options );
	  //   } );
	  //   element.addEventListener( "mouseout", function() {
	  //     if ( tooltip ) {
	  //       tooltip.close();
	  //     }
	  //   } );
	  // } );
		// 		};



			}]
		};

	} );
