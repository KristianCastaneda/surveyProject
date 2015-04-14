'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Survey Reports', 'articles', 'dropdown', '/articles');
		Menus.addSubMenuItem('topbar', 'articles', 'List Taken Surveys', 'articles');

	}
]);