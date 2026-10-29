const hamburger = document.getElementById("hamburger");
const headerMenu = document.getElementById("header-menu");

if(hamburger){
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    headerMenu.classList.toggle("open");
  });
}

document.querySelectorAll(".header-menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    headerMenu.classList.remove("open");
  });
});
document.addEventListener("click", (e) => {
  if (
    headerMenu.classList.contains("open") &&
    !headerMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    headerMenu.classList.remove("open");
    hamburger.classList.remove("open");
  }
});


const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade")
.forEach(el => observer.observe(el));


const btns = document.querySelectorAll(`.table-btn`);
const sheet = document.querySelector(`.bottom-sheet`);
const close = document.querySelector(`.close`);

const content = document.querySelector('#sheet-content');

btns.forEach(btn => {
  btn.addEventListener('click', () => {

    const table = btn.dataset.table;

    content.innerHTML = tableData[table];

    sheet.classList.add('is-open');

  });
});
if(close){
  close.addEventListener("click", () => {
    sheet.classList.remove("is-open");
  });
}

sheet.addEventListener("click", (e) => {
  if (e.target === sheet) {
    sheet.classList.remove("is-open");
  }
});
// const overlay = document.querySelector(".bottom-sheet-overlay");

// overlay.addEventListener("click", () => {
//   sheet.classList.remove("is-open");
// });


const tableData = {
  A: `
    <h2>Table A</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
    </div>
    `,
  B: `
    <h2>Table B</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
    </div>
    `,
  C: `
    <h2>Table C</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
    </div>
    `,
  D: `
    <h2>Table D</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
    </div>
    `,
  E: `
    <h2>Table E</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
    </div>
    `,
  F: `
    <h2>Table F</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name"></p></div>
    </div>
    `,
  G: `
    <h2>Table G</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎 叔父</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従弟</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 来賓</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 叔母</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 祖母</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 祖母</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 叔父</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 母</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 父</p><p class="guest-list-name"></p></div>
    </div>
    `,
  H: `
    <h2>Table H</h2>
    <div class="guest-list">
    <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name"></p></div>
    <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従姉</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従兄</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従姪</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従甥</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従姪</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従姪</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従兄</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従妹</p><p class="guest-list-name"></p></div>
    </div>
    `,
  I: `
    <h2>Table I</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新婦 従弟</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 祖母</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 従弟</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 祖父</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 叔父</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 母</p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 父</p><p class="guest-list-name"></p></div>
    </div>
    `,
};
