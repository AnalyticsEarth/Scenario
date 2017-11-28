// JavaScript
define( ["qlik"], function (qlik2) {
	'use strict';

	// Appearance section
	var appearanceSection = {
		uses: "settings",
		items: {
			general: {
				items:{
					showTitles:{
						defaultValue: false
					}
				}
			},
			variableoptions: {
				type:"items",
				label:"Display Settings",
				items:{
					buttontitle: {
						ref:"buttontitle",
						label:"Button Title",
						type: "string"
					},
					showvariables: {
						ref:"showvariables",
						label:"Show Variable Inputs",
						type: "boolean"
					}
				}
			}

		}
	};


	var variableArray = {
		type:"array",
		ref:"varlist",
		label:"Variables List",
		itemTitleRef:"varname",
		allowAdd:true,
		allowRemove: true,
		addTranslation:"Add Variable",
		items: {
			varname: {
				ref: "varname",
				label: "Variable Name",
				type: "string",
				component: "dropdown",
				change: function(data) {
        	//console.log(data);
					data.varvalue = data.varvalue || {};
          data.varvalue.qStringExpression = '=' + data.varname;
        },
				options: function() {
					return qlik2.currApp(this).getList("VariableList", null).then(function(reply){
						return reply.layout.qVariableList.qItems.map(function(item){
							return {
								label:item.qName,
								value:item.qName
							};
						});
					});
				}
			},
			varlab:{
				ref: "varlabel",
				label: "Variable Label",
				type: "string"
			},
			vardef:{
				ref: "vardefault",
				label: "Variable Default",
				type: "string",
				expression: "optional"
			}
		}
	};


	// *****************************************************************************
	// Main properties panel definition
	// Only what is defined here is returned from properties.js
	// *****************************************************************************
	return {
		type: "items",
		component: "accordion",
		items: {
			appearance: appearanceSection,
			variables: variableArray
		}
	};
});
