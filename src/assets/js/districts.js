let colombo = [
    "nugegoda",
    "piliyandala",
    "dehiwala",
    "maharagama",
    "angoda",
    "athurugiriya",
    "avissawella",
    "battharamulla",
    "borelasgamuwa",
    "colombo 1",
    "colombo 2",
    "colombo 3",
    "colombo 4",
    "colombo 5",
    "colombo 6",
    "colombo 7",
    "colombo 8",
    "colombo 9",
    "colombo 10",
    "colombo 11",
    "colombo 12",
    "colombo 13",
    "colombo 14",
    "colombo 15",
    "hanwella",
    "homagama",
    "kaduwela",
    "kesbawa",
    "kohuwala",
    "kolonnawa"
    ];
    let kandy = [
        "kandy",
        "katugastota",
        "gampola",
        "peradeniya",
        "kundasale",
        "akurana",
        "ampitiya",
        "digana",
        "galagedara",
        "gelioya",
        "kadugannawa",
        "madawala bazaar",
        "nawalapitiya",
        "pilimathalawa",
        "wattegama"
    ];
    let galle = [
        "galle",
        "ambalangoda",
        "elpitiya",
        "baddegama",
        "hikkaduwa",
        "ahangama",
        "batapola",
        "bentota",
        "karapitiya"
    ];
    let ampara = [
        "ampara",
        "akkarepattu",
        "kalmunai",
        "sainthamaruthu"
    ];
    let anuradhapura = [
        "anuradhapura",
        "kekirawa",
        "medawachchiya",
        "tambuttegama",
        "eppawala",
        "galenbidunuwewa",
        "galnewa",
        "habarana",
        "mihintale",
        "nochchiyagama",
        "talawa"
    ];
    let badulla = [
        "badulla",
        "bandarawela",
        "welimada",
        "mahiyanganaya",
        "hali ela",
        "diyathalawa",
        "ella",
        "haputale",
        "passara"
    ];
    let batticaloa = [
        "batticaloa"
    ];
    let gampaha = [
        "negambo",
        "gampaha",
        "kiribathgoda",
        "kelaniya",
        "kadawatha",
        "delgoda",
        "divulapitiya",
        "ganemulla",
        "ja-ela",
        "kadana",
        "katunayake",
        "minuwangoda",
        "mirigama",
        "nittambuwa",
        "ragama",
        "veyangoda",
        "wattala"
    ];
    let hambantota = [
        "tangalla",
        "hambantota",
        "beliatta",
        "ambalantota",
        "tissamaharama"
    ];
    let jaffna = [
        "jaffna",
        "nallur",
        "chavakachcheri"
    ];
    let kalutara = [
        "horana",
        "kalutara",
        "panadura",
        "bandaragama",
        "matugama",
        "aluthgama",
        "beruwala",
        "ingiriya",
        "wadduwa"
    ];
    let kegalle = [
        "kegalle",
        "mawanella",
        "warakapola",
        "rambukkana",
        "ruwanwella",
        "dehiowita",
        "deraniyagala",
        "galigamuwa",
        "kitulgala",
        "yatiyantota"
    ];
    let kilinochchi = [
        "kilinochchi"
    ];
    let kurunegala = [
        "kurunegala",
        "kuliyapitiya",
        "narammala",
        "pannala",
        "wariyapola",
        "alawwa",
        "bingiriya",
        "galgamuwa",
        "giriulla",
        "hettipola",
        "ibbagamuwa",
        "mawathagama",
        "nikaweratiya",
        "polgahawela"
    ];
    let mannar = [
        "mannar"
    ];
    let matale = [
        "matale",
        "dambulla",
        "galewela",
        "ukuwela",
        "palapathwela",
        "rattota",
        "sigiriya",
        "yatawatta"
    ];
    let matara = [
        "matara",
        "weligama",
        "akuressa",
        "hakmana",
        "dikwella",
        "deniyaya",
        "kamburugamuwa",
        "kamburupitiya",
        "kekanadura"
    ];
    let moneragala = [
        "moneragala",
        "wellawaya",
        "bibile",
        "buttala",
        "kataragama"
    ];
    let mullativu = [
        "mullativu"
    ];
    let nuwaraeliya = [
        "nuwaraeliya",
        "hatton",
        "ginigathhena",
        "madulla"
    ];
    let polonnaruwa = [
        "polonnaruwa",
        "kaduruwela",
        "higurakgoda",
        "medirigiriya"
    ];
    let puttalam = [
        "chilaw",
        "wennappuwa",
        "puttalam",
        "nattandiya",
        "dankotuwa",
        "marawila"
    ];
    let ratnapura = [
        "ratnapura",
        "embilipitiya",
        "pelmadulla",
        "balangoda",
        "eheliyagoda",
        "kuruwita"
    ];
    let trincomalee = [
        "trincomalee",
        "kinniya"
    ];
    let vavuniya = [
        "vavuniya"
    ];
    
    let district = document.getElementById("district");
    let town = document.getElementById("towns");

    function setTown(){
        let selectedDistrict = district.options[district.selectedIndex].value;
        if(selectedDistrict == "Ampara"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<ampara.length; i++){
                town.innerHTML += "<option value="+ampara[i]+">"+ampara[i]+"</option>";
            }
        }else if(selectedDistrict == "Anuradhapura"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<anuradhapura.length; i++){
                town.innerHTML += "<option value="+anuradhapura[i]+">"+anuradhapura[i]+"</option>";
            }
        }else if(selectedDistrict == "Badulla"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<badulla.length; i++){
                town.innerHTML += "<option value="+badulla[i]+">"+badulla[i]+"</option>";
            }
        }else if(selectedDistrict == "Batticaloa"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<batticaloa.length; i++){
                town.innerHTML += "<option value="+batticaloa[i]+">"+batticaloa[i]+"</option>";
            }
        }else if(selectedDistrict == "Colombo"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<colombo.length; i++){
                town.innerHTML += "<option value="+colombo[i]+">"+colombo[i]+"</option>";
            }
        }else if(selectedDistrict == "Galle"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<galle.length; i++){
                town.innerHTML += "<option value="+galle[i]+">"+galle[i]+"</option>";
            }
        }else if(selectedDistrict == "Gampaha"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<gampaha.length; i++){
                town.innerHTML += "<option value="+gampaha[i]+">"+gampaha[i]+"</option>";
            }
        }else if(selectedDistrict == "Hambantota"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<hambantota.length; i++){
                town.innerHTML += "<option value="+hambantota[i]+">"+hambantota[i]+"</option>";
            }
        }else if(selectedDistrict == "Jaffna"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<jaffna.length; i++){
                town.innerHTML += "<option value="+jaffna[i]+">"+jaffna[i]+"</option>";
            }
        }else if(selectedDistrict == "Kalutara"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<kalutara.length; i++){
                town.innerHTML += "<option value="+kalutara[i]+">"+kalutara[i]+"</option>";
            }
        }else if(selectedDistrict == "Kandy"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<kandy.length; i++){
                town.innerHTML += "<option value="+kandy[i]+">"+kandy[i]+"</option>";
            }
        }else if(selectedDistrict == "Kegalle"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<kegalle.length; i++){
                town.innerHTML += "<option value="+kegalle[i]+">"+kegalle[i]+"</option>";
            }
        }else if(selectedDistrict == "Kilinochchi"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<kilinochchi.length; i++){
                town.innerHTML += "<option value="+kilinochchi[i]+">"+kilinochchi[i]+"</option>";
            }
        }else if(selectedDistrict == "Kurunegala"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<kurunegala.length; i++){
                town.innerHTML += "<option value="+kurunegala[i]+">"+kurunegala[i]+"</option>";
            }
        }else if(selectedDistrict == "Mannar"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<mannar.length; i++){
                town.innerHTML += "<option value="+mannar[i]+">"+mannar[i]+"</option>";
            }
        }else if(selectedDistrict == "Matale"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<matale.length; i++){
                town.innerHTML += "<option value="+matale[i]+">"+matale[i]+"</option>";
            }
        }else if(selectedDistrict == "Matara"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<matara.length; i++){
                town.innerHTML += "<option value="+matara[i]+">"+matara[i]+"</option>";
            }
        }else if(selectedDistrict == "Moneragala"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<moneragala.length; i++){
                town.innerHTML += "<option value="+moneragala[i]+">"+moneragala[i]+"</option>";
            }
        }else if(selectedDistrict == "Mullaitivu"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<mullativu.length; i++){
                town.innerHTML += "<option value="+mullativu[i]+">"+mullativu[i]+"</option>";
            }
        }else if(selectedDistrict == "Nuwara Eliya"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<nuwaraeliya.length; i++){
                town.innerHTML += "<option value="+nuwaraeliya[i]+">"+nuwaraeliya[i]+"</option>";
            }
        }else if(selectedDistrict == "Polonnaruwa"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<polonnaruwa.length; i++){
                town.innerHTML += "<option value="+polonnaruwa[i]+">"+polonnaruwa[i]+"</option>";
            }
        }else if(selectedDistrict == "Puttalam"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<puttalam.length; i++){
                town.innerHTML += "<option value="+puttalam[i]+">"+puttalam[i]+"</option>";
            }
        }else if(selectedDistrict == "Ratnapura"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<ratnapura.length; i++){
                town.innerHTML += "<option value="+ratnapura[i]+">"+ratnapura[i]+"</option>";
            }
        }else if(selectedDistrict == "Trincomalee"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<trincomalee.length; i++){
                town.innerHTML += "<option value="+trincomalee[i]+">"+trincomalee[i]+"</option>";
            }
        }else if(selectedDistrict == "Vavuniya"){
            town.innerHTML = "<option >Select Town</option>";
            for(let i=0; i<vavuniya.length; i++){
                town.innerHTML += "<option value="+vavuniya[i]+">"+vavuniya[i]+"</option>";
            }
        }else{
            town.innerHTML = "<option >Select Town</option>";
        }
    }