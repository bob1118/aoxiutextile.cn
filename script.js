const zh = {
    title: "浙江奥秀纺织新材料科技有限公司",
    subtitle: "专注高品质纺织面料生产",
    about: "公司简介",
    aboutText: "我们是一家拥有二十年经验的纺织企业，致力于为全球客户提供优质纺织面料。",
    products: "产品展示",
    productNames: ["高档棉布", "优质丝绸", "精美羊毛"],
    contact: "联系我们",
    contactText: "电话：400-888-8888<br>邮箱：info@aoxiutextile.cn<br>地址：浙江海宁经编产业园区经编八路17号",
    footer: "版权所有 © 2025 浙江奥秀纺织新材料科技有限公司"
};

const en = {
    title: "Zhejiang AoXiu Textile New Materials Technology Co., Ltd.",
    subtitle: "Focus on High-Quality Textile Fabric Production",
    about: "About Us",
    aboutText: "We are a textile company with twenty years of experience, dedicated to providing high-quality textile fabrics to customers worldwide.",
    products: "Products",
    productNames: ["Premium Cotton", "Quality Silk", "Fine Wool"],
    contact: "Contact Us",
    contactText: "Tel: +86-400-888-8888<br>Email: info@aoxiutextile.cn<br>Address: No.17 Jingbian 8th Road, Haining warp knitting Industrial Park, Zhejiang, China",
    footer: "© 2025 Zhejiang AoXiu Textile New Materials Technology Co., Ltd. All rights reserved."
};

const zhBtn = document.getElementById('zh-btn');
const enBtn = document.getElementById('en-btn');

function setLang(lang) {
    const dict = lang === 'zh' ? zh : en;
    document.getElementById('title').textContent = dict.title;
    document.getElementById('subtitle').textContent = dict.subtitle;
    document.querySelector('#about h3').textContent = dict.about;
    document.getElementById('about-text').textContent = dict.aboutText;
    document.querySelector('#products h3').textContent = dict.products;
    document.querySelectorAll('.product-name').forEach((el, i) => {
        el.textContent = dict.productNames[i];
    });
    document.querySelector('#contact h3').textContent = dict.contact;
    document.getElementById('contact-text').innerHTML = dict.contactText;
    document.getElementById('footer-text').textContent = dict.footer;
    zhBtn.classList.toggle('active', lang === 'zh');
    enBtn.classList.toggle('active', lang === 'en');
}

zhBtn.addEventListener('click', () => setLang('zh'));
enBtn.addEventListener('click', () => setLang('en'));

// 默认中文
// 根据浏览器语言自动设置
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('zh')) {
    setLang('zh');
} else {
    setLang('en');
}
