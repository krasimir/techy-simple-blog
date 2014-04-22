module.exports = function(api) {
	api.add({
		body: {
			pad: '120px 0 0 0',
			bg: 'url(./bg.jpg) no-repeat'
		},
		header: {
			p: {
				mar: 0,
				pad: 0,
				fz: '16px',
				color: '#999'
			},
			'@media all and (max-width: 600px)': {
				pad: '0 20px 0 20px'
			}
		},
		footer: {
			mar: '40px 0 40px 0',
			bdt: 'dotted 1px #999',
			ta: 'c',
			a: {
				d: 'ib',
				mar: '0 14px 0 0'
			},
			'@media all and (max-width: 600px)': {
				pad: '0 20px 0 20px'
			}
		},
		'.content': {
			bg: '#FFF',
			maw: '960px',
			mar: '0 auto',
			pad: '30px 60px',
			'.row': {
				'-wm-bxz': 'bb',
				'&:after': {
					content: '" "',
					d: 'b',
					cl: 'b'
				},
				'.col-main': {
					'-wm-bxz': 'bb',
					wid: '65%',
					fl: 'l',
					h2: {
						mar: '30px 0 10px 0'
					}
				},
				'.col-sidebar': {
					'-wm-bxz': 'bb',
					wid: '35%',
					fl: 'l',
					pad: '0 0 0 30px',
					p: {
						mar: 0,
						fz: '14px',
					},
					small: {
						color: '#929292'
					},
					a: {
						d: 'b',
						bdb: 'n'
					}
				},
				'@media all and (max-width: 600px)': {
					'& .col-main, & .col-sidebar': {
						fl: 'n',
						wid: '100%',
						pad: '0 20px 0 20px'
					}
				}
			}
		}
	});
}