const b = document.body;
const h = document.querySelector("#h");
const a = document.querySelector("#a");
const block = document.querySelector("#block");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const unit = 1.75;
/*****************/
const mouseDownFunc = () => b.addEventListener("mousemove", moveFunc);
const mouseUpFunc = () => b.removeEventListener("mousemove", moveFunc);
const moveFunc = (e) => {
	let x = e.pageX / window.innerWidth - 0.5;
	let y = e.pageY / window.innerHeight - 0.5;

	h.style.transform = `
        perspective(${400 * unit}vmin)
        rotateX(${y * 30 + 66}deg)
        rotateZ(${-x * 420 + 40}deg)
        translateZ(${-14 * unit}vmin)
    `;
};
const playFunc = () => {
	s1.classList.toggle("is-screen-hidden");
	s2.classList.toggle("is-screen-hidden");
	h.classList.toggle("is-main-active");

	a.loop = true;
	if (a.paused) {
		a.play();
	} else {
		a.pause();
		a.currentTime = 0;
	}
};
/*****************/
h.addEventListener("mousedown", mouseDownFunc);
b.addEventListener("mouseup", mouseUpFunc);
block.addEventListener("click", playFunc);