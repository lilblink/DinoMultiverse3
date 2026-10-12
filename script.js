function flipAnimal(cardId) {

    const card = document.getElementById(cardId);

    card.classList.toggle("flipped");

}



// อิโมจิที่ใช้ตกลงมา
const snowEmojis = ["🦖", "🦕", "🦴", "✨", "🍃"];

// กล่องเอฟเฟกต์หิมะ
const snowContainer = document.querySelector(".emoji-snow");

// สร้างอิโมจิ 18 ตัว
for (let i = 0; i < 18; i++) {
    const emoji = document.createElement("span");

    // เลือกอิโมจิแบบสุ่ม
    emoji.textContent =
        snowEmojis[Math.floor(Math.random() * snowEmojis.length)];

    // สุ่มตำแหน่งและความเร็ว
    emoji.style.left = Math.random() * 100 + "%";
    emoji.style.fontSize = (12 + Math.random() * 14) + "px";
    emoji.style.animationDuration = (5 + Math.random() * 7) + "s";
    emoji.style.animationDelay = (-Math.random() * 12) + "s";

    // เพิ่มลงในหน้าเว็บ
    snowContainer.appendChild(emoji);
}


