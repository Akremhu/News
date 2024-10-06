// دالة لعرض التفاصيل الخاصة بكل خبر
function showDetails(details) {
    // إنشاء نافذة منبثقة لعرض تفاصيل الخبر
    let overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // إنشاء محتوى النافذة المنبثقة
    let popup = document.createElement('div');
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.maxWidth = '500px';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    popup.innerHTML = `
        <h2 style="margin-top: 0;">تفاصيل الخبر</h2>
        <p>${details}</p>
        <button id="closePopup" style="
            padding: 10px 20px;
            background-color: #f39c12;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1.1em;
            margin-top: 20px;">إغلاق</button>
    `;

    // إضافة النافذة والمحتوى إلى الصفحة
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // دالة إغلاق النافذة المنبثقة
    document.getElementById('closePopup').addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
}

// دالة للانتقال السلس بين الأقسام في الصفحة
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 20, // التمرير إلى القسم المطلوب مع مسافة صغيرة من الأعلى
            behavior: 'smooth' // الانتقال السلس
        });
    });
});
