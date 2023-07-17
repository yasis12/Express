console.log('script sourced.');
// console.log('Watched lecture on how to do this assignment');

// Part 1

let selectedMusicMode = '';
let musicElement = document.getElementById('selected-mode');

function modeButton(num) {
    if (num === 1) {
        selectedMusicMode = 'Ionian';
        musicElement.innerHTML = selectedMusicMode;
    } else if (num === 2) {
        selectedMusicMode = 'Dorian';
        musicElement.innerHTML = selectedMusicMode;
    } else if (num === 3) {
        selectedMusicMode = 'Phrygian';
        musicElement.innerHTML = selectedMusicMode;
    } else if (num === 4) {
        selectedMusicMode = 'Lydian';
        musicElement.innerHTML = selectedMusicMode;
    } else if (num === 5) {
        selectedMusicMode = 'Mixolydian';
        musicElement.innerHTML = selectedMusicMode;
    } else if (num === 6) {
        selectedMusicMode = 'Aeolian';
        musicElement.innerHTML = selectedMusicMode;
    } else if (num === 7) {
        selectedMusicMode = 'Locrian';
        musicElement.innerHTML = selectedMusicMode;
    } else {
        return 'something major went wrong';
    }
}

// Part 2 Below this

let addedMusicalNote = '';
let musicalNoteElement = document.getElementById('note-container');

/**
 * 
 * @param {string} letter 
 */

function addThisMusicalNote(letter) {
        addedMusicalNote = `
        <div class="music-note">
        <h2>${letter}</h2>
        <button onclick="removeMusicalNote()" class="remove-note">Remove</button>
        </div>
        `;
        musicalNoteElement.innerHTML += addedMusicalNote; 
    } 

    // remove button

    function removeMusicalNote(button) {
        // Get the parent div (music-note) and remove it
        let musicNoteDiv = event.target.parentElement;
        musicNoteDiv.remove();
      }
      