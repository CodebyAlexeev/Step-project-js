"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];

// Картки тренерів

const trainersContainer = document.querySelector('.trainers-cards__container');

DATA.forEach(trainer => {
const trainerCard = document.createElement('li');
trainerCard.classList.add('trainer');

const trainerImage = document.createElement('img');
trainerImage.src = trainer.photo;
trainerImage.alt = `${trainer['first name']} ${trainer['last name']}`;
trainerImage.classList.add('trainer__img');
trainerImage.width = 280;
trainerImage.height = 300;
trainerCard.appendChild(trainerImage);

const trainerName = document.createElement('p');
trainerName.textContent = `${trainer['first name']} ${trainer['last name']}`;
trainerName.classList.add('trainer__name');
trainerCard.appendChild(trainerName);

const showMoreButton = document.createElement('button');
showMoreButton.textContent = 'ПОКАЗАТИ';
showMoreButton.classList.add('trainer__show-more');
showMoreButton.type = 'button';
trainerCard.appendChild(showMoreButton);

trainersContainer.appendChild(trainerCard);
});

const sortingSection = document.querySelector('.sorting');
sortingSection.removeAttribute('hidden');

const sidebarFilter = document.querySelector('.sidebar');
sidebarFilter.removeAttribute('hidden');

// Модальне вікно з інформацією про тренера

document.addEventListener('DOMContentLoaded', function() {

    const showModal = (trainerData) => {
        const modalTemplate = document.querySelector('#modal-template').content.cloneNode(true);
        modalTemplate.querySelector('.modal__img').src = trainerData.photo;
        modalTemplate.querySelector('.modal__name').textContent = `${trainerData["first name"]} ${trainerData["last name"]}`;
        modalTemplate.querySelector('.modal__point--category').textContent = `Категорія: ${trainerData.category}`;
        modalTemplate.querySelector('.modal__point--experience').textContent = `Досвід: ${trainerData.experience}`;
        modalTemplate.querySelector('.modal__point--specialization').textContent = `Напрям тренера: ${trainerData.specialization}`;
        modalTemplate.querySelector('.modal__text').textContent = trainerData.description;
        
        const modalCloseButton = modalTemplate.querySelector('.modal__close');
        modalCloseButton.addEventListener('click', function() {
            document.body.removeChild(document.querySelector('.modal'));
            document.body.style.overflow = '';
        });
        
        document.body.appendChild(modalTemplate);
        document.body.style.overflow = 'hidden'; 
    };

    const showMoreButtons = document.querySelectorAll('.trainer__show-more');
    showMoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => showModal(DATA[index]));
    });
});

// Сортування карток тренерів

document.addEventListener('DOMContentLoaded', function() {
	const originalData = [...DATA]; 
    const trainersContainer = document.querySelector('.trainers-cards__container');
    const sortButtons = document.querySelectorAll('.sorting__btn');
    const defaultSortBtn = sortButtons[0];
    const sortByNameBtn = sortButtons[1];
    const sortByExperienceBtn = sortButtons[2];

    function displayTrainers(data) {
        trainersContainer.innerHTML = ''; 
        data.forEach((trainer, index) => {
            const trainerCard = document.createElement('li');
            trainerCard.classList.add('trainer');
            
            const trainerImage = document.createElement('img');
            trainerImage.src = trainer.photo;
            trainerImage.alt = `${trainer['first name']} ${trainer['last name']}`;
            trainerImage.classList.add('trainer__img');
            trainerCard.appendChild(trainerImage);
            
            const trainerName = document.createElement('p');
            trainerName.textContent = `${trainer['first name']} ${trainer['last name']}`;
            trainerName.classList.add('trainer__name');
            trainerCard.appendChild(trainerName);
            
            const showMoreButton = document.createElement('button');
            showMoreButton.textContent = 'ПОКАЗАТИ';
            showMoreButton.classList.add('trainer__show-more');
            showMoreButton.addEventListener('click', () => showModal(trainer));
            trainerCard.appendChild(showMoreButton);

            trainersContainer.appendChild(trainerCard);
        });
    }

    function showModal(trainerData) {
        
			const modalTemplate = document.querySelector('#modal-template').content.cloneNode(true);
			modalTemplate.querySelector('.modal__img').src = trainerData.photo;
			modalTemplate.querySelector('.modal__name').textContent = `${trainerData["first name"]} ${trainerData["last name"]}`;
			modalTemplate.querySelector('.modal__point--category').textContent = `Категорія: ${trainerData.category}`;
			modalTemplate.querySelector('.modal__point--experience').textContent = `Досвід: ${trainerData.experience}`;
			modalTemplate.querySelector('.modal__point--specialization').textContent = `Напрям тренера: ${trainerData.specialization}`;
			modalTemplate.querySelector('.modal__text').textContent = trainerData.description;
			
			const modalCloseButton = modalTemplate.querySelector('.modal__close');
			modalCloseButton.addEventListener('click', function() {
				document.body.removeChild(document.querySelector('.modal'));
				document.body.style.overflow = '';
			});
			
			document.body.appendChild(modalTemplate);
			document.body.style.overflow = 'hidden'; 
    }

    function sortAndDisplay(sortFunction) {
        const sortedData = DATA.sort(sortFunction);
        displayTrainers(sortedData);
    }

	defaultSortBtn.addEventListener('click', function() {
        clearActiveButton();
        this.classList.add('sorting__btn--active');
        displayTrainers(originalData);
    });

    sortByNameBtn.addEventListener('click', function() {
        clearActiveButton();
        this.classList.add('sorting__btn--active');
        sortAndDisplay((a, b) => a['last name'].localeCompare(b['last name']));
    });

    sortByExperienceBtn.addEventListener('click', function() {
        clearActiveButton();
        this.classList.add('sorting__btn--active');
        sortAndDisplay((a, b) => parseInt(b.experience) - parseInt(a.experience));
    });

    function clearActiveButton() {
        document.querySelectorAll('.sorting__btn').forEach(button => {
            button.classList.remove('sorting__btn--active');
        });
    }

    displayTrainers(DATA);
});

