const html =`
<tr><td>New Cell1</td>
<td>New Cell2</td></tr>
`;
const table = document.querySelector('#sampleTable');
function insert_Row() {
    //Write your code here
   var row =  table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2"; 
}
