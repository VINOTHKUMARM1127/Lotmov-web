var icon = document.getElementById('icon');
    icon.onclick = function(){
    document.body.classList.toggle('dark-mode')
    const wasDm = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDm);
    }
function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}

    const menu = document.querySelector('.menu')
    const menuList = document.querySelector('nav ul')
    menu.addEventListener('click',()=>{
        menuList.classList.toggle('show')
    })