// Фільтрація карток тренерів

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.sidebar__filters');
    const trainersContainer = document.querySelector('.trainers-cards__container');

	document.getElementById('gym').value = 'тренажерний зал';
	document.getElementById('fight-club').value = 'бійцівський клуб';
	document.getElementById('kids-club').value = 'дитячий клуб';
	document.getElementById('swimming-pool').value = 'басейн';
	document.getElementById('master').value = 'майстер';
	document.getElementById('specialist').value = 'спеціаліст';
	document.getElementById('instructor').value = 'інструктор';

    function displayTrainers(trainers) {
        trainersContainer.innerHTML = '';
        trainers.forEach(trainer => {
            const cardElement = document.createElement('li');
            cardElement.classList.add('trainer');

            const img = document.createElement('img');
            img.src = trainer.photo;
            img.alt = `${trainer['first name']} ${trainer['last name']}`;
            img.classList.add('trainer__img');
            img.width = 280;
            img.height = 300;

            const name = document.createElement('p');
            name.textContent = `${trainer['first name']} ${trainer['last name']}`;
            name.classList.add('trainer__name');

            const button = document.createElement('button');
            button.textContent = 'ПОКАЗАТИ';
            button.classList.add('trainer__show-more');
            button.addEventListener('click', () => showModal(trainer));

            cardElement.appendChild(img);
            cardElement.appendChild(name);
            cardElement.appendChild(button);

            trainersContainer.appendChild(cardElement);
        });
    }

    function showModal(trainer) {
        const modalTemplate = document.querySelector('#modal-template').content.cloneNode(true);
        modalTemplate.querySelector('.modal__img').src = trainer.photo;
        modalTemplate.querySelector('.modal__name').textContent = `${trainer["first name"]} ${trainer["last name"]}`;
        modalTemplate.querySelector('.modal__point--category').textContent = `Категорія: ${trainer.category}`;
        modalTemplate.querySelector('.modal__point--experience').textContent = `Досвід: ${trainer.experience}`;
        modalTemplate.querySelector('.modal__point--specialization').textContent = `Напрям тренера: ${trainer.specialization}`;
        modalTemplate.querySelector('.modal__text').textContent = trainer.description;
        modalTemplate.querySelector('.modal__close').addEventListener('click', () => {
            document.body.removeChild(document.querySelector('.modal'));
            document.body.style.overflow = '';
        });

        document.body.appendChild(modalTemplate);
        document.body.style.overflow = 'hidden';
    }

    function filterData() {
        const selectedDirection = form.direction.value.toLowerCase();
        const selectedCategory = form.category.value.toLowerCase();

        const filteredTrainers = DATA.filter(trainer => {
            const directionMatch = selectedDirection === 'all' || trainer.specialization.toLowerCase() === selectedDirection;
            const categoryMatch = selectedCategory === 'all' || trainer.category.toLowerCase() === selectedCategory;
            return directionMatch && categoryMatch;
        });

        displayTrainers(filteredTrainers);
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        filterData();
    });

    displayTrainers(DATA);
});





















































