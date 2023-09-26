

fetch("http://localhost:5678/api/works")
.then(function(response) {
    return response.json();
})
.then(function(response){
    console.log(response);

    let galleryContent = document.querySelector('.gallery');

    response.forEach(element => {
        let figure = document.createElement('figure');
        let figcaption = document.createElement('figcaption');
        let images = document.createElement('img');
        let classCategory = element.category.name.replace(/ /g,'_')
        figure.classList.add(classCategory)
        figcaption.textContent = element.title;
        images.src = element.imageUrl;

        figure.appendChild(images);
        figure.appendChild(figcaption);
        galleryContent.appendChild(figure);
    });
})
.catch(function(error) {
    console.error('Une erreur s\'est produite : ', error);
});



fetch("http://localhost:5678/api/categories")
.then(function(response) {
    return response.json();
})
.then(function(response){
    console.log(response);

    let categoriesArray = document.querySelector('#portfolio');
    let firstchild = categoriesArray.firstChild

    let btn = document.createElement('btn')
        btn.textContent = "Tous"
        btn.classList.add("categoriesBtn")
        categoriesArray.insertBefore(btn,firstchild)
    
        response.forEach(element => {
        let btn = document.createElement('btn')
        btn.classList.add("categoriesBtn")
        btn.textContent = element.name
        categoriesArray.insertBefore(btn,firstchild)

        
        
        

        
        

        
    });
})
.catch(function(error) {
    console.error('Une erreur s\'est produite : ', error);
});


          



