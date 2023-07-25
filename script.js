const functinality = () => {
	window.addEventListener("load", function () {
		var loader = document.querySelector(".loader");
		const main = this.document.querySelector(".main");
		const footer = document.querySelector(".footer");
		const nav = this.document.querySelector(".nav");
		main.style.display = "block";
		footer.style.display = "block";
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
		let tag = document.querySelectorAll(".tag");
		let p = document.querySelector(".nav__search__overlay > p");
		let flag = true;

		searchBar.addEventListener("click", (event) => {
			if (flag === true) {
				p.style.opacity = 1;
				searchBar.style.backgroundColor = "#383838";
				searchOverlay.style.height = "600%";
				bgScreen.style.display = "block";
				// tag.style.display = "block";
				searchOverlay.style.padding = "2rem 4rem";
				tag.forEach((ele) => {
					ele.style.display = "flex";
				});
				flag = false;
				for (let i = 0; i < children.length; i++) {
					children[i].style.display = "block";
				}
				children[children.length - 1].style.display = "flex";
			} else {
				searchBar.style.backgroundColor = "#e9e9e9";
				searchOverlay.style.height = "0";
				searchOverlay.style.padding = "0";
				p.style.opacity = 1;
				bgScreen.style.display = "none";
				// tag.style.display = "none";
				tag.forEach((ele) => {
					ele.style.display = "none";
				});
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
			tag.style.display = "none";
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
	// register functionality

	const registerFun = () => {
		const overlayScreen = document.querySelector(".reg_screen");
		const registerBtn = document.querySelector(".register");
		registerBtn.addEventListener("click", () => {
			overlayScreen.style.display = "block";
		});
		overlayScreen.addEventListener("click", (dets) => {
			let target = dets.target;
			console.log(target.id);
			if (target.id !== "not") {
				overlayScreen.style.display = "none";
			}
		});
		document.querySelector(".submit").addEventListener("click", (e) => {
			// e.preventDefault();
			localStorage.setItem("visitedBefore", true);
			overlayScreen.style.display = "none";
		});
	};
	registerFun();

	const chatbot = () => {
		const chatIcon = document.querySelector("#chatbot");
		const chatContainer = document.querySelector("#chatbotcnt");
		const close = document.querySelector(".close");
		let bool = true;
		chatIcon.addEventListener("click", (event) => {
			chatContainer.style.display = "block";
		});
		close.addEventListener("click", () => {
			chatContainer.style.display = "none";
		});
	};
	chatbot();
};

const navOpen = () => {
	const screen1 = document.querySelector("#navScreen");
	const screen2 = document.querySelector("#navanim");
	const menuIcon = document.querySelector(".hamburger");
	const menu = document.querySelector(".menu");
	const navClose = document.querySelector("#navClose");
	// navClose.style.display = "none";
	gsap.set("#navClose", { display: "none" });
	menuIcon.addEventListener("click", () => {
		menu.style.display = "none";
		gsap.to("#navScreen", {
			x: 0,
			// left: "0",
			ease: Expo.power2,
			duration: 1,
		});
		gsap.to("#navScreen", {
			width: "0%",
			left: 0,
			delay: 1,
			duration: 1,
			ease: Expo.easeInOut,
		});
		gsap.to("#navanim", {
			display: "flex",
			ease: Expo.easeInOut,
			delay: 1,
			duration: 1,
		});
		gsap.to("#navanim", {
			width: "100%",
			ease: Expo.easeInOut,
			delay: 1,
			duration: 1,
		});
		gsap.to("#navanim a", {
			display: "block",
			delay: 2,
			duration: 2,
		});
		gsap.set("#navClose", { display: "block" });
	});
	navClose.addEventListener("click", (dets) => {
		menu.style.display = "flex";
		gsap.to("#navanim", {
			width: 0,
			right: 0,
			ease: Expo.easeInOut,
			duration: 1,
		});
		gsap.to("#navScreen", {
			right: 0,
			delay: 1,
			duration: 1,
			ease: Expo.easeInOut,
		});
		gsap.to("#navScreen", {
			width: "100%",
			ease: Expo.easeInOut,
			delay: 0,
			duration: 1,
		});
		gsap.to("#navScreen", {
			x: "100%",
			// width: 0,
			ease: Expo.easeInOut,
			delay: 1,
			duration: 1,
		});
		gsap.to("#navanim", {
			display: "none",
			ease: Expo.easeInOut,
			delay: 1,
			duration: 0,
		});
		gsap.set("#navClose", { display: "none" });
		// screen2.style.display = "none";
	});
};

functinality();
navOpen();
