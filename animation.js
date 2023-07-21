var tl = gsap.timeline();
tl.from(".nav", {
	top: "-100%",
	duration: 1,
	delay: 0.1,
	ease: Expo.easeInOut,
});
tl.from(".main__heading p", {
	y: "-100%",
	duration: 1,
	rotate: "-10deg",
	transformOrigin: "left center",
	opacity: 0,
	ease: Expo.easeInOut,
})
	.from(".main__heading h1 span", {
		y: "-100%",
		duration: 1,
		opacity: 0,
		stagger: 0.2,
		ease: Expo.easeInOut,
	})
	.from(".main__text span", {
		y: "-100%",
		x: "-50%",
		duration: 1,
		opacity: 0,
		stagger: 0.2,
		ease: Expo.easeInOut,
	})
	.from(".toodle", {
		y: "-100%",
		duration: 1,
		delay: -1,
		opacity: 0,
		stagger: 0.2,
		ease: Expo.easeInOut,
	});
