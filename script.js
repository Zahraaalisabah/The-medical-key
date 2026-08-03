// Localization Dictionary
const i18nData = {
    ar: {
        logoTitle: "شركة المفتاح",
        logoSub: "للتجهيزات الطبية المحدودة",
        navHome: "الرئيسية",
        navAbout: "عن الشركة",
        navBrands: "توكيلاتنا العالمية",
        navSpecialties: "التخصصات",
        navServices: "الخدمات والضمان",
        navQuote: "طلب عرض سعر",
        heroBadge: "رواد التجهيزات الطبية في العراق منذ 2017",
        heroTitle1: "شراكة موثوقة لتطوير",
        heroTitle2: "القطاع الصحي العراقي",
        heroDesc: "نستورد ونورد أحدث الأجهزة والمستلزمات الطبية العالمية للمستشفيات والمراكز التخصصية، مع التزام تام بالتدريب، الصيانة، وخدمات ما بعد البيع.",
        btnExplore: "استكشف منتجاتنا",
        btnContact: "تواصل مع قسم المبيعات",
        f1Title: "وكالات معتمدة",
        f1Sub: "منتجات براندات عالمية",
        f2Title: "صيانة ومعايرة",
        f2Sub: "مهندسون مختصون 24/7",
        f3Title: "تدريب كوادر",
        f3Sub: "ورش عمل للأطباء",
        badgeTag: "المعيار المعتمد",
        badgeCard: "تقنيات جراحية دقيقة لعمليات الصالات",
        stat1: "مستشفى وموقع مجهز",
        stat2: "عملية تكللت بالنجاح",
        stat3: "توكيل عالمي حصري",
        stat4: "سنوات من الخبرة الريادية",
        brandTag: "توكيلاتنا العالمية المعتمدة",
        brandTitle: "نصنع الفارق بالشراكة مع كبرى المصانع الطبية",
        specTag: "مجالات الاختصاص",
        specTitle: "تخصصات متكاملة لرعاية طبية فائقة",
        specDesc: "نستورد أحدث التكنولوجيات الطبية المخصصة لجراحات اليوم الواحد والعمليات المعقدة.",
        card1Title: "أنظمة الناظور الجراحي",
        card1Desc: "أحدث أبراج النواظير بتقنية 4K وأدوات الجراحة الدقيقة لكافة التخصصات الجراحية.",
        card2Title: "الإصابات الرياضية والكسور",
        card2Desc: "حلول متطورة لترميم الأربطة، المفاصل الاصطناعية، وصفائح تثبيت الكسور العالمية.",
        card3Title: "جراحة العمود الفقري",
        card3Desc: "مستلزمات نواظير الفقرات والتدخل الجراحي المحدود لجراحة الانزلاق الغضروفي.",
        cardMore: "استعرض التفاصيل",
        footerAbout: "نحن ملتزمون بنقل أحدث التطورات الطبية العالمية للمؤسسات الصحية العراقية، وتقديم خدمات متكاملة تضمن أعلى مستويات السلامة والاعتمادية.",
        footerQuick: "روابط سريعة",
        footerContact: "معلومات الاتصال"
    },
    en: {
        logoTitle: "Al-Miftah",
        logoSub: "Medical Supplies Co. Ltd.",
        navHome: "Home",
        navAbout: "About Us",
        navBrands: "Global Brands",
        navSpecialties: "Specialties",
        navServices: "Services & Warranty",
        navQuote: "Request a Quote",
        heroBadge: "Leading Medical Equipment in Iraq Since 2017",
        heroTitle1: "A Trusted Partner in",
        heroTitle2: "Advancing Iraqi Healthcare",
        heroDesc: "Distributing world-class medical equipment and consumables to hospitals, backed by comprehensive training, maintenance, and reliable after-sales support.",
        btnExplore: "Explore Products",
        btnContact: "Contact Sales Team",
        f1Title: "Authorized Agent",
        f1Sub: "Global Medical Brands",
        f2Title: "24/7 Maintenance",
        f2Sub: "Expert Biomedical Engineers",
        f3Title: "Clinical Training",
        f3Sub: "Hands-on Medical Workshops",
        badgeTag: "CERTIFIED STANDARD",
        badgeCard: "Precision Surgical Tech for Operating Theaters",
        stat1: "Hospitals Equipped",
        stat2: "Successful Operations",
        stat3: "Exclusive Brand Agencies",
        stat4: "Years of Market Leadership",
        brandTag: "Authorized Global Partners",
        brandTitle: "Partnering with World Leaders in Healthcare Tech",
        specTag: "Our Specialties",
        specTitle: "Integrated Medical Solutions",
        specDesc: "Importing advanced technology tailored for minimally invasive procedures and complex surgeries.",
        card1Title: "Surgical Endoscopy",
        card1Desc: "State-of-the-art 4K endoscopic towers and precision surgical instrumentation.",
        card2Title: "Sports Medicine & Trauma",
        card2Desc: "Advanced ligament repair, joint replacement, and orthopedic trauma fixation systems.",
        card3Title: "Spine Surgery",
        card3Desc: "Endoscopic spine systems and minimally invasive solutions for disc surgeries.",
        cardMore: "View Details",
        footerAbout: "Committed to delivering world-class medical advances to Iraqi healthcare institutions with complete safety and long-term reliability.",
        footerQuick: "Quick Links",
        footerContact: "Contact Information"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Language Switcher (Ar / En)
    let currentLang = 'ar';
    const langBtn = document.getElementById('langBtn');
    const langText = document.getElementById('langText');

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            
            // Toggle HTML Language & Direction
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

            // Toggle Font Family Class
            if (currentLang === 'en') {
                document.body.classList.remove('font-cairo');
                document.body.classList.add('font-plus');
                langText.textContent = 'العربية';
            } else {
                document.body.classList.remove('font-plus');
                document.body.classList.add('font-cairo');
                langText.textContent = 'English';
            }

            // Translate Text Elements
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (i18nData[currentLang][key]) {
                    element.textContent = i18nData[currentLang][key];
                }
            });
        });
    }

    // 3. Stats Counter Animation on Scroll
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = target / 50;

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    window.addEventListener('scroll', () => {
        const counterSection = document.querySelector('.counter');
        if (counterSection) {
            const sectionPos = counterSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight;

            if (sectionPos < screenPos && !hasCounted) {
                startCounters();
                hasCounted = true;
            }
        }
    });

});



