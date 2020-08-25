# Are Actually Aliens on Earth?: JavaScript and DOM Manipulation

## Background

This respository displayed the eye-witness reports, and the collected data that shows the extra-terrestrial menace has come to Earth and the `ALIENS-R-REAL`. All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.


Dynamic javascript and DOM manipulation. This repo integrates various javascript libraries from D3 to Moments and pulls in data from a filtered javascript object to populate a table.

www.ALIENS-R-REAL.com 



There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.

We need you to write code that will create a table dynamically based upon a [dataset we provide](StarterCode/static/js/data.js). We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.

You can handle this... right? The planet Earth needs to know what we have found!

### Level 1: Automatic Table and Date Search (Required)
![Level 1](level1.gif)

* Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

* Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

  * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

* Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

### Level 2: Multiple Search Categories (Optional)
![Level 2](level2.gif)

* Complete all of Level 1 criteria.

* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`

- - -

### Dataset

* [UFO Sightings Data](StarterCode/static/js/data.js)

- - -

**Good luck!**

- - -

### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
