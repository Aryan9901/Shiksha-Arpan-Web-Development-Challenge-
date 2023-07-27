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
