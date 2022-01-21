var xhr = new XMLHttpRequest;
xhr.open('GET', './produits.json');
var Data;
var tbody = document.getElementsByTagName("tbody")[0];
xhr.onload = function(){
    Data= JSON.parse(xhr.responseText);
    f1ll(Data);
}


//search bar using W3Schools filtrable table
var inp = document.getElementById("Inpt");
$(document).ready(function(){
    $("#Inpt").on("keyup", function(){
      var value = $(this).val().toLowerCase();
      $("#tbody tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

//First search method
//____________________
// $("#Inpt").on("keyup", function(){
//     var list = [];
//     Data.forEach(element => {
//         if(element["name"].includes(inp.value)){
//             list.push(element);
//         }
//     })
//     $("tbody").html("");
//     f1ll(list);
// })

//Fill function (from JSON to HTML Table)
xhr.send();
function f1ll(pmtr){
    for(var i = 0; i < pmtr.length; i++){
        var ul = document.createElement("ul");
        pmtr[i]["stock"].forEach(element => {
            var li = document.createElement("li");
            li.innerHTML = element;
            ul.appendChild(li);
        })

        tbody.innerHTML += `<tr>
            <td class="table-secondary">${pmtr[i].ID}</td>
            <td class="table-warning">${pmtr[i].name}</td>
            <td class="table-secondary">${pmtr[i].colour}</td>
            <td class="table-warning">${pmtr[i].price}</td>
            <td class="table-secondary">${pmtr[i].category}</td>
            <td class="table-warning">${ul.innerHTML}</td>
            <td class="table-secondary"><ul><li>${ pmtr[i].Supplier.companyName}</li><li>${pmtr[i].Supplier.address}</li></ul></td>
            </tr>`
    }
}
// //Sorting function
// function tableSort(e,manner){ //Sorting strings
// var sortTable = e.parentElement.innerText.trim();//using innerText brings back the written text instead of the whole tag when using innerHTML. 
//     if(manner == "desc"){
//     Data.sort(function(a,b){    
//     if(a[sortTable].toLowerCase() < b[sortTable].toLowerCase()){
//   return -1
//         }
//     })
// }
//     else if(manner == "asc"){
//     Data.sort(function(a,b){
//     if(a[sortTable].toLowerCase() > b[sortTable].toLowerCase()){
//         return -1
//         }       
//         })
//     }
// }
// function tableSortN(e,manner){//Sorting Numbers
//     var sortTable = e.parentElement.innerText.trim();
//         if(manner == "desc"){
//     Data.sort(function(a,b){
//     return a[sortTable] - b[sortTable]
//             }
// )}
//         else if(manner == "asc"){
//             Data.sort(function(a,b){
//     if(b[sortTable] - a[sortTable]){
//     return b[sortTable] - a[sortTable]
//                 }
//         })
// }
function tableSort(e, manner){
    if(manner == "desc"){
        Data.sort(function(a,b){
        if(a[e] > b[e]){
            return -1
        }
    })
    }
    else if(manner=="asc"){
        Data.sort(function(a,b){
        if(a[e] < b[e]){
            return -1
        }
    })
    }
$("tbody").html("");
f1ll(Data);
    }
    
