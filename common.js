function toKebabCase(value) {
	return value.toLowerCase().replace(/ /g, '-')
}

function render(pageData) {
	var leftSide = document.querySelector('#left-side')
	var price = document.querySelector('#price')
	var credits = document.querySelector('#credits')
	leftSide.style.backgroundImage = 'url("' + pageData.url + '")'
	price.innerText = pageData.price.toFixed(2)
	credits.innerText = pageData.credits
}
