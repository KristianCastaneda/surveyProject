'use strict';

// Configuring the Articles module
angular.module('surveys').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'My Surveys', 'surveys', 'dropdown', '/surveys(/create)?');
		Menus.addSubMenuItem('topbar', 'surveys', 'My List Surveys', 'surveys');
		Menus.addSubMenuItem('topbar', 'surveys', 'My New Survey', 'surveys/create');
	}
]);