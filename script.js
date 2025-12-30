// Translations object
const translations = {
    sr: {
        'nav.home': 'Početna',
        'nav.about': 'O nama',
        'nav.career': 'Karijera',
        'nav.contact': 'Kontakt',
        'nav.news': 'Vesti',
        'hero.title': 'SISTEM-BZR',
        'hero.subtitle': 'Bezbednost i zdravlje na radu',
        'hero.description': 'Vaš pouzdan partner za bezbednost i zdravlje na radnom mestu',
        'intro.text1': 'Privredno društvo "RAŠA-BONAMIVA" DOO je brzorastuća kompanija u segmentu pružanja usluga iz oblasti bezbednosti i zdravlja na radu.',
        'intro.text2': 'Osnovana je 2008. godine u Smederevu i već deset godina sa uspehom pruža usluge brojnim korisnicima na teritoriji Braničevskog i Podunavskog okruga, Beograda, Novog Sada, Srema, Banata.',
        'intro.text3': '"RAŠA-BONAMIVA" DOO bazira svoju ponudu na najsavremenijim trendovima zaštite na radu, na najnovijim zakonskim i podzakonskim rešenjima imajući u vidu potrebe korisnika usluga.',
        'intro.text4': 'Tim naših stručnjaka specijalizovanih za bezbednost i zdravlje na radu svakodnevno unapređuje svoja znanja i veštine, omogućujući našim klijentima i njihovim zaposlenima visok nivo zaštite na radu.',
        'about.title': 'O nama',
        'about.mission.title': 'Naša misija',
        'about.mission.text': 'Posvećeni smo pružanju vrhunskih usluga u oblasti bezbednosti i zdravlja na radu, osiguravajući da svaki radnik ima sigurno i zdravo radno okruženje.',
        'about.vision.title': 'Naša vizija',
        'about.vision.text': 'Biti lider u industriji bezbednosti na radu, postavljajući najviše standarde i pružajući inovativna rešenja za zaštitu radnika.',
        'about.values.title': 'Naše vrednosti',
        'about.values.text': 'Bezbednost, profesionalizam, integritet i posvećenost našim klijentima su temelji naše kompanije.',
        'career.title': 'Karijera',
        'career.intro': 'Pridružite se našem timu profesionalaca koji rade na stvaranju sigurnijeg radnog okruženja.',
        'career.description': 'Trenutno tražimo motivisane i posvećene profesionalce koji dele našu strast prema bezbednosti na radu. Ako ste zainteresovani, pošaljite nam svoj CV.',
        'career.cta': 'Kontaktirajte nas',
        'contact.title': 'Kontakt',
        'contact.company.title': 'Kompanija',
        'contact.company.full': 'SISTEM-BZR DOO Smederevo',
        'contact.address.title': 'Adresa',
        'contact.address.text': 'Durmitorska 3, 11300 Smederevo, Srbija',
        'contact.phone.title': 'Telefon',
        'contact.email.title': 'Email',
        'form.name': 'Ime',
        'form.email': 'Email',
        'form.message': 'Poruka',
        'form.submit': 'Pošalji',
        'news.title': 'Vesti',
        'news.date.format': 'DD. MM. YYYY',
        'news.item1.title': 'Najnovije vesti o bezbednosti na radu',
        'news.item1.text': 'Pratite najnovije trendove i promene u oblasti bezbednosti i zdravlja na radu.',
        'news.item2.title': 'Nova obuka za radnike',
        'news.item2.text': 'Organizujemo nove programe obuke za poboljšanje bezbednosti na radnom mestu.',
        'news.item3.title': 'Partnerstvo sa vodećim kompanijama',
        'news.item3.text': 'Radimo sa vodećim kompanijama na implementaciji najboljih praksi bezbednosti.',
        'footer.text': '© 2024 SISTEM-BZR DOO Smederevo. Sva prava zadržana.'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.career': 'Career',
        'nav.contact': 'Contact',
        'nav.news': 'News',
        'hero.title': 'SISTEM-BZR',
        'hero.subtitle': 'Occupational Safety and Health',
        'hero.description': 'Your trusted partner for workplace safety and health',
        'intro.text1': 'Private company "RAŠA-BONAMIVA" LLC is a rapidly growing company in the segment of providing services in the field of occupational safety and health.',
        'intro.text2': 'Founded in 2008 in Smederevo, it has been successfully providing services to numerous clients for over ten years in the territory of Braničevo and Podunavlje districts, Belgrade, Novi Sad, Srem, and Banat.',
        'intro.text3': '"RAŠA-BONAMIVA" LLC bases its offer on the most modern trends in occupational protection, on the latest legal and sub-legal solutions, taking into account the needs of service users.',
        'intro.text4': 'Our team of specialists in occupational safety and health continuously improves their knowledge and skills on a daily basis, enabling our clients and their employees a high level of occupational protection.',
        'about.title': 'About Us',
        'about.mission.title': 'Our Mission',
        'about.mission.text': 'We are dedicated to providing excellent services in occupational safety and health, ensuring that every worker has a safe and healthy work environment.',
        'about.vision.title': 'Our Vision',
        'about.vision.text': 'To be a leader in the occupational safety industry, setting the highest standards and providing innovative solutions for worker protection.',
        'about.values.title': 'Our Values',
        'about.values.text': 'Safety, professionalism, integrity, and dedication to our clients are the foundations of our company.',
        'career.title': 'Career',
        'career.intro': 'Join our team of professionals working to create a safer work environment.',
        'career.description': 'We are currently looking for motivated and dedicated professionals who share our passion for workplace safety. If you are interested, please send us your CV.',
        'career.cta': 'Contact Us',
        'contact.title': 'Contact',
        'contact.company.title': 'Company',
        'contact.company.full': 'SISTEM-BZR LLC Smederevo',
        'contact.address.title': 'Address',
        'contact.address.text': 'Durmitorska 3, 11300 Smederevo, Serbia',
        'contact.phone.title': 'Phone',
        'contact.email.title': 'Email',
        'form.name': 'Name',
        'form.email': 'Email',
        'form.message': 'Message',
        'form.submit': 'Send',
        'news.title': 'News',
        'news.date.format': 'MM. DD. YYYY',
        'news.item1.title': 'Latest news on workplace safety',
        'news.item1.text': 'Follow the latest trends and changes in occupational safety and health.',
        'news.item2.title': 'New training for workers',
        'news.item2.text': 'We are organizing new training programs to improve workplace safety.',
        'news.item3.title': 'Partnership with leading companies',
        'news.item3.text': 'We work with leading companies to implement best safety practices.',
        'footer.text': '© 2024 SISTEM-BZR LLC Smederevo. All rights reserved.'
    }
};