// ==========================================
// Hospitals & Equipment Data Array
// ==========================================
const hospitalsData = [
    { id: 1, name: "مستشفى الجهاز الهضمي", dept: "دائرة صحة النجف الأشرف", sector: "حكومي", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 2, name: "مستشفى الزهراء التعليمي", dept: "دائرة صحة النجف الأشرف", sector: "حكومي", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 3, name: "مستشفى الحكيم", dept: "دائرة صحة النجف الأشرف", sector: "حكومي", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 4, name: "مستشفى النجف التعليمي", dept: "دائرة صحة النجف الأشرف", sector: "حكومي", detail: "K Synergy 4 جهاز ناظور الكسور (الألماني)", qty: 1 },
    { id: 5, name: "مستشفى الرمادي التعليمي", dept: "دائرة صحة الأنبار", sector: "حكومي", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 6, name: "مستشفى الفلوجة التعليمي", dept: "دائرة صحة الأنبار", sector: "حكومي", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 3 },
    { id: 7, name: "مستشفى هيت العام", dept: "دائرة صحة الأنبار", sector: "حكومي", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 8, name: "مستشفى المجمع الكويتي", dept: "دائرة صحة البصرة", sector: "حكومي", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 9, name: "مستشفى بعقوبة التعليمي", dept: "دائرة صحة ديالى", sector: "حكومي", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 10, name: "مستشفى بعقوبة التعليمي", dept: "دائرة صحة ديالى", sector: "حكومي", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 11, name: "المستشفى البحثي", dept: "دائرة صحة نينوى", sector: "حكومي", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 12, name: "مستشفى رويال الملكي (حي الجامعة)", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 13, name: "مستشفى رويال الملكي (حي الجامعة)", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 14, name: "مستشفى رويال الملكي (شارع فلسطين)", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 15, name: "مستشفى رويال الملكي (السيدية)", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 16, name: "مستشفى رويال الملكي (السيدية)", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 17, name: "مستشفى البدور الأهلي", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 18, name: "مستشفى راهبات الحياة", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 19, name: "مستشفى الأمير الأهلي", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 20, name: "مستشفى الأمير الأهلي", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 2 },
    { id: 21, name: "مستشفى الحياة الأهلي", dept: "البصرة - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 2 },
    { id: 22, name: "مستشفى النبأ العظيم", dept: "البصرة - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 23, name: "مستشفى الفراهيدي الأهلي", dept: "البصرة - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 24, name: "مستشفى ضفاف الفرات", dept: "البصرة - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 25, name: "مستشفى ابن البيطار", dept: "البصرة - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 26, name: "مستشفى الموسوي الأهلي", dept: "البصرة - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 27, name: "مستشفى الأمير الأهلي", dept: "النجف الأشرف - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 2 },
    { id: 28, name: "مستشفى الزهراوي الأهلي", dept: "الموصل - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 2 },
    { id: 29, name: "مستشفى الرازي الأهلي", dept: "الرمادي - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 30, name: "مستشفى أربيل الدولي", dept: "أربيل - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 31, name: "مستشفى ورد الأهلي", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 2 },
    { id: 32, name: "مستشفى ورد الأهلي", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 33, name: "مستشفى واسط الاستثماري", dept: "واسط - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 34, name: "مستشفى دجلة الأهلي", dept: "واسط - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 35, name: "مستشفى السبطين", dept: "البصرة - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 36, name: "عيادة فلسطين الجراحية", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 37, name: "عيادة فلسطين الجراحية", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة عامة", qty: 1 },
    { id: 38, name: "عيادة فلسطين الجراحية", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة بولية", qty: 1 },
    { id: 39, name: "عيادة فلسطين الجراحية", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 تجهيز ناظور جراحة نسائية", qty: 1 },
    { id: 40, name: "مستشفى قوى الأمن الداخلي", dept: "وزارة الداخلية", sector: "حكومي", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 41, name: "مستشفى جامعة العين", dept: "ذي قار - القطاع الخاص", sector: "خاص", detail: "ناظور جراحة العمود الفقري", qty: 1 },
    { id: 42, name: "مستشفى دجلة الأهلي", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور الكسور", qty: 1 },
    { id: 43, name: "مستشفى يحيى الأهلي", dept: "بغداد - القطاع الخاص", sector: "خاص", detail: "K Synergy 4 جهاز ناظور العمود الفقري", qty: 1 }
];

// Render Table Function
// Render Table Function (بدون عمود عدد القطع)
function renderHospitalsTable(data) {
    const tbody = document.getElementById('hospitalsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    data.forEach((item) => {
        const row = document.createElement('tr');
        row.className = "hover:bg-slate-50 transition duration-150";
        row.innerHTML = `
            <td class="p-4 text-center font-bold text-slate-400">${item.id}</td>
            <td class="p-4 font-black text-slate-900">${item.name}</td>
            <td class="p-4 text-slate-600">
                <span class="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold ${item.sector === 'حكومي' ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-blue-50 text-blue-800 border border-blue-100'}">
                    ${item.dept}
                </span>
            </td>
            <td class="p-4 text-slate-700">${item.detail}</td>
        `;
        tbody.appendChild(row);
    });
}

// Search Function
function searchHospitals() {
    const query = document.getElementById('hospitalSearch').value.toLowerCase();
    const filtered = hospitalsData.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.dept.toLowerCase().includes(query) ||
        item.detail.toLowerCase().includes(query)
    );
    renderHospitalsTable(filtered);
}

// Filter Tabs Function
function filterHospitals(type) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-medical-700', 'text-white', 'shadow-md');
        btn.classList.add('bg-slate-100', 'text-slate-700');
    });

    event.target.classList.remove('bg-slate-100', 'text-slate-700');
    event.target.classList.add('bg-medical-700', 'text-white', 'shadow-md');

    if (type === 'all') {
        renderHospitalsTable(hospitalsData);
    } else if (type === 'حكومي') {
        renderHospitalsTable(hospitalsData.filter(h => h.sector === 'حكومي'));
    } else if (type === 'خاص') {
        renderHospitalsTable(hospitalsData.filter(h => h.sector === 'خاص'));
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderHospitalsTable(hospitalsData);
});


