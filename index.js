var landingPage = document.querySelector('#landing')
var magazinePage = document.querySelector('#pages')

var router = new Navigo('http://127.0.0.1:8080', false)

router
	.on(':name', function(params) {
		hide(landingPage)
		show(magazinePage)
		setUpNavigationListeners()

		var pageNumber = magazine.getPageNumber(params.name)
		if (pageNumber === -1) {
			return router.navigate('/')
		}
		magazine.currentPage = pageNumber

		render(magazine.getPageData().photo)

		//Update attach properties
		attachSdk.setProperties(magazine.getPageData().properties)
	})
	.on('*', function() {
		const pathPhoto = window.location.pathname.split('/')[2]
		if (pathPhoto) {
			return router.navigate(pathPhoto)
		}

		hide(magazinePage)
		show(landingPage)

		document.querySelector('#landing .left-side').style.backgroundImage =
			'url("' + pages[0].photo.url + '")'
		document.querySelector('#start').addEventListener('click', nextPage)
	})
	.resolve()
