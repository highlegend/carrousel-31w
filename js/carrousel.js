(function(){
    // fonction IFEE
    console.log('début du carrousel')
    let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = document.querySelectorAll('img')
    let elmCarrousel_figure = document.querySelector ('.carrousel__figure')
    console.log(elmGalerie__img.length)


    console.log(bouton__ouvrir.tagName)
    
    bouton__ouvrir.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.add('carrousel--ouvrir')
        ajouter_img()
    })
    elmBouton__x.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })

    function ajouter_carrousel()
    {
     for (const elmImg of elmGalerie__img){
        ajouter_img(elmImg) //ajoute l'image dans le carrousel
    }   
    }

    function ajouter_img(elmImg)
    let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrousel__figure.appendChild(elmCarrousel__img)
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