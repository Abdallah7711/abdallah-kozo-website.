// الرسالة الترحيبية تتحرك من اليسار لليمين بشكل تدريجي
const welcomeMessage = document.getElementById("welcome-message");
let messageText = welcomeMessage.textContent;
let index = 0;
welcomeMessage.textContent = "";

// عرض الرسالة الترحيبية حرفًا حرفًا
function typeMessage() {
    if (index < messageText.length) {
        welcomeMessage.textContent += messageText[index];
        index++;
        setTimeout(typeMessage, 100); // سرعة الكتابة
    }
}

typeMessage();

// عدد الزوار (يمكن تعديله حسب طريقة احتساب الزوار في الموقع الفعلي)
let visitorCount = 0;
const visitorCountElement = document.getElementById("visitor-count");

// تحديث عدد الزوار كل خمس ثوانٍ (للتجربة)
setInterval(() => {
    visitorCount++;
    visitorCountElement.textContent = visitorCount;
}, 5000);
