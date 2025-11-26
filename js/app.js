/* js/app.js */

function navigateTo(pageId) {
    // 1. مخفی کردن همه صفحات
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });

    // 2. نمایش صفحه هدف
    const targetPage = document.getElementById(pageId);
    if(targetPage) {
        targetPage.style.display = 'block';
        // استفاده از setTimeout برای اعمال انیمیشن fadeIn
        setTimeout(() => {
            targetPage.classList.add('active');
        }, 10);
    }

    // 3. مدیریت نمایش/مخفی کردن هدر و نویگیشن بار اصلی
    const isWizardPage = pageId.startsWith('ex-mm-');
    const mainHeader = document.getElementById('main-header');
    const bottomNavBar = document.getElementById('bottom-nav-bar');
    const contentArea = document.querySelector('.content-area');

    if (isWizardPage) {
        if(mainHeader) mainHeader.style.display = 'none';
        if(bottomNavBar) bottomNavBar.style.display = 'none';
        if(contentArea) contentArea.style.marginTop = '20px';
    } else {
        if(mainHeader) mainHeader.style.display = 'flex';
        if(bottomNavBar) bottomNavBar.style.display = 'flex';
        if(contentArea) contentArea.style.marginTop = '70px';
    }

    // 4. مدیریت اکتیو بودن دکمه‌های پایین (Navigation State)
    if (!isWizardPage) {
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        
        if (pageId === 'home') {
            document.getElementById('btn-home')?.classList.add('active');
        }
        else if (['exercises', 'be-present-list', 'open-up-list', 'do-what-matters-list', 'self-compassion-list'].includes(pageId)) {
            document.getElementById('btn-exercises')?.classList.add('active');
        }
        else if (['tools', 'notifications'].includes(pageId)) {
            document.getElementById('btn-tools')?.classList.add('active');
        }
        else if (pageId === 'profile') {
            document.getElementById('btn-profile')?.classList.add('active');
        }
    }

    // اسکرول به بالای صفحه هنگام تغییر تب
    if(contentArea) contentArea.scrollTop = 0;
}

// راه‌اندازی اولیه (اختیاری)
document.addEventListener('DOMContentLoaded', () => {
    // مطمئن شویم صفحه خانه در ابتدا نمایش داده می‌شود
    // navigateTo('home'); 
    // (این خط کامنت شده چون کلاس 'active' در HTML روی خانه هست، اما برای اطمینان می‌توان فعال کرد)
});
