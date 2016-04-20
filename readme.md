# DOMcrafter

DOMcrafter is a javascript library meant to give you the tools necessary
for easy manipulation of the Document Object Model (DOM).  It includes
all of the core functionality of jQuery, but without the unnecessary weight.
DOMcrafter is a great option if you will be only using the core $(), $.ajax,
or #addClass functions.

### Using DOMcrafter

To include DOMcrafter in your project, simply include the DOMcrafter.js file
into your repo.

### Functionality

Including DOMcrafter gives you the following functions:

- `$l(argument)`:  can take a function, DOMelement, or selector (as a string)
  - function: the given function will be invoked as soon as the DOM has fully loaded
  - DOMelement: converts the DOMelement into a DOMcrafter object
  - selector: finds all elements on the document that match the selector and returns DOMcrafter object
- `$l.ajax(options)`: 
