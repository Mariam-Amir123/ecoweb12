// script.js

document.addEventListener('DOMContentLoaded', () => {
    let points = 0;

    // عرض النقاط الحالية
    const pointsDisplay = document.getElementById('points');
    pointsDisplay.textContent = points;

    // شراء المنتج
    document.getElementById('buyItem').addEventListener('click', () => {
        if (points >= 10) { // لنفترض أن شراء المنتج يحتاج إلى 10 نقاط
            points -= 10;
            pointsDisplay.textContent = points;
            alert('تم شراء المنتج بنجاح!');
        } else {
            alert('ليس لديك نقاط كافية لشراء هذا المنتج.');
        }
    });

    // تحديث النقاط (مثلاً، زيادة النقاط بعد نشاط معين)
    function updatePoints(amount) {
        points += amount;
        pointsDisplay.textContent = points;
    }

    // مثال لتحديث النقاط
    updatePoints(5); // زيادة 5 نقاط كمثال
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            event.preventDefault(); // منع إرسال النموذج إذا كانت الحقول فارغة
            alert('يرجى ملء جميع الحقول المطلوبة.');
        }
    });
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // مثال لفعالية تجميع الزجاجات البلاستيكية
    const bottleCount = document.getElementById('bottleCount');
    const goal = 50; // لنفترض أن الهدف هو جمع 50 زجاجة

    function updateBottleCount(count) {
        bottleCount.textContent = count;
        if (count >= goal) {
            alert('لقد حققت الهدف! يمكنك استبدال الزجاجات بالمكافآت.');
        }
    }

    // تحديث عدد الزجاجات (مثلاً، بعد جمع زجاجة جديدة)
    updateBottleCount(10); // زيادة 10 زجاجات كمثال
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const rewards = document.querySelectorAll('.rewards-list p');

    rewards.forEach(reward => {
        reward.addEventListener('click', () => {
            alert('تم اختيار كورس: ' + reward.textContent);
        });
    });
});