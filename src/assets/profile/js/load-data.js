const edit_button = document.getElementById('edit-profile');
let description = document.getElementById("description");
let readmore = document.getElementById("readmore");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let website = document.getElementById("website");
let facebook = document.getElementById("facebook");
let instagram = document.getElementById("instagram");
var db = firebase.firestore();

let about = "";
let pp = "";

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      edit_button.style.display = 'block';
      console.log(user.email+" Signed in.");

      db.collection("users").doc(user.uid).onSnapshot(function(doc) {
        let data = doc.data();
        document.getElementById('user-name').innerHTML = data.firstName+" "+data.lastName;
        about = data.about;
        pp = data.packages_prices;
        showabout();

        phone.innerHTML = data.contact.phone;
        email.innerHTML = data.contact.email;
        website.innerHTML = data.contact.website;
        facebook.innerHTML = data.contact.facebook;
        instagram.innerHTML = data.contact.instagram;
      });
    } else {
      // No user is signed in.
      edit_button.style.display = 'none';
      console.log("sign in plz");
    }
  });






//about and pp section
function showabout(){
    description.innerHTML = text(about, 400);
}

function showpp(){
    description.innerHTML = text(pp, 400);
}

let input;
function text(txt, range){
    input = txt;
    let result = txt;

    if(txt.length>range){
        readmore.innerHTML = "(Read more)";
        result = result.slice(0,400)+"...";
    }else{
        readmore.innerHTML = "";
    }
    return result;
}

function Show(){
    if(readmore.textContent=="(Read more)"){
        description.innerHTML = input;
        readmore.innerHTML = "(Read less)";
    }else{
        description.innerHTML = input.slice(0,400)+"...";
        readmore.innerHTML = "(Read more)";
    }
}