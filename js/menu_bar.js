const menu = document.querySelector('#nav');
const toggelIcon = document.getElementById('toggel')
// console.log(menu, toggelIcon);
toggelIcon.addEventListener('click', () => {
    // console.log(menu, display);
    if (menu.style.display == "none") {
        menu.style.display = "flex";
    }
    else {
        menu.style.display = "none";
    }
        
    })
    