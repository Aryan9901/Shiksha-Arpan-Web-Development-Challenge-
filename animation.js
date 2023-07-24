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
// image pineed scroll timeline
// gsap.to(".courses__details", {
// 	gap: "1rem",
// 	stagger: 4,
// 	duration: 4,
// 	delay: 2,
// 	ease: Expo.easeInOut,
// 	scrollTrigger: {
// 		trigger: ".courses__details",
// 		scroller: "body",
// 		start: "top 0%",
// 		end: "bottom top",
// 		// scrollerStart: "top bottom",
// 		markers: true,
// 		scrub: 2,
// 	},
// });

gsap.utils.toArray(".courses__details").forEach((element) => {
	gsap.to(element, {
		gap: "3rem",
		duration: 4,
		delay: 1,
		ease: "expo.inOut",
		scrollTrigger: {
			trigger: element,
			scroller: "body",
			start: "top center", // Adjust the start and end values to control when the animation starts and ends
			end: "+=30", // Adjust the start and end values to control when the animation starts and ends
			// scrollerStart: "top bottom",
			// markers: true,
			scrub: 2,
		},
	});
});

// image scroll

// gsap.to(".courses__img", {
// 	scrollTrigger: {
// 		trigger: ".courses__img top",
// 		scroller: ".courses__img",
// 		start: "top top",
// 		end: "bottom bottom",
// 		scrollerStart: "top center",
// 		pin: true,
// 		markers: true,
// 	},
// });

var g = gsap.timeline({
	scrollTrigger: {
		trigger: ".courses__container",
		scroller: "body",
		start: "top -110%",
		end: "top -680%",
		// scrollerStart: "top center",
		// markers: true,
		scrub: 2,
	},
});
g.to("body", {
	duration: 4,
	backgroundColor: "#C8E8FC",
	ease: Expo.power2,
})
	.to("body", {
		duration: 5,
		backgroundColor: "#ff919191",
		ease: Expo.power2,
	})
	.to("body", {
		duration: 2,
		backgroundColor: "#fcfffc",
		ease: Expo.power2,
	})
	.to("body", {
		duration: 2,
		backgroundColor: "#c8e8fc",
		ease: Expo.power2,
	})
	.to("body", {
		duration: 6,
		backgroundColor: "#666",
		ease: Expo.power2,
	})
	.to("body", {
		duration: 2,
		backgroundColor: "#fff",
		ease: Expo.power2,
	});
