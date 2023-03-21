const rows = 5;
const cols = 6;
const table = document.getElementById('main-table');

function createRow() {
    const row = document.createElement('tr');
    return row;
}

function createColumn() {
    const col = document.createElement('td');
    return col;
}

function addTextNode(el, text) {
    const newText = document.createTextNode(text);
    el.appendChild(newText);
}

function getCells(table) {
    const tds = table.querySelectorAll('td');
    if (tds.length % 6 === 0) {
        // add row
        const row = createRow();
        const col = createColumn();
        const num = Number((Math.random() * 100).toFixed(0));
        addTextNode(col, num);
        if (num >= 50) {
            col.className = 'red';
        }
        row.appendChild(col);
        table.appendChild(row);
    } else {
        // add col
        const lasRow = table.querySelectorAll('tr')[table.querySelectorAll('tr').length - 1];
        const col = createColumn();
        const num = Number((Math.random() * 100).toFixed(0));
        addTextNode(col, num);
        if (num >= 50) {
            col.className = 'red';
        }
        lasRow.appendChild(col);
    }
}

function foo() {
    getCells(table);
}

for(let i = 0; i < rows; i++) {
    const row = createRow();
    for(let j = 0; j < cols; j++) {
        const col = createColumn();
        const num = Number((Math.random() * 100).toFixed(0));
        addTextNode(col, num);
        if (num >= 50) {
            col.className = 'red';
        }
        row.appendChild(col);
    }
    table.appendChild(row);
}

