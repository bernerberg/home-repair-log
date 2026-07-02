# Progress Log

## Day 1

What I did:
- Created the Home Repair Log project folder.
- Created index.html, style.css, script.js, README.md and progress.md.
- Built the first static screen.
- Connected CSS and JavaScript.

What I understood:
- HTML is the structure.
- CSS is the visual style.
- JavaScript controls behavior.
- The browser loads all three files together.

What I don't understand yet:
- The form is visible, but it does not add new items yet because JavaScript logic is not implemented.
- I need to learn how form submit, DOM manipulation and event listeners work.

AI helped me with:
- everything

Tomorrow:
- Start understanding the HTML structure and improve the form/card layout.

## Day 2

What I did:
- Added id="repairForm" to the form.
- Added id="itemsList" to the cards container.
- Added a second static card.
- Added a working submit event listener in JavaScript.
- The form now logs submitted data to the console.

What I understood:
- class is reusable and mostly used for styling.
- id is unique and useful for JavaScript.
- querySelector finds elements on the page.
- addEventListener listens for user actions.
- preventDefault stops the form from reloading the page.
- .value gets the current value from an input, select or textarea.

What I don't understand yet:
- ...

AI helped me with:
- Understanding form submit and event.preventDefault.

Tomorrow:
- Start improving the interface and make the card layout cleaner.

## Day 3

What I did:
- Added CSS classes for different item statuses.
- Added itemsList selection in JavaScript.
- Created the addItemCard function.
- The form now creates a new card on the page.
- The form resets after submit.

What I understood:
- JavaScript can create HTML elements with document.createElement.
- classList.add adds CSS classes to an element.
- textContent puts text inside an element.
- append puts elements inside another element.
- A function can receive values and use them to perform a task.
- New cards disappear after page refresh because they are not saved yet.

What I don't understand yet:
- ...

AI helped me with:
- Creating cards dynamically with JavaScript.

Tomorrow:
- Start organizing items as data, not just visual cards.

## Day 4

What I did:
- Removed static item cards from HTML.
- Moved default items into a JavaScript array.
- Created item objects with name, status and note.
- Added the renderItems function.
- The page now renders cards from JavaScript data.
- Added a simple check so empty notes are not rendered.

What I understood:
- An array is a list of values.
- An object can describe one item with multiple properties.
- items.push adds a new object to the array.
- renderItems redraws the page from the current data.
- innerHTML = "" clears the current list before rendering again.
- The page state still disappears after refresh because it is not saved yet.

What I don't understand yet:
- ...

AI helped me with:
- Refactoring the app from static HTML cards to data-driven rendering.

Tomorrow:
- Add delete buttons and learn how to remove items from an array.

## Day 5

What I did:
- Added a Delete button to every item card.
- Passed the item index into addItemCard.
- Created the deleteItem function.
- Used splice to remove one item from the items array.
- Re-rendered the list after deleting an item.

What I understood:
- Array indexes start at 0.
- The index tells JavaScript which item is being deleted.
- splice(index, 1) removes one item from the array.
- After changing the array, renderItems updates the page.
- The UI should be based on data, not the other way around.

What I don't understand yet:
- ...

AI helped me with:
- Understanding how deleting from an array updates the interface.

Tomorrow:
- Start saving items with localStorage so they stay after page refresh.