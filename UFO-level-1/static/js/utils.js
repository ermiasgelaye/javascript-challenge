// The dataset stores some punctuation as HTML character codes without a trailing
// semicolon (e.g. "Grants Pass&#44 Oregon"). Decode the ones it uses: ! ' ,
const decodeEntities = text => text.replace(/&#(33|39|44);?/g, (_, code) => String.fromCharCode(code));

// Function to create/populate table with data.
const createTable = (data, tableBody) => {
  // Loop through the items in the data array.
  data.forEach(ufo => {
    // Insert a row in the table at the last row
    let newRow = tableBody.append('tr');

    // Insert a cell in the row at index, create text nodes for each, append a text node to the cell.
    Object.values(ufo).forEach(value => newRow.append('td').text(decodeEntities(value.toString())));
  });
};