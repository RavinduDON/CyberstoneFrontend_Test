let button = document.getElementsByClassName('gal-edit-button');
let delButton = document.getElementsByClassName('gal-delete-button');
let input = document.getElementsByClassName('edit-gallery');
let imgs = document.getElementsByClassName('img');

for(let i=0; i<button.length; i++){
    button[i].addEventListener('click', (e)=>{
        e.preventDefault();
        input[i].click();
    });
}

for(let i=0; i<delButton.length; i++){
    delButton[i].addEventListener('click', (e)=>{
        e.preventDefault();
        //when the delete clicked
    });
}



function readURL(input, index){
    console.log(index);
    if(input.files && input.files[0]){
        var reader = new FileReader();

        reader.onload = function (e){
            $(imgs[index])
            .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function remove(index){
    $(imgs[index]).attr('src', '')
}