// Function to toggle hospitals table visibility
function toggleHospitalsContainer() {
    const container = document.getElementById('hospitalsContainer');
    const arrow = document.getElementById('toggleArrow');
    const btnText = document.getElementById('toggleBtnText');

    if (container.classList.contains('hidden')) {
        // إظهار الجدول
        container.classList.remove('hidden');
        setTimeout(() => {
            container.classList.remove('opacity-0', '-translate-y-2');
            container.classList.add('opacity-100', 'translate-y-0');
        }, 20);
        
        arrow.style.transform = 'rotate(180deg)';
        btnText.innerText = 'إخفاء جدول المستشفيات والتجهيزات';
    } else {
        // إخفاء الجدول
        container.classList.remove('opacity-100', 'translate-y-0');
        container.classList.add('opacity-0', '-translate-y-2');
        
        setTimeout(() => {
            container.classList.add('hidden');
        }, 300);
        
        arrow.style.transform = 'rotate(0deg)';
        btnText.innerText = 'عرض جدول المستشفيات والتجهيزات (43)';
    }
}

// ==========================================
// Iraq Map Interactive Data
// ==========================================
const provincesData = {
    baghdad: {
        name: "بغداد",
        count: "25 مشروع",
        hospitals: [
            "مستشفى رويال الملكي (حي الجامعة، شارع فلسطين، السيدية)",
            "مستشفى البدور الأهلي - مستشفى الأمير الأهلي",
            "مستشفى راهبات الحياة - مستشفى قوى الأمن الداخلي",
            "مستشفى دجلة الأهلي - مستشفى يحيى الأهلي"
        ]
    },
    basra: {
        name: "البصرة",
        count: "14 مشروع",
        hospitals: [
            "مستشفى المجمع الكويتي - مستشفى الحياة الأهلي",
            "مستشفى النبأ العظيم - مستشفى الفراهيدي الأهلي",
            "مستشفى ضفاف الفرات - مستشفى ابن البيطار",
            "مستشفى الموسوي الأهلي - مستشفى السبطين"
        ]
    },
    najaf: {
        name: "النجف الأشرف",
        count: "10 مشاريع",
        hospitals: [
            "مستشفى الجهاز الهضمي - مستشفى الزهراء التعليمي",
            "مستشفى الحكيم - مستشفى النجف التعليمي",
            "مستشفى الأمير الأهلي"
        ]
    },
    anbar: {
        name: "الأنبار",
        count: "6 مشاريع",
        hospitals: [
            "مستشفى الرمادي التعليمي - مستشفى الفلوجة التعليمي",
            "مستشفى هيت العام - مستشفى الرازي الأهلي"
        ]
    },
    erbil: {
        name: "أربيل",
        count: "3 مشاريع",
        hospitals: [
            "مستشفى أربيل الدولي"
        ]
    },
    ninawa: {
        name: "نينوى",
        count: "4 مشاريع",
        hospitals: [
            "المستشفى البحثي - مستشفى الزهراوي الأهلي"
        ]
    }
};

// Function to handle province click
function selectProvince(provKey) {
    const data = provincesData[provKey];
    if (!data) return;

    // Remove active style from all paths
    document.querySelectorAll('.province-path').forEach(p => p.classList.remove('active-province'));
    
    // Add active style to selected province
    const activePath = document.getElementById(provKey);
    if (activePath) activePath.classList.add('active-province');

    // Update UI Card
    document.getElementById('provName').innerText = data.name;
    document.getElementById('provCount').innerText = data.count;

    const listContainer = document.getElementById('provHospitals');
    listContainer.innerHTML = '';
    
    data.hospitals.forEach(hosp => {
        const li = document.createElement('li');
        li.className = "flex items-center gap-2 bg-slate-900/50 p-2.5 rounded-xl border border-slate-700/30";
        li.innerHTML = `<i class="fa-solid fa-circle-check text-accent-gold text-xs"></i> <span>${hosp}</span>`;
        listContainer.appendChild(li);
    });
}

// Default select Baghdad on page load
document.addEventListener('DOMContentLoaded', () => {
    selectProvince('baghdad');
});

// Initialize Certificates Swiper
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.certsSwiper')) {
        new Swiper('.certsSwiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }
});
