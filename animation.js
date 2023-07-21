var tl = gsap.timeline();
tl.from(".nav", {
	top: "-100%",
	duration: 1,
	// delay: 0.1,
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
		duration: 1,
		rotate: "-20deg",
		top: "-100px",
		opacity: 0,
		stagger: 0.5,
		ease: Expo.easeInOut,
	})
	.from(
		".toodle",
		{
			y: "-100%",
			duration: 1,
			delay: -1,
			opacity: 0,
			stagger: 0.2,
			ease: Expo.easeInOut,
		},
		"hii"
	)
	.from(
		".main__text >span",
		{
			y: "-100%",
			duration: 0.7,
			opacity: 0.3,
			stagger: 0.2,
			ease: Expo.easeInOut,
		},
		"hii"
	);
