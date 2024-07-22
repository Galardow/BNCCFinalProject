function seeMore(id) {
    const element = document.getElementById(id);
    const img = element.querySelector('img');
    const p = element.querySelector('#eduname');
    const moreInfo = element.querySelector('.info');
    const seemore = element.querySelector('#seemore')

    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        img.style.display = 'none';
        p.style.display = 'none';
        moreInfo.style.display = 'flex';
        seemore.textContent = 'Back';
    } else {
        img.style.display = 'block';
        p.style.display = 'block';
        moreInfo.style.display = 'none';
        seemore.textContent = 'See More';
    }
}

function page1() {
    const btn8 = document.getElementById('btn-div8')
    const btn1 = document.getElementById('btn-div1')
    const btn2 = document.getElementById('btn-div2')
    const por8 = document.getElementById('port8')
    const port1 = document.getElementById('port1')
    const port2 = document.getElementById('port2')
    port8.style.display = 'none'
    port1.style.display = 'flex'
    port2.style.display = 'none'
    btn8.style.display = 'none'
    btn1.style.display = 'flex'
    btn2.style.display = 'none'
}
function page2() {
    const btn1 = document.getElementById('btn-div1')
    const btn2 = document.getElementById('btn-div2')
    const btn3 = document.getElementById('btn-div3')
    const port1 = document.getElementById('port1')
    const port2 = document.getElementById('port2')
    const port3 = document.getElementById('port3')
    port1.style.display = 'none'
    port2.style.display = 'flex'
    port3.style.display = 'none'
    btn1.style.display = 'none'
    btn2.style.display = 'flex'
    btn3.style.display = 'none'
}
function page3() {
    const btn2 = document.getElementById('btn-div2')
    const btn3 = document.getElementById('btn-div3')
    const btn4 = document.getElementById('btn-div4')
    const port2 = document.getElementById('port2')
    const port3 = document.getElementById('port3')
    const port4 = document.getElementById('port4')
    port2.style.display = 'none'
    port3.style.display = 'flex'
    port4.style.display = 'none'
    btn2.style.display = 'none'
    btn3.style.display = 'flex'
    btn4.style.display = 'none'
}
function page4() {
    const btn3 = document.getElementById('btn-div3')
    const btn4 = document.getElementById('btn-div4')
    const btn5 = document.getElementById('btn-div5')
    const port3 = document.getElementById('port3')
    const port4 = document.getElementById('port4')
    const port5 = document.getElementById('port5')
    port3.style.display = 'none'
    port4.style.display = 'flex'
    port5.style.display = 'none'
    btn3.style.display = 'none'
    btn4.style.display = 'flex'
    btn5.style.display = 'none'
}
function page5() {
    const btn4 = document.getElementById('btn-div4')
    const btn5 = document.getElementById('btn-div5')
    const btn6 = document.getElementById('btn-div6')
    const port4 = document.getElementById('port4')
    const port5 = document.getElementById('port5')
    const port6 = document.getElementById('port6')
    port4.style.display = 'none'
    port5.style.display = 'flex'
    port6.style.display = 'none'
    btn4.style.display = 'none'
    btn5.style.display = 'flex'
    btn6.style.display = 'none'
}

function page6() {
    const btn5 = document.getElementById('btn-div5')
    const btn6 = document.getElementById('btn-div6')
    const btn7 = document.getElementById('btn-div7')
    const port5 = document.getElementById('port5')
    const port6 = document.getElementById('port6')
    const port7 = document.getElementById('port7')
    port5.style.display = 'none'
    port6.style.display = 'flex'
    port7.style.display = 'none'
    btn5.style.display = 'none'
    btn6.style.display = 'flex'
    btn7.style.display = 'none'
}

function page7() {
    const btn6 = document.getElementById('btn-div6')
    const btn7 = document.getElementById('btn-div7')
    const btn8 = document.getElementById('btn-div8')
    const port6 = document.getElementById('port6')
    const port7 = document.getElementById('port7')
    const port8 = document.getElementById('port8')
    port6.style.display = 'none'
    port7.style.display = 'flex'
    port8.style.display = 'none'
    btn6.style.display = 'none'
    btn7.style.display = 'flex'
    btn8.style.display = 'none'
}

function page8() {
    const btn7 = document.getElementById('btn-div7')
    const btn8 = document.getElementById('btn-div8')
    const btn1 = document.getElementById('btn-div1')
    const port7 = document.getElementById('port7')
    const port8 = document.getElementById('port8')
    const port1 = document.getElementById('port1')
    port7.style.display = 'none'
    port8.style.display = 'flex'
    port1.style.display = 'none'
    btn7.style.display = 'none'
    btn8.style.display = 'flex'
    btn1.style.display = 'none'
}

function whatsapp() {
    window.location.href = "https://wa.me/+62895367178069"
}

function instagram() {
    window.location.href = "https://www.instagram.com/galardoww_/"
}

const navbar = document.getElementById('navbar')
const navmenu1 = document.querySelector('.nav-menu-1')
const navmenu2 = document.querySelector('.nav-menu-2')
const navmenu3 = document.querySelector('.nav-menu-3')
const navmenu4 = document.querySelector('.nav-menu-4')
const navmenu5 = document.querySelector('.nav-menu-5')
const menu = document.querySelector('.menu')

menu.onclick = () => {
    navbar.classList.toggle('active')
    navmenu1.classList.toggle('active')
    navmenu2.classList.toggle('active')
    navmenu3.classList.toggle('active')
    navmenu4.classList.toggle('active')
    navmenu5.classList.toggle('active')
}