// Current language
let currentLang = 'sr';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && (savedLang === 'sr' || savedLang === 'en')) {
        currentLang = savedLang;
        updateLanguageButtons();
    }
    
    // Apply translations
    translatePage();
    
    // Setup language switcher
    setupLanguageSwitcher();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup contact form
    setupContactForm();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
});

// Translate page content
function translatePage() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                const placeholderKey = element.getAttribute('data-placeholder');
                if (placeholderKey && translations[currentLang][placeholderKey]) {
                    element.placeholder = translations[currentLang][placeholderKey];
                }
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

// Setup language switcher
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                localStorage.setItem('preferredLang', lang);
                updateLanguageButtons();
                translatePage();
            }
        });
    });
}

// Update language buttons active state
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === currentLang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navMenu = document.getElementById('navMenu');
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// Setup mobile menu
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(currentLang === 'sr' 
                ? `Hvala vam, ${name}! Vaša poruka je primljena. Kontaktiraćemo vas uskoro.`
                : `Thank you, ${name}! Your message has been received. We will contact you soon.`
            );
            
            // Reset form
            this.reset();
        });
    }
}

// Handle scroll to update active nav link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navHeight = document.querySelector('.navbar').offsetHeight;
        
        if (window.pageYOffset >= (sectionTop - navHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

