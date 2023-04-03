# Online business card

Смотрите также [документацию на Русском](readme.ru.md).

[![Screenshots](https://grigorykovalev.github.io/online-business-card/example/example.gif)](https://grigorykovalev.github.io/online-business-card/example/example.jpg)

> Example of a business card site: [grigorykovalev.github.io/online-business-card/](https://grigorykovalev.github.io/online-business-card/).

- [Description](#about)
- [How to use](#how-to-use)
	- [Downloading business card site template](#downloading-business-card-website-template)
	- [Edit contact details](#editing-contact-details)
	- [Change avatar](#changing-your-avatar)
	- [Change background](#changing-background)
	- [Creating QR code](#creating-qr-code)
	- [Creating a business card site](#creating-business-card-site)

<a name="about"></a>
## Description

A business card site template that you can edit and place on any hosting, including on [GitHub Pages](https://docs.github.com/en/pages), then your business card site will be available at an address like `username.github.io`, where `username` is your username.

Files in [business card site folder](https://github.com/GrigoryKovalev/online-business-card) for basic use:

- `index.html` - HTML file that displays your business card.
- `vcard.vcf` - a file in text format [vCard](https://en.wikipedia.org/wiki/VCard) to fill in the data of your e-card. 
- `avatar.jpg` - avatar to replace with your image.
- `background.jpg` - background image to replace with your file.
- `qrcode.png` - a QR code file containing a link to an online business card to replace it with your file.

<a name="how-to-use"></a>
## How to use

<a name="downloading-business-card-website-template"></a>
### Downloading a business card site template

You can download business card website files from [link](https://github.com/GrigoryKovalev/online-business-card/archive/refs/heads/master.zip) or go to [business card website folder](https://github.com/GrigoryKovalev/online-business-card) and download the ZIP archive by clicking the `Code` button on the right above the list of files, and then `Download ZIP`.

<a name="editing-contact-details"></a>
### Editing contact details

You can create and export a card with your contact details and avatar to a [VCF file](https://ru.wikipedia.org/wiki/VCard) on your [Android](https://support.google.com/contacts/answer/7199294?hl=en) device, [Apple](https://support.apple.com/en-us/guide/contacts/adrbdcfd32e6/mac) or using the online service [vCard maker](https://vcardmaker.com/), and then replace the `vcard.vcf` file in the [business card site folder](https://github.com/GrigoryKovalev/online-business-card) with the one you created with the same name.

You can then also edit your contact details in the `vcard.vcf` file using a text editor on your computer (in Windows/Notepad or macOS/TextEdit), as well as edit online after [creating a business card site](#creating-business-card-site).

A link to a card with contact details is displayed in the upper right corner of the avatar, when you click on it on a mobile device, you will be prompted to create a new contact filled with values from all fields of the `vcard.vcf` file, and when you click on the link on a computer, you can download the file and import it to your contacts.

> Be sure to add an avatar to the `vcard.vcf` file if you want it to be added to your address book.

Only the following fields from the `vcard.vcf` file are displayed on the vCard site:

- **Full Name** - `FN:First Name Middle Name Last Name` (you can specify it not in full), which is also contained in the `N:Last Name;First Name;Middle Name;Prefix;` field.
- **Nickname** `NICKNAME:your nickname`.
- **Organization** - `ORG:your organization`. If a value is specified, it is displayed under the name instead of the alias, in which case the alias is displayed when the name is clicked.
- **`Email`** - `EMAIL;type=INTERNET;type=HOME;type=pref:your@email.dot`. If multiple email addresses are specified (home, work, etc.), only the values of the first email address are displayed.
- **Phone** - `TEL;type=CELL;type=VOICE;type=pref:+7 123 456-78-90`. If several phones are specified (cellular, home, work, etc.), only the values of the first phone are displayed.
- **Link** - `URL;type=pref:https://your-site.com/`. Displayed when you click on the corresponding icon in the lower right corner of the avatar.
- **Note** - `NOTE:Brief information about yourself`. Can contain additional references starting with `https://` or `www.`, as well as the line break character `\n`. Displayed when you click on the corresponding icon in the bottom left corner of the avatar.
- **ID of social profiles** - ID (login, phone), full URL or empty value (to display non-clickable icon): 
	- `X-SOCIALPROFILE;type=WhatsApp:+71234567890` - phone `+71234567890` in `WhatsApp`.
	- `X-SOCIALPROFILE;type=Telegram:@username` - ID `@username` in `Telegram`.
	- `X-SOCIALPROFILE;type=Viber:+71234567890` - Phone `+71234567890` in `Viber`.
	- `X-SOCIALPROFILE;type=VK:username` - Username `username` in `VK`.
	- `X-SOCIALPROFILE;type=Facebook:`
	- `X-SOCIALPROFILE;type=Instagram:`
	- `X-SOCIALPROFILE;type=Twitter:`
	- `X-SOCIALPROFILE;type=Flickr:`
	- `X-SOCIALPROFILE;type=LinkedIn:`
	- `X-SOCIALPROFILE;type=GitHub:https://github.com/username` - link `https://github.com/username` to `GitHub`.

> Using the online service [vCard maker](https://vcardmaker.com/), you will not be able to add all the specified social media profiles, in which case you will need to add them manually by editing the file `vcard.vcf` after export.

<a name="changing-your-avatar"></a>
### Change avatar

Replace the file `avatar.jpg` in the [business card site folder](https://github.com/GrigoryKovalev/online-business-card) with an image of your avatar with the same name, width and height of at least `330px`, if the height is greater than the width, then the avatar can be scrolled down.

> You can trim and convert an image to `JPG`, for example, using the online service [iLoveImg](https://www.iloveimg.com/), and give the artistic style of your photo - using the application [Prisma](https://prisma-ai.com).

Delete or better replace the file `favicon.ico` with the image of your icon to display it in the browser tab.

> You can create an icon `favicon.ico`, for example, using the online service [Favicon Generator](https://realfavicongenerator.net), by uploading an image of your avatar and downloading a new icon file.

<a name="changing-background"></a>
### Change background

Replace the `background.jpg` file in the [business card site folder](https://github.com/GrigoryKovalev/online-business-card) with your background image with the same name.

> You can download wallpapers to your desktop as a background, for example, using the online service [Wallpapers.com](https://wallpapers.com).

Optionally, you can not use a background image or vice versa, use it only in the [QR-code](#creating-qr-code) display mode, to do this, copy one of the files in the `/example` directory, and replace the `index.html` with the same name in the business card site folder:

- [`index.html`](https://grigorykovalev.github.io/online-business-card/example/index.html) - a template with a white background and a black background in the QR code display mode.
- [`index.background.html`](https://grigorykovalev.github.io/online-business-card/example/index.background.html) - template with white background and background image in QR code display mode.
- [`index.dark.html`](https://grigorykovalev.github.io/online-business-card/example/index.dark.html) - template with black background and white background in QR code display mode.
- [`index.dark.background.html`](https://grigorykovalev.github.io/online-business-card/example/index.dark.background.html) - standard template with background image and white background in QR code display mode.

You can also change the font by copying one of the files in the `/example` directory with an additional font variant from the [Roboto](https://fonts.google.com/?query=Christian+Robertson) family:

- Roboto Condensed: 

	- [`index.condensed.html`](https://grigorykovalev.github.io/online-business-card/example/index.condensed.html) - white background/black background;
	- [`index.condensed.background.html`](https://grigorykovalev.github.io/online-business-card/example/index.condensed.background.html) - white background/background image;
	- [`index.condensed.dark.html`](https://grigorykovalev.github.io/online-business-card/example/index.condensed.dark.html) - black background/white background;
	- [`index.condensed.dark.background.html`](https://grigorykovalev.github.io/online-business-card/example/index.condensed.dark.background.html) - фоновое изображение/белый фон;
	
- Roboto Mono: 

	- [`index.mono.html`](https://grigorykovalev.github.io/online-business-card/example/index.mono.html) - white background/black background; 
	- [`index.mono.background.html`](https://grigorykovalev.github.io/online-business-card/example/index.mono.background.html) - white background/background image; 
	- [`index.mono.dark.html`](https://grigorykovalev.github.io/online-business-card/example/index.mono.dark.html) - black background/white background; 
	- [`index.mono.dark.background.html`](https://grigorykovalev.github.io/online-business-card/example/index.mono.dark.background.html) - background image/white background;
	
- Roboto Slab: 

	- [`index.slab.html`](https://grigorykovalev.github.io/online-business-card/example/index.slab.html) - white background/black background;
	- [`index.slab.background.html`](https://grigorykovalev.github.io/online-business-card/example/index.slab.background.html) - white background/background image; 
	- [`index.slab.dark.html`](https://grigorykovalev.github.io/online-business-card/example/index.slab.dark.html) - black background/white background; 
	- [`index.slab.dark.background.html`](https://grigorykovalev.github.io/online-business-card/example/index.slab.dark.background.html) - background image/white background.

<a name="creating-qr-code"></a>
### Create a QR code

Create a QR code with a link to your business card site, for example, using the [QRCode Monkey](https://www.qrcode-monkey.com) online service and replace the `qrcode.png` file in the [business card site folder](https://github.com/GrigoryKovalev/online-business-card) to the image of your QR code with the same name. 

> You can create and update a QR code after [creating a business card site](#creating-business-card-site).

The QR code is displayed when you click on the corresponding icon in the upper right corner of the avatar. In the QR code display mode, the background changes to white.

<a name="creating-business-card-site"></a>
### Creating a business card site

[Sign up for free on GitHub](https://github.com/signup), then create a new repository (file storage location) with a name corresponding to your username (login) and enable [Github Pages](https://docs.github.com/ru/pages/quickstart):

> After registration, click on the `+` sign in the upper right corner and click on the `New repository` menu that opens. On the repository creation page, in the `Owner` field, select your username and in the `Repository name` field, write your username as the repository name (username = repository name), leave a checkmark in the `Public` field, do not select anything else and click the `Create repository` button. 
>
> On your repository page, go to the `uploading an existing file` link, drag the online business card website files from your computer into the `choose your files` field, and click the `Commit changes` button to upload the files.
> 
> To enable GitHub Pages, go to your repository settings by clicking `Settings` in the menu under your repository name, then go to `Pages` in the menu on the left and change the `Branch` field from `none` to `main`, leave selected root directory `/root` and click the `Save` button. In a few minutes your files will be published and in the `Pages` section at the top you will see a link to your site like `username.github.io` with your username instead of `username`. 

Now you can [manage business card site files with GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files) - edit text files (e.g. change `vcard.vcf` file with your contact details), upload new ones (for example, the QR code image `qrcode.png`) and delete old ones (for example, delete the `/example` directory).
