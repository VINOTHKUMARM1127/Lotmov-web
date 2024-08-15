var icon = document.getElementById('icon');
    icon.onclick = function(){
    document.body.classList.toggle('dark-mode')
    const wasDm = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDm);
    }
function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}


function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.movies');
    let l = document.getElementsByTagName('h1');

    for(var i = 0;i<=l.length;i++){
    let a=item[i].getElementsByTagName('h1')[0];
    let value=a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
    item[i].style.display="";
    }
    else
    {
    item[i].style.display="none";
    }
    }
    }