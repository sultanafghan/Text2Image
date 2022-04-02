// create xhr v
var btn = document.getElementById('btn');
var text = document.getElementById('text');
var bgUrl = document.getElementById('bgUrl');
var resultImg = document.getElementById('result');
var fontSize = document.getElementById('fontSize');
var textAlignment = document.getElementById('textAlignment');
var maskColor = document.getElementById('maskColor');
var colorMaskOpacity = document.getElementById('colorMaskOpacity');
var projectWidth = document.getElementById('projectWidth');
var projectHeight = document.getElementById('projectHeight');

var privewText = document.getElementById('upper');
var variants = document.getElementById("variants");

var removeBackgroundBtn = document.getElementById('removeBackground');

var fontColor = document.getElementById('fontColor');

var loadMoreBtn = document.getElementById('loadMoreBtn');

var photos = document.getElementById('photos');

// btn from get images from api
var loadImagesBtn = document.getElementById('get');
// set Height and width to input of images [its heddien]
var imageHeight = document.getElementById('imageHeight');
var imageWidth = document.getElementById('imageWidth');
// get Search key
var searchKey = document.getElementById("searchKey");

btn.addEventListener("click", genImage);

function genImage() {
    console.log("GEN Image")
    console.log("PH" + projectHeight.value)
    console.log("PW" + projectWidth.value)

    var xhr = new XMLHttpRequest();
    //&h=1280
    //&w=729
    // 5184x2920
    // &a.color=white
    // &a.fontFamily=Poppins
    // &b.fontFamily=Playfair Display
    // &b.fontSize=30
    var apiKey = 'BRUZU-aZUxk-wIn';
    console.log("font:>" + fonts.value)
    let data = {
        // "ak":apiKey,
        "backgroundImage": bgUrl.value,
        "a.text": text.value,
        "h": projectHeight.value,
        "w": projectWidth.value,
        "a.color": fontColor.value,
        "a.fontFamily": fonts.value,
        "a.fontWeight": variants.value,
        "a.width": "450",
        "a.textAlign": textAlignment.value,
        "b.text": "@saboorApps",
        "backgroundImage.opacity": colorMaskOpacity.value,
        "backgroundColor": maskColor.value,
        "b.width": "450",
        "b.top": "480",
        "b.originY": "bottom",
        "b.color": "white",
        "a.fontSize": fontSize.value,
        "b.fontFamily": "Playfair Display",
        "b.fontSize": "30"
    }
    data.apiKey = ""

    // Generate apiURL from data
    let apiURL = 'https://img.bruzu.com/?' + new URLSearchParams(data).toString();
    //   'https://img.bruzu.com/?backgroundImage=' + + '&b.fontSize=30&b.fontFamily=Playfair Display&a.fontFamily=Poppins&a.color=white&w=' + imageWidth.value + '&h=' + imageHeight.value + '&a.text=' +
    xhr.open('GET', apiURL, true);
    xhr.onload = function () {
        if (this.status == 200) {

            // console.log(this.responseURL);
            resultImg.src = this.responseURL;
            // resultImg.addEventListener('load', function () {
            //     console.log(resultImg.width);
            //     console.log(resultImg.height);

            // })

              
             
        }
    }
    xhr.send();



}
