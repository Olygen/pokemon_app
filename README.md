An interactive app that will show 7 pokemon from given data array from the file pokemon.js (adding.jpg to image description as it is absent in initioal array) on the page /pokemon "See All The Pokemon!". There are no names on the main page! Check if you remember them by pressing image of the pokemon!
Pressing on the image you will be redirected to the page /pokemon/name "Gotta Catch ${name}!" with big image of the pokemon and his name. Press "Back to all pokemon" to get back to main page.
Pressing "Remember other pokemon?" on the main page, you will get form to enter name of pokemon. If you don't remember the exact name, you can press "Hint" and get all the pokemon names.
After entering name you will be redirected to the page "Gotta Catch ${name}!" with big image of the pokemon and his name.
If you go back to the main page, a new pokemon appears among existing.

There is place for improving:
1. If you enter wrong name, you will be nevertheless redirected to the page Gotta Catch ${name}!" with wrong name and no image. So a code to check if name exists in allPokemon.js is needed
2. If pokemon is already exist on the main page /pokemon it will appear again after entering his name in the form. A code to check if name exists in extended array of pokemon.js is needed
