# DOMcrafter

DOMcrafter is a javascript library meant to give you the tools necessary
for easy manipulation of the Document Object Model (DOM).  It includes
all of the core functionality of jQuery, but without the unnecessary weight.
DOMcrafter is a great option if you will be only using the core $d(), $d.ajax, #on(event),
or #addClass functions.

### Live Example

A live example of DOMcrafter's use can be seen [here](http://www.github.com/mallen1080/Langtons-Ant "Langton's Ant")

### Functionality

Including DOMcrafter gives you the following functions and more:

- `$d(argument)`:  accepts a function, DOMelement, or selector (as a string)
  - function: the given function will be invoked as soon as the DOM has fully loaded
  - DOMelement: converts the DOMelement into a DOMcrafter object
  - selector: finds all elements on the document that match the selector and returns DOMcrafter object
- `$d.ajax(options)`: performs an asynchronous XMLHTTPRequest
  - If no options are given, the url is defaulted to the current page url, and the method is defaulted to a "get"
- `#html(string)`: accepts an optional string argument
  - If no argument is given: returns the innerHTML of the first collection element
  - If a string is given: sets the innerHTML of all collection elements to the string
- `#empty()`: empties the innerHTML of all collection elements
- `#append(child)`: accepts an HTMLElement, a DOMcrafter object, or a string
  - HTMLElement, DOMcrafter object: appends the child element to the end of each collection element
  - string: appends the string to the end of the innerHTML for each collection element
- `#attr(attribute, value)`: accepts an attribute and and optional value
  - If no value is given: returns the value of the given attribute for the first collection element
  - If a value is given: sets the attribute to the specified value for all collection elements
- `#addClass(class)`: adds the specified class to all collection elements
- `#removeClass`: removes the specified class from all collection elements
- `#children`: returns a DOMcrafter object of the direct children of all collection elements
- `#parent`: return a DOMcrafter object of the direct parents of all collection elements
- `#find(selector)`: returns all descendants of current collection elements where the selector is a match
- `#remove()`: removes all collection elements from the DOM
- `#on(type, callback)`: adds an event listener of given type for all collection elements
- `#off(type, callback)`: removes all event listeners of given type for all collection elements
