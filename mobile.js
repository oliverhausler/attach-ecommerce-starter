var mobileDetect = new MobileDetect(
	navigator.userAgent || navigator.vendor || window.opera
)
var isMobile = mobileDetect.mobile()

if (isMobile) {
	var body = document.querySelector('body')
	body.classList.add('mobile')
	if (
		mobileDetect
			.os()
			.toLowerCase()
			.indexOf('android') >= 0
	) {
		body.classList.add('android')
	}
	if (
		mobileDetect
			.os()
			.toLowerCase()
			.indexOf('ios') >= 0
	) {
		body.classList.add('ios')
	}
}
