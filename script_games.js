const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', () => {
    // التأكد أن المتصفح يدعم ميزة المشاركة الذكية
    if (navigator.share) {
        navigator.share({
            title: 'موقعي الجديد', // عنوان الموقع عند المشاركة
            text: 'بص على الموقع اللي أنا شغال عليه، هيعجبك!', // رسالة وصفية
            url: window.location.href // هيأخذ رابط الصفحة الحالية تلقائياً
        })
        .then(() => console.log('تم فتح قائمة المشاركة بنجاح'))
        .catch((error) => console.log('المستخدم كنسل أو حصل خطأ:', error));
    } else {
        // رسالة بديلة لو المتصفح قديم جداً ومش بيدعم الميزة
        alert('متصفحك لا يدعم ميزة المشاركة التلقائية.');
    }
});


// 1. تهيئة أداة الترجمة
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'auto' 
    }, 'google_translate_element');
}

// 2. دالة تغيير اللغة
function changeLanguage(lang) {
    document.cookie = "googtrans=/auto/" + lang + "; path=/";
    location.reload();
}

// 3. دالة فتح وإغلاق القائمة (بسيطة جداً)
function toggleTranslateMenu() {
    const dropdown = document.getElementById('languagesDropdown');
    // إذا كانت مخفية أظهرها، وإذا كانت ظاهرة أخفيها
    if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'flex';
    }
}

// 4. إغلاق القائمة عند الضغط في أي مكان خارجها
window.onclick = function(event) {
    const dropdown = document.getElementById('languagesDropdown');
    const btn = document.getElementById('translateBtn');
    if (event.target !== btn && !btn.contains(event.target)) {
        dropdown.style.display = 'none';
    }
}