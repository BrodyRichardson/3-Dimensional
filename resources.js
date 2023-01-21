/* 
    Author: Brody Richardson
    Course: CISP 220
    Date: 11/18/2022
*/

let titles = [];
titles[0] = "3D Benchy";
titles[1] = "XYZ Cube";
titles[2] = "Temperature Tower";
titles[3] = "Stringing Test";
titles[4] = "The All in One 3D Printing Test";



let summaries = [];
summaries[0] =
  "3D Benchy is great for seeing how the printer handles curved surfaces.";
summaries[1] =
  "The XYZ 20mm cube works extremely well for calibrating extruder movement.";
summaries[2] =
  "The Temperature Tower utilizes the 3D printers ability to print overhangs and tunnels at different temperatures.";
summaries[3] =
  "The stringing test is great for testing how the extruder works to prevent stringing based on two seperate towers.";
summaries[4] =
  "This test is great for seeing how the printer performs as a whole including overhang, stringing, curves, and extrusion performance.";


let links = [];
links[0] = "https://www.thingiverse.com/thing:763622";
links[1] = "https://www.thingiverse.com/thing:1278865";
links[2] = "https://www.thingiverse.com/thing:2729076";
links[3] = "https://www.thingiverse.com/thing:2219103";
links[4] = "https://www.thingiverse.com/thing:2656594/makes";


let table = document.querySelector("div > table > tbody");
// Table 3 uses the type of benchmark and the description as its two rows.

for (let i = 0; i < titles.length; i++) {
  let row = table.insertRow(i);
  let cell = row.insertCell(0);
  let link = document.createElement("a");
  link.setAttribute("href", links[i]);
  link.textContent = titles[i];
  cell.appendChild(link);
  cell = row.insertCell(1);
  cell.textContent = summaries[i];
}

/*=================================================================*/
// Maximum Length of Review
const MAX_REVIEW = 1000;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
wordCountBox = document.getElementById("countValue");
warningBox = document.getElementById("warningBox");

// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
  // Set the warning box to an empty text string
  warningBox.innerHTML = "";

  // Count the number of characters in the comment box
  commentText = document.getElementById("comment").value;
  charCount = countCharacters(commentText);

  try {
    // If the number of characters is greater than the maximum, throw an exception
    if (charCount > MAX_REVIEW) {
      throw "You have exceeded the character count limit";
    }
  } catch (msg) {
    // Display the error message in the warning box
    warningBox.innerHTML = msg;
  } finally {
    // Display the number of characters in the word count box
    wordCountBox.innerHTML = charCount;
  }
}

/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
  var commentregx = /\s/g;
  var chars = textStr.replace(commentregx, "");
  return chars.length;
}