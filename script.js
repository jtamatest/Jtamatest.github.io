


function toggleMenu() {
  const menu = document.getElementById('menu');
  const menuIcon = document.querySelector('.menu-icon');
  if (menu) {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('hide'); // ✅ ซ่อน/โชว์สามขีด
  }
}


// เมื่อโหลดหน้าเสร็จให้เฟดอิน .fade-in-text
window.addEventListener('load', function () {
  const title = document.querySelector('.fade-in-text');
  if (title) {
    title.classList.add('show');
  }
});



// โหลดข้อความจากไฟล์ about-us.txt แล้วแสดงใน <p id="about-text">
fetch('aboutustxt.txt')
  .then(response => response.text())
  .then(data => {
    const aboutEl = document.getElementById('about-us').innerHTML = data;  //;
    if (aboutEl) {
      aboutEl.textContent = data;
    }
  })
  .catch(error => {
    console.error('Error loading aboutustxt.txt:', error);
  });
  
  