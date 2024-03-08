// For toggling between dark theme and light theme
const theme = () => {
    var radios = document.querySelectorAll('input[name="theme"');
    var dark = document.getElementById("dark");
    var light = document.getElementById("light");
    
    const preferColorScheme = window.matchMedia('(prefers-color-scheme:dark)');
    if(preferColorScheme.matches) {
        document.getElementById("dark").checked = true;
    }
    else{
        document.getElementById("light").checked = true;
    }
    
    const theme_changer = () => {
        for(let radio of radios) {
            if(radio.checked) {
                document.querySelector('body').classList = radio.value;
                radio.checked = true;
            }
        }
    }
    
    dark.addEventListener('click', theme_changer);
    light.addEventListener('click', theme_changer);
}


// To animate number increase
const numberIncrease = () => {
    const id_list = ['fcount', 'ycount'];
    for(let id of id_list) {
        const incEltNbr = (id) => {
            let elt = document.getElementById(id);
            let endNbr = Number(document.getElementById(id).innerHTML);
            console.log(endNbr);
            incNbrRec(0, endNbr, elt);
            elt.innerHTML = endNbr;
        }
        const incNbrRec = (i, endNbr, elt) => {
            if(i<endNbr){
                elt.innerHTML = i;
                setTimeout(()=> {
                    incNbrRec(i+10, endNbr, elt);
                }, 0);
            }
            else if(endNbr-i > 0) {
                elt.innerHTML = i;
                setTimeout(() => {
                    incNbrRec(i+1, endNbr, elt);
                }, 1);
            }
        }
        incEltNbr(id);
    }
}

const myFunction = () => {
    console.log('working');
}


theme();
numberIncrease();