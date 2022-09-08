const CHECKBOXES = document.querySelectorAll('.checkbox');
const STOVE_TOP = document.querySelector('#stove-top');
const AIR_POPPED = document.querySelector('#air-popped');
const MICROWAVE_POPPED = document.querySelector('#microwave-popped');

CHECKBOXES.forEach(checkbox => checkbox.addEventListener('change', (event) => chooseOneOption(event.target)))

function chooseOneOption(chosenOne) {
    if ( STOVE_TOP == chosenOne ) {
        AIR_POPPED.checked = false;
        MICROWAVE_POPPED.checked = false;
    }

    if ( MICROWAVE_POPPED == chosenOne ) {
        AIR_POPPED.checked = false;
        STOVE_TOP.checked = false;
    }

    if ( AIR_POPPED == chosenOne ) {
        MICROWAVE_POPPED.checked = false;
        STOVE_TOP.checked = false;
    }
    }
