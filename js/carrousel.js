(function(){
    // fonction IFEE
    console.log('début du carrousel')
    let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = document.querySelectorAll('img')
    console.log(elmGalerie__img.length)
    for (const elmImg of elmGalerie__img){
        
    }

    console.log(bouton__ouvrir.tagName)
    
    bouton__ouvrir.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.add('carrousel--ouvrir')
    })
    elmBouton__x.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })
    
    
    })()

/* (function(){
    // fonction IFEE
    console.log('debut du carrousel')
    let boutonouvrir = document.querySelector('.bouton_ouvrir')
    let elmCarrousel = document.quuerySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    console.log(boutonouvrir.tagName)
    bouton__ouvrir.addeventlistener('mousedown', function(){
        console.log('boite modale')
        elmCarrousel.classlist.add('carrousel--ouvrir')
    })
    elmBouton__x.addeventlistener('mousedown', function(){
        console.log('boite modale')
        elmCarrousel.classlist.add('carrousel--ouvrir')
    })
})() */