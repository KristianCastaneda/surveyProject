'use strict';

// Configuring the Articles module
angular.module('responses').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Take Survey', 'responses', 'dropdown', '/responses(/create)?');
		Menus.addSubMenuItem('topbar', 'responses', 'List Surveys', 'responses');
	}
]);