/**
    Author: Brody Richardson
    Course: CISP 220
    Date: 11/25/2022
*/

let images = document.getElementsByTagName("img");

let photoBucket = document.getElementById("photo_bucket");

let photoList = document.getElementById("photo_list");

for (let imgCntr = 0; imgCntr < images.length; imgCntr++) {

  images[imgCntr].onclick = function () {
    if (this.parentElement.id == "photo_bucket") {
      let newItem = document.createElement("li");
      newItem.appendChild(this);

      photoList.append(newItem);
    } else {
      let oldItem = this.parentElement;

      photoBucket.appendChild(this);

      oldItem.parentElement.removeChild(oldItem);
    }
  };
}

/**------------------------------------------------------------------------- */
//declaring useShip to referencing “useShip” 
var useShip=document.getElementById("useShip")

//adding addEventListener to useShip to run the copyShippingToBilling() function when clicked
useShip.addEventListener('click',copyShippingInfoToBilling)

//copies values from the shipping fields to corresponding billing fields
function copyShippingInfoToBilling(params) {

    //test whether useShip is checked and if it is, copy all Shipping fields into corressponding billing fields
    if(useShip.checked==true){
        document.getElementById("firstnameBill").value=document.getElementById("firstnameShip").value 
        document.getElementById("lastnameBill").value=document.getElementById("lastnameShip").value 
        document.getElementById("address1Bill").value=document.getElementById("address1Ship").value 
        document.getElementById("address2Bill").value=document.getElementById("address2Ship").value 
        document.getElementById("cityBill").value=document.getElementById("cityShip").value 
        document.getElementById("countryBill").value=document.getElementById("countryShip").value 
        document.getElementById("codeBill").value=document.getElementById("codeShip").value 
        document.getElementById("stateBill").value=document.getElementById("stateShip").value 
       }  
}

//collecting all the formElement of input[type='text]
var formElements=document.querySelectorAll("input[type='text']")

//getting length of formElements
var fieldCount=formElements.length

//declaring errorBox for referencing elements having id="errorBox"
var errorBox=document.getElementById("errorBox")

//iterating each formElements 
for (let i = 0; i < fieldCount; i++) {
    //adding click addEventListener to calls the showValidationError()
    formElements[i].addEventListener('click',showValidationErrorText)     
}

//give response to the invalid event
function showValidationErrorText(evt) {

    //prevent the browser from applying the native browser tools to respond to invalid data.
    console.log("We are here, we are waiting.")
    evt.preventDefault()
    errorBox.textContent="Complete all highlighted fields"
}

//this disables the browser form validate bubble
for(let i = 0; i < fieldCount; i++) {
    formElements[i].setAttribute("invalid")
}