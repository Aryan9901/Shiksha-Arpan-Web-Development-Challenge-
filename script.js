window.addEventListener("load", function () {
	var loader = document.querySelector(".loader");
	loader.style.display = "none";
});
// above code is for loader off
const registerFunc = () => {
	// Get the register button and login button elements
	const registerButton = document.querySelector(".register");
	const loginButton = document.querySelector(".login");

	// Check if the user has visited before and hide/show buttons accordingly
	const hasVisitedBefore = localStorage.getItem("visitedBefore");
	if (hasVisitedBefore) {
		registerButton.style.display = "none";
		loginButton.style.display = "block";
	} else {
		registerButton.style.display = "block";
		loginButton.style.display = "none";
	}

	// Add an event listener for the register button
	registerButton.addEventListener("click", function () {
		// Hide the register button and show the login button
		registerButton.style.display = "none";
		loginButton.style.display = "block";

		// Save the information to indicate that the user has visited before
		localStorage.setItem("visitedBefore", true);
	});
};
registerFunc();
// below code is for search bar functionality
const searchBarOpen = () => {
	const searchBar = document.querySelector(".nav__search");
	const searchOverlay = document.querySelector(".nav__search__overlay");
	let flag = true;
	searchBar.addEventListener("click", (event) => {
		if (flag === true) {
			searchBar.style.backgroundColor = "#383838";
			searchOverlay.style.height = "600%";
			flag = false;
		} else {
			searchBar.style.backgroundColor = "#e9e9e9";
			searchOverlay.style.height = "0";
			flag = true;
		}
	});
};
searchBarOpen();
