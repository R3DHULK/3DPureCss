const b = document.body;
const h = document.querySelector("#h");
const unit = 3;
const button = document.querySelector("#button");

/*****************/
const mouseDownFunc = () => b.addEventListener("mousemove", moveFunc);
const mouseUpFunc = () => b.removeEventListener("mousemove", moveFunc);
const moveFunc = (e) => {
	let x = e.pageX / window.innerWidth - 0.5;
	let y = e.pageY / window.innerHeight - 0.5;

	h.style.transform = `
        perspective(${400 * unit}vmin)
        rotateX(${y * 30 + 70}deg)
        rotateZ(${-x * 720 + 40}deg)
        translateZ(${-7 * unit}vmin)
    `;
};

const animationFunc = () => h.classList.toggle("is-button-active");
/*****************/
h.addEventListener("mousedown", mouseDownFunc);
b.addEventListener("mouseup", mouseUpFunc);

if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	button.addEventListener("click", animationFunc);
	button.classList.remove("is-button-hidden");
} else {
	button.removeEventListener("click", animationFunc);
	button.classList.add("is-button-hidden");
}