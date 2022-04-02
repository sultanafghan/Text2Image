// ************ Functions ************


// ************ Defult Calls ************
changePrivewFontSize();
changeDivSize()
changeFontColor();
// ************ Event Listeners ************
text.addEventListener("input", textChange);
fontSize.addEventListener("input", changePrivewFontSize);
projectWidth.addEventListener("input", changeDivSize);
projectHeight.addEventListener("input", changeDivSize);
loadImagesBtn.addEventListener('click', loadImages);
// change alignment alignment
textAlignment.addEventListener("input", changeTextAlignment);
// editable privew text change the input text 
privewText.addEventListener("input", function () {
    console.log(privewText.innerHTML);
    text.value = privewText.innerHTML;
})


removeBackgroundBtn.addEventListener("click", removeBackground);
fontColor.addEventListener('input', changeFontColor);


// ************ Functions ************
function changeFontColor() {
    console.log(fontColor.value);
    privewText.style.color = fontColor.value;
}
function removeBackground() {
    console.log("remove btn clicked");
    privewDivImage.style.backgroundImage = "";
    bgUrl.value = "";
}

function changeDivSize() {
    console.log("from changeDivSize");
    privewDivImage.style.width = projectWidth.value + "px";
    privewDivImage.style.height = projectHeight.value + "px";
    privewDivMask.style.width = projectWidth.value + "px";
    privewDivMask.style.height = projectHeight.value + "px";
}

function changePrivewFontSize() {
    privewText.style.fontSize = fontSize.value + "px";
}
function textChange() {
    privewText.innerHTML = text.value;
}
function changeTextAlignment() {




    if (textAlignment.value == 'justify-left') {
        console.log("text alinment is : justify-left")
        privewText.removeAttribute("class");
        privewText.classList.add("justify-left");

    } else if (textAlignment.value == 'justify-center') {
        console.log("text alinment is : justify-center")
        // privewText.style.textAlign = 'justify';
        // privewText.style.textAlignLast = 'center';
        privewText.removeAttribute("class");
        privewText.classList.add("justify-center");
    } else if (textAlignment.value == 'justify-right') {
        console.log("text alinment is : justify-right")
        // privewText.style.textAlign = 'justify';
        // privewText.style.direction = 'rtl';
        privewText.removeAttribute("class");
        privewText.classList.add("justify-right");
    } else {
        privewText.style.textAlign = textAlignment.value;
        privewText.removeAttribute("class");
    }
}


// set the defult opacity of privew image to input 
privewDivImage.style.opacity = colorMaskOpacity.value;
// set the defult mask color of privew image  to input 
privewDivMask.style.background = maskColor.value;

// get All Input Changes on color change and opacity change input
let elementsArray = document.querySelectorAll(".colorWithMask");

elementsArray.forEach(function (elem) {
    console.log(elem);
    elem.addEventListener("input", function () {
        //this function does stuff
        privewDivMask.style.background = maskColor.value;
        privewDivImage.style.opacity = colorMaskOpacity.value;
    });
});

var currentPage = 1;

loadMoreBtn.addEventListener("click", function () {

    currentPage++;
    console.log(currentPage);

    loadImages(currentPage);
})
// load images from API Server
function loadImages(page) {

    console.log(searchKey.value);
    var xhr = new XMLHttpRequest();
    // pexels.com api key : 563492ad6f91700001000001c19afbc7abc74697a90368af75b1abb1
    xhr.open('GET', 'https://api.pexels.com/v1/search?query=' + searchKey.value + "&page=" + page || 1, true);
    xhr.setRequestHeader('Authorization', '563492ad6f91700001000001c19afbc7abc74697a90368af75b1abb1');
    xhr.onload = function () {
        if (xhr.status == 200) {
            //console.log(xhr.responseText);
            var data = JSON.parse(xhr.responseText);
            var newData = data.photos;
            var output = '';

            newData.forEach(photo => {
                // console.log(photo.width);
                // console.log(photo.height);
                // imageWidth.value = photo.width;

                output += '<img src=' + photo.src.landscape + ' width="50" name="allImages" class="allImages" id="' + photo.id + '"/> ' +
                    '<input type="text" name="pwidth"  value="' + photo.width + '" hidden> <input type="text" name="pheight" value="' + photo.height + '" hidden>';


            });



            if (page >= 2) {
                photos.innerHTML += output;
            } else {
                photos.innerHTML = output;
            }

            // preview Image selector 
            // var previewImage = document.getElementById('previewImage');
            var privewDivImage = document.getElementById('privewDivImage');
            var privewDivMask = document.getElementById("privewDivMask");
            if (this.responseText) {
                // document.getElementsByName('allImages')



                var allImages = document.getElementsByName('allImages');
                var width = document.getElementsByName('pwidth');
                var height = document.getElementsByName('pheight');
                console.log(height[1]);
                allImages.forEach((item, i) => {
                    item.addEventListener("click", function (e) {
                        bgUrl.value = item.src;
                        // previewImage.src = item.src;
                        privewDivImage.style.backgroundImage = 'url(' + item.src + ')';


                        imageHeight.value = height[i].value;
                        imageWidth.value = width[i].value;
                        console.log("from image width:" + imageWidth.value);
                    })
                })

                console.log(allImages);
            }

        }
    }
    xhr.send();


}