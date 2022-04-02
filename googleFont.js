var getfonts = document.getElementById("getfonts");
var fonts = document.getElementById("fonts");


var eSelect = document.getElementById("fonts");

// defult load font 
WebFont.load({
    google: {
        families: ['ABeeZee']
    }
});

eSelect.onchange = function () {
    if (eSelect.selectedIndex === 2) {
        console.log("select");
    } else {
        WebFont.load({
            google: {
                families: [eSelect.value]
            }
        });

        document.getElementById("upper").style.fontFamily = eSelect.value;


        document.getElementsByClassName("fonts")[0].style.fontFamily = "Akronim";

        console.log(eSelect.value);
    }
}
// ------




// google fonts api
var fontApi = 'https://www.googleapis.com/webfonts/v1/webfonts';
var key = 'AIzaSyDQnwvxmAz3XXx24euRQifW-vi_-MEBX6Y';
var url = fontApi + "?key=" + key;

// functions call
loadFonts();


// function deiclation 
function loadFonts() {
    console.log(url)
    // new xhr object
    var xhr = new XMLHttpRequest();
    var output = '';
    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(JSON.parse(this.responseText));
            var fontDatas = JSON.parse(this.responseText);
            fontDatas.items.forEach(font => {
                output += '<option class="fonts" value="' + font.family + '">' + font.family + '</option>';
            });
            fonts.innerHTML = output;

        }
    }
    xhr.send();
}



var variantsList = ["normal", "500", "600", "700", "800", "900"];

// load font variants
loadVariants();
function loadVariants() {
    console.log(variants);
    var output = '';
    variantsList.forEach(variant => {
        console.log(variant);
        output += '<option value="' + variant + '">' + variant + '</option>';
    })
    console.log(output);
    variants.innerHTML = output;
}


variants.addEventListener("change", function () {
    console.log(variants.value);
    privewText.style.fontWeight = variants.value;
})