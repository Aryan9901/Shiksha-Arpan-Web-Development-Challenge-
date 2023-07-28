const load = () => {
	window.addEventListener("load", function () {
		var loader = document.querySelector(".loader");

		loader.style.display = "none";
	});
};
load();
const selectCategory = () => {
	const item = document.querySelectorAll(".item");
	item.forEach((ele) => {
		ele.addEventListener("click", (dets) => {
			item.forEach((el) => el.classList.remove("active"));
			ele.classList.add("active");
		});
	});
};
selectCategory();

const openSideNav = () => {
	const menuIcon = document.querySelector("#doubt__menu");
	const sideNav = document.querySelector(".sideNav");
	const h1 = document.querySelector(".sideNav h1");
	const search = document.querySelector(".search");
	const rows = document.querySelectorAll(".row");
	const button = document.querySelector(".sideNav button");
	var flag = true;
	menuIcon.addEventListener("click", () => {
		if (flag === true) {
			menuIcon.style.left = "19%";
			menuIcon.style.top = "5%";
			menuIcon.style.padding = "0";
			menuIcon.style.backgroundColor = "transparent";
			sideNav.style.width = "26%";
			h1.style.display = "block";
			search.style.display = "flex";
			rows.forEach((elem) => {
				elem.style.display = "flex";
			});
			button.style.display = "initial";
			flag = false;
		} else {
			menuIcon.style.left = "0%";
			menuIcon.style.top = "0%";
			menuIcon.style.padding = "3rem";
			menuIcon.style.backgroundColor = "#ff384975";
			sideNav.style.width = "0%";
			h1.style.display = "none";
			search.style.display = "none";
			rows.forEach((elem) => {
				elem.style.display = "none";
			});
			button.style.display = "none";
			flag = true;
		}
	});
};
openSideNav();
