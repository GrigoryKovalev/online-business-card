$(function () {		
	// Make avatar image height equal to width
		
	$('#round').css('width', $('#round').width());
	$('#round').css('height', $('#round').width());
	
	$(window).resize(function() {
		$('#round').css('width', '100%');
		$('#round').css('height', $('#round').width());
	});
	
	// Show QR code link if it exists
	$.get($('#vcard-link').attr('href'), function() {
		$('#vcard-link').removeClass('is-hidden');
	}).fail(function() {
		$('#vcard-link i').remove();
	});
	
	// Show QR code link if it exists
	$.get($('#qrcode').attr('src'), function() {
		$('#qrcode-link').removeClass('is-hidden');
	}).fail(function() {
		$('#qrcode-link i').remove();
		$('#qrcode').remove();
	});

	// Get vCard data
	$.get($('#vcard-link').attr('href'), function( data ) {	
		let vcard = {},
		
			// Social profile IDs 
			socials = [
				'WhatsApp', 
				'Telegram',
				'Viber',
				'VK',
				'Facebook',
				'Instagram',
				'Twitter',
				'Flickr',
				'LinkedIn',
				'GitHub',
			],
			
			fields = [
				'FN', 
				'NICKNAME', 
				'ORG', 
				'EMAIL', 
				'TEL', 
				'URL',  
				'NOTE',
			].concat(socials);
			
		// Prepare data				
		$.each(data.split("\n"), function(index, value) {		
			if (value.search(/[:]/) !== -1) {											
				$.each(fields, function(i, name) {	
					if (fields.includes(name)) {		
						let regexp = new RegExp('^(.*[\.,:,;,=,\-]+)?' + name + '([\.,:,;,=,\-]+.*)?:', 'i'),
							key = name.toLowerCase();
					
						if (value.search(regexp) !== -1) {
							if (key === 'note') {
								vcard[key] = value.replace(new RegExp('^(.*[\.,:,;,=,\-]+)?' + name + '([\.,,;,=,\-]+[^:]*)?:', 'i'), '').trim();
							} else {
								value = value.replace(/(https?:\/\/|ftps?:\/\/)/, '').replace(regexp, '').trim().replace(/^[@,\+,#]/, '').replace(/;$/, '');
							
								if (socials.includes(name)) {
									if (vcard.social === undefined) {
										vcard.social = {};
									}
									
									vcard.social[key] = value;
									
								} else {
									vcard[key] = value;
								}
							}
					
							fields.splice(i, 1);
						}
					}
				});
			}
		});
		
		// Get name and organisation
		if (vcard.fn.length || vcard.nickname.length || vcard.org.length) {
			$('#name').removeClass('is-hidden');
			
			if (vcard.fn) {
				$('#fn').text(vcard.fn);
				$('title').text(vcard.fn);
			}
			
			if (vcard.org) {
				if (!vcard.fn && !vcard.nickname) {
					$('#fn').text(vcard.org);
					$('title').text(vcard.org);
				} else {
					$('#org').text(vcard.org).removeClass('is-hidden');
				}
			}
			
			if (vcard.nickname) {
				if (!vcard.fn) {
					$('#fn').text(vcard.nickname).removeAttr('data-toggle');
					$('title').text(vcard.nickname);
				} else if (!vcard.org) {
					$('#fn').removeAttr('data-toggle');
					$('#org').text(vcard.nickname).removeClass('is-hidden');
				} else {
					$('#nickname').text(vcard.nickname);
				}
			} else {
				$('#fn').removeAttr('data-toggle');
			}
		}
		
		// Get telephone
		if (vcard.tel) {
			$('#tel').removeClass('is-hidden');
			$('#tel a')
				.attr('href', $('#tel a').attr('href') + '+' + vcard.tel.replace(/[^0-9]/g, ''))
				.text('+' + vcard.tel);
				
			$('#name').addClass('name-border');
		}
		
		// Get email
		if (vcard.email) {
			$('#email').removeClass('is-hidden');
			$('#email a')
				.attr('href', $('#email a').attr('href') + '+' + vcard.email)
				.text(vcard.email);
				
			$('#name').addClass('name-border');
		}
		
		// Get url
		if (vcard.url) {
			$('#url').attr('href', '//' + vcard.url).removeClass('is-hidden');

			if (vcard.url.search(new RegExp('^' + document.location.host + '\/?$')) !== -1) {
				$('#url').removeAttr('target');
			}
		}
		
		// Get note
		if (vcard.note) {
			$('#note-link').removeClass('is-hidden');
			
			let note = []
			
			vcard.note = vcard.note.replace(/(\\r\\n|\\n\\r|\\r|\\n)/g, '<br/>').replace(/\\(\.|\,|:|;|=|\-)/g, "$1");

			// https://ru.stackoverflow.com/questions/746497/
			vcard.note.replace(/((?:https?:\/\/|ftps?:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,})|(\n+|(?:(?!(?:https?:\/\/|ftp:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,}).)+)/gim, (m, link, text) => {
				note.push(link ? '<a href="' + (link[0]==="w" ? "//" : "") + link + '" target="_blank">' + link.replace(/(https?:\/\/|ftps?:\/\/)/, '') + '</a>' : text)
			});

			$('#note').html(note);
		} else {
			$('#note-link i').remove();
		}
		
		// Get social profile IDs
		
		if (vcard.social) {
			$('#social').removeClass('is-hidden');
			$('#name').addClass('name-border');
			
			$.each(vcard.social, function(name, url) {	
				let $id = $('#' + name.toLowerCase());
				
				if (url.search(/[\/]/) !== -1) {
					url = '//' + url;
				} else if (url.length) {
					if (name === 'whatsapp' || name === 'viber') {					
						url = url.replace(/[^0-9]/g, '');
						
						if (name === 'viber') {
							url = '%2B' + url;
						}
					}
				
					url = $id.attr('href') + url;
				}
							
				if (url) {
					$id.attr('href', url);
				} else {
					$id.removeAttr('href');
				}	
				
				$id.removeClass('is-hidden');
			});	
		}			
	});
});

