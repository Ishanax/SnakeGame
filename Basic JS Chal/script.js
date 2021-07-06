
document.getElementById('searchInput').addEventListener('keyup', function(event){
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');
    console.log(allNamesDOMCollection[1].textContent)

    for ( let counter = 0; counter < allNamesDOMCollection.length; counter++){
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        console.log(currentName);

        if (currentName.includes(searchQuery)){
            allNamesDOMCollection[counter].style.display = "block";
        }else{
            allNamesDOMCollection[counter].style.display = "none";
        }
    }   
})



