	var busylight = require('busylight').get()
	const find = require('find-process');
	var InfiniteLoop = require('infinite-loop');
	var il = new InfiniteLoop;

function checks(){

	 find('name', 'obs', true)
                .then(function (list) {
                        if (!list.length) {
                               // console.log('obs not open');
	find('name', 'zoom', true)
		.then(function (list) {
			if (!list.length) {
				//console.log('zoom not open');
	find('name', 'teams', true)
		.then(function (list) {
			if(!list.length) {
				//console.log('teams not open');
	find('name', 'Discord', true)
		.then(function (list) {
			if(!list.length) {
				//console.log('discord not open');
	find('name', 'chrome', true)
		.then(function (list) {
			if(!list.length) {
				//console.log('chrome not open');
	find('name', 'soffice.bin', true)
                .then(function (list) {
                        if(!list.length) {
                                //console.log('LibreOffice not open');
	find('name', 'nano', true)
                .then(function (list) {
                        if(!list.length) {
                                //console.log('nano not open');
				//console.log('free');
				busylight.light('green')
                        } else {
                                //console.log('DND');
                                busylight.light('blue')
                        }
                })

                        } else {
                                //console.log('DND');
                                busylight.light('blue')
                        }
                })

			} else {
				//console.log('DND');
				busylight.light('blue')
			}
		})
			} else {
				//console.log('busy');
				busylight.light('red')
			}
		})

			} else {
				//console.log('busy');
				busylight.light('red')
			}
		})

			} else {
				//console.log('busy');
				busylight.light('red')
			}
		})
			} else {
                                //console.log('busy');
                                busylight.light('red')
                        }
                })
}


il.add(checks, []);

il.run();
