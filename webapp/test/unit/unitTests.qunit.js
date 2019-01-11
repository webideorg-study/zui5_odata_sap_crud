/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test/zui5_odata_sap_crud/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});