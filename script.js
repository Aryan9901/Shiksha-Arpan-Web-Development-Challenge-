window.addEventListener("load", function () {
	var loader = document.querySelector(".loader");
	const main = this.document.querySelector(".main");
	const nav = this.document.querySelector(".nav");
	main.style.display = "block";
	nav.style.display = "flex";
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
	const bgScreen = document.querySelector(".bg_black");
	let children = searchOverlay.children;
	let flag = true;

	searchBar.addEventListener("click", (event) => {
		if (flag === true) {
			searchBar.style.backgroundColor = "#383838";
			searchOverlay.style.height = "600%";
			bgScreen.style.display = "block";
			searchOverlay.style.padding = "2rem 4rem";
			flag = false;
			for (let i = 0; i < children.length; i++) {
				children[i].style.display = "block";
			}
			children[children.length - 1].style.display = "flex";
		} else {
			searchBar.style.backgroundColor = "#e9e9e9";
			searchOverlay.style.height = "0";
			searchOverlay.style.padding = "0";
			bgScreen.style.display = "none";
			flag = true;
			for (let i = 0; i < children.length; i++) {
				children[i].style.display = "none";
			}
		}
	});
	bgScreen.addEventListener("click", () => {
		searchBar.style.backgroundColor = "#e9e9e9";
		searchOverlay.style.height = "0";
		bgScreen.style.display = "none";
		flag = true;
		for (let i = 0; i < children.length; i++) {
			children[i].style.display = "none";
		}
		searchOverlay.style.padding = "0";
	});
};
searchBarOpen();

// clutter text animation

const txtanim = () => {
	let clutter = "";
	document
		.querySelector(".main__text")
		.textContent.split(" ")
		.forEach((dets) => {
			if (dets.trim() === "") {
			} else {
				clutter += `<span>${dets.trim()}</span> `;
			}
		});
	document.querySelector(".main__text").innerHTML = clutter.trim();
};
txtanim();
