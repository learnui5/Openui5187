sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"sap/m/Dialog",
		"sap/m/DialogType",
		"sap/m/Button",
		"sap/m/ButtonType",
		"sap/m/List",
		"sap/m/StandardListItem",
		"sap/m/Text"
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, Dialog, DialogType, Button, ButtonType, List, StandardListItem, Text) {
		"use strict";

		return Controller.extend("com.learnui5.openui5187.openui5187.controller.View1", {
			onInit: function () {
				// create model
				var oModel = new JSONModel();
				oModel.setData({
					startDate: new Date("2020", "0", "15", "8", "0"),
					people: [{
							pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
							name: "John Miller",
							role: "team member",
							appointments: [{
									start: new Date("2020", "0", "8", "08", "30"),
									end: new Date("2020", "0", "8", "09", "30"),
									title: "Meet Max Mustermann",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "11", "10", "0"),
									end: new Date("2020", "0", "11", "12", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "12", "11", "30"),
									end: new Date("2020", "0", "12", "13", "30"),
									title: "Lunch",
									info: "canteen",
									type: "Type03",
									tentative: true
								},
								{
									start: new Date("2020", "0", "15", "08", "30"),
									end: new Date("2020", "0", "15", "09", "30"),
									title: "Meet Max Mustermann",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "15", "10", "0"),
									end: new Date("2020", "0", "15", "12", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "15", "11", "30"),
									end: new Date("2020", "0", "15", "13", "30"),
									title: "Lunch",
									info: "canteen",
									type: "Type03",
									tentative: true
								},
								{
									start: new Date("2020", "0", "15", "13", "30"),
									end: new Date("2020", "0", "15", "17", "30"),
									title: "Discussion with clients",
									info: "online meeting",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "16", "04", "00"),
									end: new Date("2020", "0", "16", "22", "30"),
									title: "Discussion of the plan",
									info: "Online meeting",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2020", "0", "18", "08", "30"),
									end: new Date("2020", "0", "18", "09", "30"),
									title: "Meeting with the manager",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "18", "11", "30"),
									end: new Date("2020", "0", "18", "13", "30"),
									title: "Lunch",
									info: "canteen",
									type: "Type03",
									tentative: true
								},
								{
									start: new Date("2020", "0", "18", "1", "0"),
									end: new Date("2020", "0", "18", "22", "0"),
									title: "Team meeting",
									info: "regular",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "21", "00", "30"),
									end: new Date("2020", "0", "21", "23", "30"),
									title: "New Product",
									info: "room 105",
									type: "Type03",
									tentative: true
								},
								{
									start: new Date("2020", "0", "25", "11", "30"),
									end: new Date("2020", "0", "25", "13", "30"),
									title: "Lunch",
									type: "Type03",
									tentative: true
								},
								{
									start: new Date("2020", "0", "29", "10", "0"),
									end: new Date("2020", "0", "29", "12", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "30", "08", "30"),
									end: new Date("2020", "0", "30", "09", "30"),
									title: "Meet Max Mustermann",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "30", "10", "0"),
									end: new Date("2020", "0", "30", "12", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "30", "11", "30"),
									end: new Date("2020", "0", "30", "13", "30"),
									title: "Lunch",
									type: "Type03",
									tentative: true
								},
								{
									start: new Date("2020", "0", "30", "13", "30"),
									end: new Date("2020", "0", "30", "17", "30"),
									title: "Discussion with clients",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "31", "10", "00"),
									end: new Date("2020", "0", "31", "11", "30"),
									title: "Discussion of the plan",
									info: "Online meeting",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2020", "1", "3", "08", "30"),
									end: new Date("2020", "1", "13", "09", "30"),
									title: "Meeting with the manager",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "1", "4", "10", "0"),
									end: new Date("2020", "1", "4", "12", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "2", "30", "10", "0"),
									end: new Date("2020", "4", "33", "12", "0"),
									title: "Working out of the building",
									type: "Type07",
									pic: "sap-icon://sap-ui5",
									tentative: false
								}
							],
							headers: [{
									start: new Date("2020", "0", "15", "8", "0"),
									end: new Date("2020", "0", "15", "10", "0"),
									title: "Reminder",
									type: "Type06"
								},
								{
									start: new Date("2020", "0", "15", "17", "0"),
									end: new Date("2020", "0", "15", "19", "0"),
									title: "Reminder",
									type: "Type06"
								},
								{
									start: new Date("2020", "8", "1", "0", "0"),
									end: new Date("2020", "10", "30", "23", "59"),
									title: "New quarter",
									type: "Type10",
									tentative: false
								},
								{
									start: new Date("2018", "1", "1", "0", "0"),
									end: new Date("2018", "3", "30", "23", "59"),
									title: "New quarter",
									type: "Type10",
									tentative: false
								}
							]
						},
						{
							pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
							name: "Donna Moore",
							role: "team member",
							appointments: [{
									start: new Date("2020", "0", "10", "18", "00"),
									end: new Date("2020", "0", "10", "19", "10"),
									title: "Discussion of the plan",
									info: "Online meeting",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2020", "0", "9", "10", "0"),
									end: new Date("2020", "0", "13", "12", "0"),
									title: "Workshop out of the country",
									type: "Type07",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "15", "08", "00"),
									end: new Date("2020", "0", "15", "09", "30"),
									title: "Discussion of the plan",
									info: "Online meeting",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2020", "0", "15", "10", "0"),
									end: new Date("2020", "0", "15", "12", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "15", "18", "00"),
									end: new Date("2020", "0", "15", "19", "10"),
									title: "Discussion of the plan",
									info: "Online meeting",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2020", "0", "16", "10", "0"),
									end: new Date("2020", "0", "31", "12", "0"),
									title: "Workshop out of the country",
									type: "Type07",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2018", "0", "1", "0", "0"),
									end: new Date("2018", "2", "31", "23", "59"),
									title: "New quarter",
									type: "Type10",
									tentative: false
								},
								{
									start: new Date("2020", "01", "11", "10", "0"),
									end: new Date("2020", "02", "20", "12", "0"),
									title: "Team collaboration",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "3", "01", "10", "0"),
									end: new Date("2020", "3", "31", "12", "0"),
									title: "Workshop out of the country",
									type: "Type07",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "4", "01", "10", "0"),
									end: new Date("2020", "4", "31", "12", "0"),
									title: "Out of the office",
									type: "Type08",
									tentative: false
								},
								{
									start: new Date("2020", "7", "1", "0", "0"),
									end: new Date("2020", "7", "31", "23", "59"),
									title: "Vacation",
									info: "out of office",
									type: "Type04",
									tentative: false
								}
							],
							headers: [{
									start: new Date("2020", "0", "15", "9", "0"),
									end: new Date("2020", "0", "15", "10", "0"),
									title: "Payment reminder",
									type: "Type06"
								},
								{
									start: new Date("2020", "0", "15", "16", "30"),
									end: new Date("2020", "0", "15", "18", "00"),
									title: "Private appointment",
									type: "Type06"
								}
							]
						},
						{
							pic: "sap-icon://employee",
							name: "Max Mustermann",
							role: "team member",
							appointments: [{
									start: new Date("2020", "0", "15", "08", "30"),
									end: new Date("2020", "0", "15", "09", "30"),
									title: "Meet John Miller",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "15", "10", "0"),
									end: new Date("2020", "0", "15", "12", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "15", "13", "00"),
									end: new Date("2020", "0", "15", "16", "00"),
									title: "Discussion with clients",
									info: "online",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "16", "0", "0"),
									end: new Date("2020", "0", "16", "23", "59"),
									title: "Vacation",
									info: "out of office",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2020", "0", "17", "1", "0"),
									end: new Date("2020", "0", "18", "22", "0"),
									title: "Workshop",
									info: "regular",
									type: "Type07",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "19", "08", "30"),
									end: new Date("2020", "0", "19", "18", "30"),
									title: "Meet John Doe",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "19", "10", "0"),
									end: new Date("2020", "0", "19", "16", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2020", "0", "19", "07", "00"),
									end: new Date("2020", "0", "19", "17", "30"),
									title: "Discussion with clients",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "0", "20", "0", "0"),
									end: new Date("2020", "0", "20", "23", "59"),
									title: "Vacation",
									info: "out of office",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2020", "0", "22", "07", "00"),
									end: new Date("2020", "0", "27", "17", "30"),
									title: "Discussion with clients",
									info: "out of office",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2020", "2", "13", "9", "0"),
									end: new Date("2020", "2", "17", "10", "0"),
									title: "Payment week",
									type: "Type06"
								},
								{
									start: new Date("2020", "03", "10", "0", "0"),
									end: new Date("2020", "05", "16", "23", "59"),
									title: "Vacation",
									info: "out of office",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2020", "07", "1", "0", "0"),
									end: new Date("2020", "09", "31", "23", "59"),
									title: "New quarter",
									type: "Type10",
									tentative: false
								}
							],
							headers: [{
								start: new Date("2020", "0", "16", "0", "0"),
								end: new Date("2020", "0", "16", "23", "59"),
								title: "Private",
								type: "Type05"
							}],

						}
					],
					ProductCollection: [{
							Name: "Product 1",
							Quantity: 100
						},
						{
							Name: "Product 2",
							Quantity: 200
						},
						{
							Name: "Product 3",
							Quantity: 300
						}
					],
					GridData:{
						"items1": [
							{
								"title": "Item 1",
								"subtitle": "Subtitle 1",
								"counter": 5,
								"type": "Active"
							},
							{
								"title": "Item 2",
								"subtitle": "Subtitle 2",
								"counter": 15,
								"type": "Active"
							},
							{
								"title": "Item 3",
								"subtitle": "Subtitle 3",
								"counter": 15734
							},
							{
								"title": "Item 4",
								"subtitle": "Subtitle 4",
								"counter": 2
							}
						],
						"items2": [
							{
								"title": "Item 1",
								"subtitle": "Subtitle 5",
								"counter": 1
							},
							{
								"title": "Item 2",
								"subtitle": "Subtitle 6",
								"counter": 5,
								"type": "Active"
							},
							{
								"title": "Item 3",
								"subtitle": "This is a long subtitle 7",
								"counter": 5,
								"type": "DetailAndActive"
							},
							{
								"title": "Item 4",
								"subtitle": "Subtitle 8",
								"counter": 0,
								"type": "Navigation"
							}
						],
						"items3": [
							{
								"title": "Item 1",
								"subtitle": "Subtitle 9"
							},
							{
								"title": "Item 2",
								"subtitle": "Subtitle 10",
								"type": "Active"
							},
							{
								"title": "Item 3",
								"subtitle": "Subtitle 11",
								"type": "Active"
							},
							{
								"title": "Item 4",
								"subtitle": "Subtitle 12"
							},
							{
								"title": "Item 5",
								"subtitle": "Subtitle 13",
								"counter": 5,
								"type": "Navigation"
							}
						],
						"items4": [
							{
								"title": "Item 1",
								"subtitle": "Subtitle 18"
							},
							{
								"title": "Item 2",
								"subtitle": "This is a long subtitle 19"
							},
							{
								"title": "Item 3",
								"subtitle": "Subtitle 20",
								"counter": 1,
								"type": "Inactive"
							},
							{
								"title": "Item 4",
								"subtitle": "Subtitle 21",
								"type": "Navigation"
							},
							{
								"title": "Item 5",
								"subtitle": "Subtitle 22",
								"counter": 5
							}
						]
					}
				});
				this.getView().setModel(oModel);
			},
			handleGetEndDate: function (oEvent) {
				var oCalendar = this.getView().byId("PC1");
				sap.m.MessageToast.show(oCalendar.getEndDate());
			},

			handleGetVisibleIntervalsCount: function (oEvent) {
				var oCalendar = this.getView().byId("PC1");
				sap.m.MessageToast.show(oCalendar.getVisibleIntervalsCount());
			},
			handleOpenDialog: function (oEvent) {
				if (!this.oResizableDialog) {
					this.oResizableDialog = new Dialog({
						title: "Resizable Available Products",
						contentWidth: "550px",
						contentHeight: "300px",
						resizable: true,
						draggable: true,
						content: new List({
							items: {
								path: "/ProductCollection",
								template: new StandardListItem({
									title: "{Name}",
									counter: "{Quantity}"
								})
							}
						}),
						endButton: new Button({
							text: "Close",
							press: function () {
								this.oResizableDialog.close();
							}.bind(this)
						})
					});

					//to get access to the controller's model
					this.getView().addDependent(this.oResizableDialog);
				}

				this.oResizableDialog.open();
			},
			handleViewAnimation:function(oEvent){
				var oButton = this.getView().byId("BadgedButton");
				var oCustomData = oButton.getCustomData()[0];
				var iNewValue = parseInt(oCustomData.getValue(),0) + 10;
				oCustomData.setValue(iNewValue.toString());
			},
			onBorderReached: function (oEvent) {
				MessageToast.show("Reached border of " + oEvent.getSource().getHeaderText());
	
				var oNextGrid = this._findNextGrid(oEvent),
					iRow = oEvent.getParameter("row"),
					iColumn = oEvent.getParameter("column"),
					sDirection = oEvent.getParameter("direction");
	
				if (oNextGrid) {
					oNextGrid.focusItemByDirection(sDirection, iRow, iColumn);
				}
			},onSliderMoved: function (oEvent) {
				this.byId("container").setWidth(oEvent.getParameter("value") + "%");
			},
	
			_findNextGrid: function (oEvent) {
				var oOriginalEvent = oEvent.getParameter("event"),
					oCurrentlyFocusedItemRect = oOriginalEvent.target.getBoundingClientRect(),
					oCurrentGrid = oEvent.getSource(),
					aGrids = this._getAllGrids(),
					sKeyCode = oOriginalEvent.keyCode,
					oGrid,
					oGridRect,
					i;
	
				for (i = 0; i < aGrids.length; i++) {
					oGrid = aGrids[i];
	
					if (oGrid === oCurrentGrid) {
						continue;
					}
	
					oGridRect = oGrid.getDomRef().getBoundingClientRect();
	
					switch (sKeyCode) {
						case KeyCodes.ARROW_RIGHT:
							if (oCurrentlyFocusedItemRect.right < oGridRect.left &&
								oCurrentlyFocusedItemRect.bottom > oGridRect.top &&
								oCurrentlyFocusedItemRect.top < oGridRect.bottom) {
								return oGrid;
							}
							break;
						case KeyCodes.ARROW_LEFT:
							if (oCurrentlyFocusedItemRect.left > oGridRect.right &&
								oCurrentlyFocusedItemRect.bottom > oGridRect.top &&
								oCurrentlyFocusedItemRect.top < oGridRect.bottom) {
								return oGrid;
							}
							break;
						case KeyCodes.ARROW_DOWN:
							if (oCurrentlyFocusedItemRect.bottom < oGridRect.top &&
								oCurrentlyFocusedItemRect.left < oGridRect.right &&
								oCurrentlyFocusedItemRect.right > oGridRect.left) {
								return oGrid;
							}
							break;
						case KeyCodes.ARROW_UP:
							if (oCurrentlyFocusedItemRect.top > oGridRect.bottom &&
								oCurrentlyFocusedItemRect.left < oGridRect.right &&
								oCurrentlyFocusedItemRect.right > oGridRect.left) {
								return oGrid;
							}
							break;
					}
				}
			}
		});
	});