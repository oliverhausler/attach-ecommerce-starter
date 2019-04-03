function nextPage() {
	magazine.nextPage()
	router.navigate(toKebabCase(magazine.getPageData().photo.name))
}

function previousPage() {
	magazine.previousPage()
	router.navigate(toKebabCase(magazine.getPageData().photo.name))
}

function onKeyUp(e) {
	if (e.which === 39) {
		nextPage()
	}
	if (e.which === 37) {
		previousPage()
	}
}

function setUpNavigationListeners() {
	document
		.querySelector('#previousButton')
		.addEventListener('click', previousPage)
	document.querySelector('#nextButton').addEventListener('click', nextPage)
	document.addEventListener('keyup', onKeyUp)
}
