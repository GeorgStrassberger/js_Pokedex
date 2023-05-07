"use strict";
const selectField = document.getElementById("sort-select");
selectField.addEventListener("change", (e) => {
	console.log("onConsole", e);
	console.log("onConsole", e.target.value);
	if (e.target.value === "name") {
		sortByName();
	}
	if (e.target.value === "id") {
		sortById();
	}
});

function onSubmit(e) {
	console.log("submit", e);
}
function onConsole() {
	console.log("onConsole");
}

function dynamicSort(property) {
	var sortOrder = 1;
	if (property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a, b) {
		/* next line works with strings and numbers,
		 * and you may want to customize it to your needs
		 */
		var result =
			a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
		return result * sortOrder;
	};
}

function sortByName() {
	myPokemonArray.sort(dynamicSort("name"));
	renderContent();
}

function sortById() {
	myPokemonArray.sort(dynamicSort("id"));
	renderContent();
}
