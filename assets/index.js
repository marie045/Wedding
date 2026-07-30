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
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">阿部 泰典</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">小酒井 慶司</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">錦織 広征</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">山崎 祐亮</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">伊藤 貴広</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">坂口 天太</p></div>
    </div>
    `,
  B: `
    <h2>Table B</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">前沢 健太</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">早野 航平</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">柏崎 吉彦</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">山口 沙和</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">内藤 雅文</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">上原 慎二郎</p></div>
      <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">小澤 治史</p></div>
    </div>
    `,
  C: `
    <h2>Table C</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">濱崎 カロリナキアラ</p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">坂部 カリナニコル</p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">宮島 景虎</p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">長谷川 航汰</p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">井上 慶彦</p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">丸岡 将</p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">水上 大輝</p></div>
    </div>
    `,
  D: `
    <h2>Table D</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">星野 周太郎</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">上原 壮太郎</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">酒井 健</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">髙橋 大咲</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">篠﨑 菜花</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">日浦 明美</p></div>
    </div>
    `,
  E: `
    <h2>Table E</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">大嶺 直樹</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">仲座 クリストファ光樹</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">遠藤 秀伍</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">小原 久和</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">山田 一太朗</p></div>
      <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">川原 優人</p></div>
    </div>
    `,
  F: `
    <h2>Table F</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎新婦 友人</p><p class="guest-list-name">多々納 芙実</p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">福田 まりや</p></div>
      <div class="guest"><p class="guest-list-title">新郎新婦 友人</p><p class="guest-list-name">西 海人</p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">伊澤 丈真</p></div>
      <div class="guest"><p class="guest-list-title">新郎新婦 友人</p><p class="guest-list-name">長原 寛汰</p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">小杉 稀美</p></div>
      <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 友人</p><p class="guest-list-name">阿井 麻那美</p></div>
    </div>
    `,
  G: `
    <h2>Table G</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新郎 叔父</p><p class="guest-list-name">鷲頭 竜彦</p></div>
      <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従弟</p><p class="guest-list-name">鷲頭 橙真</p></div>
      <div class="guest"><p class="guest-list-title">新郎 来賓</p><p class="guest-list-name">廣木 倫子</p></div>
      <div class="guest"><p class="guest-list-title">新郎 叔母</p><p class="guest-list-name">鷲頭 貴子</p></div>
      <div class="guest"><p class="guest-list-title">新郎 祖母</p><p class="guest-list-name">近藤 フジ子</p></div>
      <div class="guest"><p class="guest-list-title">新郎 祖母</p><p class="guest-list-name">関 光子</p></div>
      <div class="guest"><p class="guest-list-title">新郎 叔父</p><p class="guest-list-name">近藤 明史</p></div>
      <div class="guest"><p class="guest-list-title">新郎 母</p><p class="guest-list-name">近藤 博代</p></div>
      <div class="guest"><p class="guest-list-title">新郎 父</p><p class="guest-list-name">近藤 雄治</p></div>
    </div>
    `,
  H: `
    <h2>Table H</h2>
    <div class="guest-list">
    <div class="guest"><p class="guest-list-title">新郎 友人</p><p class="guest-list-name">石井 翔真</p></div>
    <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新郎 従姉</p><p class="guest-list-name">近藤 眞子</p></div>
      <div class="guest"><p class="guest-list-title">新郎 従兄</p><p class="guest-list-name">髙瀨 一樹</p></div>
      <div class="guest"><p class="guest-list-title">新郎 従姪</p><p class="guest-list-name">近藤 日和</p></div>
      <div class="guest"><p class="guest-list-title">新郎 従甥</p><p class="guest-list-name">髙瀨 一桜</p></div>
      <div class="guest"><p class="guest-list-title">新郎 従姪</p><p class="guest-list-name">近藤 日向子</p></div>
      <div class="guest"><p class="guest-list-title">新郎 従姪</p><p class="guest-list-name">髙瀨 椛心</p></div>
      <div class="guest"><p class="guest-list-title">新郎 従兄</p><p class="guest-list-name">近藤 龍之介</p></div>
      <div class="guest"><p class="guest-list-title">新郎 従妹</p><p class="guest-list-name">髙瀨 琴琳</p></div>
    </div>
    `,
  I: `
    <h2>Table I</h2>
    <div class="guest-list">
      <div class="guest"><p class="guest-list-title">新婦 従弟</p><p class="guest-list-name">松森 大河</p></div>
      <div class="guest"><p class="guest-list-title"></p><p class="guest-list-name"></p></div>
      <div class="guest"><p class="guest-list-title">新婦 祖母</p><p class="guest-list-name">松森 れい子</p></div>
      <div class="guest"><p class="guest-list-title">新婦 従弟</p><p class="guest-list-name">松森 武志</p></div>
      <div class="guest"><p class="guest-list-title">新婦 祖父</p><p class="guest-list-name">松森 武夫</p></div>
      <div class="guest"><p class="guest-list-title">新婦 叔父</p><p class="guest-list-name">松森 広志</p></div>
      <div class="guest"><p class="guest-list-title">新婦 母</p><p class="guest-list-name">ビラ 信子</p></div>
      <div class="guest"><p class="guest-list-title">新婦 父</p><p class="guest-list-name">ビラ ジョセフエドワード</p></div>
    </div>
    `,
};
