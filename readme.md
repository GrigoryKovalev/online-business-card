# Онлайн визитка

[![Скриншоты](https://grigorykovalev.github.io/online-business-card/example/example.gif)](https://grigorykovalev.github.io/online-business-card/example/example.jpg)

> Пример сайта визитки: [grigorykovalev.github.io/online-business-card/](https://grigorykovalev.github.io/online-business-card/).

- [Описание](#about)
- [Как пользоваться](#how-to-use)

<a name="about"></a>
## Описание

Шаблон онлайн визитки, который вы можете изменить и разместить на любом хостинге, в том числе на [GitHub Pages](https://docs.github.com/ru/pages), тогда сайт вашей визитки будет доступен по адресу `username.github.io`, где `username` имя вашего пользователя.

Файлы в [папке сайта визитки](https://github.com/GrigoryKovalev/online-business-card) для базового использования:

- `index.html` - HTML-файл, отображающий вашу визитку.
- `vcard.vcf` - файл в текстовом формате [vCard](https://ru.wikipedia.org/wiki/VCard) для заполнения данными вашей электронной визитки. 
- `avatar.jpg` - аватар для замены на ваше изображение.
- `background.jpg` - фоновое изображение для замены на ваш файл.
- `qrcode.png` - файл QR-кода, содержащий сылку на онлайн визитку, для замены на ваш файл.

<a name="how-to-use"></a>
## Как пользоваться

[Скачайте](http://github.com/GrigoryKovalev/online-business-card), отредактируйте и разместите.

- [Редактирование контактных данных](#editing-contact-details)
- [Изменение аватара](#changing-your-avatar)
- [Изменение фона](#changing-background)
- [Изменение шрифта](#changing-font)
- [Создание QR-кода](#creating-qr-code)
- [Создание сайта визитки](#creating-business-card-site)

<a name="editing-contact-details"></a>
### Редактирование контактных данных

Вы можете создать и экспортировать карточку с вашими контактными данными и аватором в [VCF-файл](https://ru.wikipedia.org/wiki/VCard) на вашем устройстве [Android](https://support.google.com/contacts/answer/7199294?hl=ru), [Apple](https://support.apple.com/ru-ru/guide/contacts/adrbdcfd32e6/mac) или с помощью онлайн-сервиса [vCard maker](https://vcardmaker.com/), а затем заменить файл `vcard.vcf` в [папке сайта визитки](https://github.com/GrigoryKovalev/online-business-card) на созданный вами с таким же названием.

Затем вы также сможете редактировать ваши контактные данные в файл `vcard.vcf` с помощью текстового редактора на компьютере (в Windows/Блокнот или macOS/TextEdit), а также изменить онлайн после [создания сайта визитки](#creating-business-card-site).

Ссылка на карточку с контактными данными отображается в правом верхнем углу аватара, при клике по которой на мобильном устройстве будет предложено создать новый контакт, заполненный значениями из всех полей файла `vcard.vcf`, а при клике на компьютере вы сможете скачать файл и импортировать его в ваши контакты.

> Обязательно добавьте аватар в файл `vcard.vcf`, если хотите чтобы он добавлялся в адресную книгу.

На сайте визитке отображаются только следующие поля из файла `vcard.vcf`:

- **Полное имя** - `FN:Имя Отчество Фамилия` (можно указывать не полностью), которое также содержится в поле `N:Фамилия;Имя;Отчество;Префикс;`.
- **Псевдоним** `NICKNAME:ваш псевдоним`.
- **Организация** - `ORG:ваша организация`. Если значение указано, то оно отображается под именем вместо псевдонима, в таком случае псевдоним отображается при клике на имя.
- **`Email`** - `EMAIL;type=INTERNET;type=HOME;type=pref:ваш@email.dot`. Если указано несколько email-адресов (домашний, рабочий и т.д.), то отображается значения только первого email-адреса.
- **Телефон** - `TEL;type=CELL;type=VOICE;type=pref:+7 123 456-78-90`. Если указано несколько телефонов (сотовый, домашний, рабочий и т.д.), то отображается значения только первого телефона.
- **Ссылка** - `URL;type=pref:https://ваш-сайт.рф/`. Отображается при клике на соответствующую иконку в правом нижнем углу аватара.
- **Заметка** - `NOTE:Краткая информация о себе`. Может содержать дополнительные ссылки, начинающиеся с `https://` или `www.`, а также символ переноса строки `\n`. Отображается при клике на соответствующую иконку в левом нижнем углу аватара.
- **ИД социальных профайлов** - ИД (логин, телефон), полный URL-адрес или пустое значение (для отображения не кликабельной иконки): 
	- `X-SOCIALPROFILE;type=WhatsApp:+71234567890` - телефон `+71234567890` в `WhatsApp`.
	- `X-SOCIALPROFILE;type=Telegram:@username` - ИД `@username` в `Telegram`.
	- `X-SOCIALPROFILE;type=Viber:+71234567890` - телефон `+71234567890` в `Viber`.
	- `X-SOCIALPROFILE;type=VK:username` - Логин `username` в `VK`.
	- `X-SOCIALPROFILE;type=Facebook:`
	- `X-SOCIALPROFILE;type=Instagram:`
	- `X-SOCIALPROFILE;type=Twitter:`
	- `X-SOCIALPROFILE;type=Flickr:`
	- `X-SOCIALPROFILE;type=LinkedIn:`
	- `X-SOCIALPROFILE;type=GitHub:https://github.com/username` - ссылка `https://github.com/username` на `GitHub`.

> С помощью онлайн-сервиса [vCard maker](https://vcardmaker.com/) вы не сможете добавить все указанные профили социальных сетей, в таком случае необходимо будет их добавить вручную, отредактировав файл `vcard.vcf` после экспорта.

<a name="changing-your-avatar"></a>
### Изменение аватара

Замените файл `avatar.jpg` в [папке сайта визитки](https://github.com/GrigoryKovalev/online-business-card) на изображение вашего аватара с таким же названием, шириной и высотой не менее `330px`, если высота будет больше чем ширина, то аватар можно будет прокручивать вниз.

> Обрезать и преобразовать изображение в `JPG` вы можете, например, с помощью онлайн-сервиса [iLoveImg](https://www.iloveimg.com/ru), а придать художественный стиль вашей фотографии - с помощью приложения [Prisma](https://prisma-ai.com).

<a name="changing-background"></a>
### Изменение фона

Замените файл `background.jpg` в [папке сайта визитки](https://github.com/GrigoryKovalev/online-business-card) на изображение вашего фона с таким же названием.

> Вы можете скачать обои на рабочий стол в качестве фона, например, с помощью онлайн-сервиса [Wallpapers.com](https://wallpapers.com).

Вы можете не использовать фоновое изображение или использовать его только в режиме отображения QR-кода, для этого вы можете скопировать один из файлов из паки `example/`, и заменить им файл `index.html` с таким же названием в корневой папке сайта визитки:

- [index.clean.html](https://grigorykovalev.github.io/online-business-card/example/index.clean.html) - шаблон с черным фоном вместо фонового изображения.
- [index.white.html](https://grigorykovalev.github.io/online-business-card/example/index.white.html) - шаблон с белым фоном вместо фонового изображения и с фоновым изображением [в режиме отображения QR-кода](#creating-qr-code).
- [index.white.clean.html](https://grigorykovalev.github.io/online-business-card/example/index.white.clean.html) - шаблон с белым фоном вместо фонового изображения и черным фоном в режиме отображения QR-кода.

<a name="creating-qr-code"></a>
### Создание QR-кода

Создайте QR-код с ссылкой на сайт вашей визитки, например, с помощью онлайн-сервиса [QRCode Monkey](https://www.qrcode-monkey.com) и замените файл `qrcode.png` в [папке сайта визитки](https://grigorykovalev.github.io/online-business-card/) на изображение вашего QR-кода с таким же названием. 

> Вы можете создать и обновить QR-код после [создания сайта визитки](#creating-business-card-site).

QR-код отображается при клике на соответствующую иконку в правом верхнем углу аватара. В режиме отображения QR-кода фон меняется на белый цвет.

<a name="creating-business-card-site"></a>
### Создание сайта визитки

[изменить файл онлайн](https://docs.github.com/ru/repositories/working-with-files/managing-files/editing-files) после загрузки на [Github](https://docs.github.com/ru/repositories/working-with-files/managing-files/adding-a-file-to-a-repository), используемого для хранения файлов [GitHub Pages](https://docs.github.com/ru/pages) вы сможете [изменить файл онлайн](https://docs.github.com/ru/repositories/working-with-files/managing-files/editing-files).

