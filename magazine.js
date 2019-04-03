var magazine = {
	currentPage: -1,
	nextPage: function() {
		this.currentPage = (this.currentPage + 1) % pages.length
	},
	previousPage: function() {
		if (this.currentPage) {
			this.currentPage--
		} else {
			this.currentPage = pages.length - 1
		}
	},
	getPageNumber: function(hash) {
		var page = -1
		pages.forEach(function(pageInfo, i) {
			if (toKebabCase(pageInfo.photo.name) === hash) {
				page = i
			}
		})
		return page
	},
	getPageData: function() {
		return pages[this.currentPage]
	},
}
