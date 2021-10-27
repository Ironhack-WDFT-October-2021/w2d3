// function someCallback() {
// 	console.log('Hey there 🙂')
// }

// setTimeout(someCallback, 2000)
// const id = setTimeout(function someCallback() {
// 	console.log('Hey there 🙂')
// }, 2000)
// console.log('this runs first ⏰')
// console.log(id)
// cancel the timeout
// clearTimeout(id)

// counter
let counter = 1;
let timeoutId;
function callback() {
	console.log(counter)
	timeoutId = setTimeout(callback, 1000)
	counter++
	// stop if counter is higher than 3
	if (counter > 3) {
		clearTimeout(timeoutId)
	}
}
// callback()

// setInterval
let i = 1;
setInterval(function () {
	console.log(i)
	i++
}, 1000)