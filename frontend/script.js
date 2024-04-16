document.querySelector('.traduire').addEventListener('click', search)
let input = document.querySelector('.saisir');
let guis = document.querySelector('.affiche')

function search(){
  if(input.value !== '' ){
    fetch('http://localhost:1337/api/frs/?populate=*',
  {
  method: "GET",
  headers: {
    'Accept': 'Application/json'
  }
  })
  .then(res => res.json())
  .then(res =>{
    
    console.log(res.data);
    // Parcourir toutes les entrées reçues de l'API

    for (let i = 0; i < res.data.length; i++) {
      let word = res.data[i].attributes.mot; // Le mot dans la langue source

      // Vérifier si le mot saisi correspond au mot de la base de données
      if (input.value.toLowerCase() === word.toLowerCase()) {
        let translation = res.data[i].attributes.guisira.data.attributes.traduction; // La traduction du mot
        guis.innerHTML = translation; // Afficher la traduction
        break; // Sortir de la boucle car on a trouvé la traduction
      }else{
        let word = res.data[i].attributes.guisira.data.attributes.traduction; // Le mot dans la langue source

      // Vérifier si le mot saisi correspond au mot de la base de données
      if (input.value.toLowerCase() === word.toLowerCase()) {
        let translation = res.data[i].attributes.mot; // La traduction du mot
        guis.innerHTML = translation; // Afficher la traduction
        break; // Sortir de la boucle car on a trouvé la traduction
      }
      }
    }

    // for (let i = 0; i < res.data.length; i++) {
    //   let word = res.data[i].attributes.guisira.data.attributes.traduction; // Le mot dans la langue source

    //   // Vérifier si le mot saisi correspond au mot de la base de données
    //   if (input.value.toLowerCase() === word.toLowerCase()) {
    //     let translation = res.data[i].attributes.mot; // La traduction du mot
    //     guis.innerHTML = translation; // Afficher la traduction
    //     console.log(translation); // Afficher la traduction dans la console pour le debug
    //     translationFound = true; // Marquer qu'une traduction a été trouvée
    //     break; // Sortir de la boucle car on a trouvé la traduction
    //   }
    // }

    // let mot = res.data[0].attributes.mot
    // let tex = input.value
    // if (input.value === mot){
    //   console.log(mot)
    //   guis.innerHTML = res.data[0].attributes.guisira.data.attributes.traduction
    //   console.log(guis)

    // }else if(input.value === mot){
    //   let mot2 = res.data[1].attributes.mot
    //   console.log(mot)
    //   guis.innerHTML = res.data[1].attributes.guisira.data.attributes.traduction
    //   console.log(guis)
    // }else if(input.value === mot){
    //   let mot2 = res.data[2].attributes.mot
    //   console.log(mot)
    //   guis.innerHTML = res.data[2].attributes.guisira.data.attributes.traduction
    //   console.log(guis)
    // }

    
  })
}

}


