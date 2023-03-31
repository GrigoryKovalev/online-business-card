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
	$.get( "vcard.vcf", function( data ) {	
		let vcard = {},
			fields = [
				'FN', 
				'NICKNAME', 
				'ORG', 
				'EMAIL', 
				'TEL', 
				'URL',  
				'NOTE',
				//'BDAY', // Only used in vcard.vcf file
			
				// Social profile IDs 
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
			];
			
		// Prepare data				
		$.each(data.split("\n"), function(index, value) {				
			$.each(fields, function(i, name) {		
				let regexp = new RegExp('^(.*[\.,:,;,=,\-]+)?' + name + '([\.,:,;,=,\-]+.*)?:', 'i'),
					key = name.toLowerCase();
					
				if (value.search(regexp) !== -1) {
					if (key === 'note') {
						vcard[key] = value.replace(new RegExp('^(.*[\.,:,;,=,\-]+)?' + name + '([\.,,;,=,\-]+[^:]*)?:', 'i'), '').trim();
					} else {
						vcard[key] = value.replace(/(https?:\/\/|ftps?:\/\/)/, '').replace(regexp, '').trim().replace(/^[@,\+,#]/, '').replace(/;$/, '');
					}
				}
			});
			
			if (value.search(/^[^;]*(\.)?PHOTO;/) !== -1) {
				return false;
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
		}
		
		// Get email
		if (vcard.email) {
			$('#email').removeClass('is-hidden');
			$('#email a')
				.attr('href', $('#email a').attr('href') + '+' + vcard.email)
				.text(vcard.email);
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
					
		if (vcard.whatsapp) {
			$('#whatsapp')
				.removeClass('is-hidden')
				.attr('href', $('#whatsapp').attr('href') + vcard.whatsapp.replace(/[^0-9]/g, ''));
				
			$('#social').removeClass('is-hidden');
		}
		
		if (vcard.telegram) {
			$('#telegram')
				.removeClass('is-hidden')
				.attr('href', $('#telegram').attr('href') + vcard.telegram);
				
			$('#social').removeClass('is-hidden');
		}
		
		if (vcard.viber) {
			$('#viber')
				.removeClass('is-hidden')
				.attr('href', $('#viber').attr('href') + '%2B' + vcard.viber.replace(/[^0-9]/g, ''));
				
			$('#social').removeClass('is-hidden');
		}
		
		if (vcard.vk) {
			$('#vk')
				.removeClass('is-hidden')
				.attr('href', $('#vk').attr('href') + vcard.vk);
				
			$('#social').removeClass('is-hidden');
		}
		
		if (vcard.facebook) {
			$('#facebook')
				.removeClass('is-hidden')
				.attr('href', $('#facebook').attr('href') + vcard.facebook);
				
			$('#social').removeClass('is-hidden');
		}
		
		if (vcard.instagram) {
			$('#instagram')
				.removeClass('is-hidden')
				.attr('href', $('#instagram').attr('href') + vcard.instagram);
				
			$('#social').removeClass('is-hidden');
		}
		
		if (vcard.twitter) {
			$('#twitter')
				.removeClass('is-hidden')
				.attr('href', $('#twitter').attr('href') + vcard.twitter);
				
			$('#social').removeClass('is-hidden');
		}
		
		if (vcard.flickr) {
			$('#flickr')
				.removeClass('is-hidden')
				.attr('href', $('#flickr').attr('href') + vcard.flickr);
				
			$('#social').removeClass('is-hidden');
		}
		
		if (vcard.linkedin) {
			$('#linkedin')
				.removeClass('is-hidden')
				.attr('href', $('#linkedin').attr('href') + vcard.linkedin);
				
			$('#social').removeClass('is-hidden');
		}
		
		if (vcard.github) {
			$('#github')
				.removeClass('is-hidden')
				.attr('href', $('#github').attr('href') + vcard.github);
				
			$('#social').removeClass('is-hidden');
		}				
	});
});

