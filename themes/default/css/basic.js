module.exports = function(api) {
	api.add({
		'.content': {
			maw: '850px',
			mar: '40px auto',
			'.row': {
				'-wm-bxz': 'bb',
				'&:after': {
					cl: 'b'
				},
				'.col-main': {
					'-wm-bxz': 'bb',
					wid: '70%',
					fl: 'l'
				},
				'.col-sidebar': {
					'-wm-bxz': 'bb',
					wid: '30%',
					fl: 'l'
				},
				'@media all and (max-width: 600px)': {
					'& .col-main, & .col-sidebar': {
						fl: 'n',
						wid: '100%'
					}
				}
			}
		}
	});
}