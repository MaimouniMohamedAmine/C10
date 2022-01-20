var xhr = new XMLHttpRequest
xhr.open('GET', './produits.json');
var tbody = document.getElementsByTagName("tbody")[0];
xhr.onload = function() {
    var Data = JSON.parse(xhr.responseText);
    f1ll(Data);
//     $.each(Data, function (key, value){
//         tbody.innerHTML +=`<tr scope="row"> ,
//                             <td class="table-primary"> ${value.ID}</td> 
//                             <td class="table-info">${value.name}</td> 
//                             <td class="table-primary">${value.colour}</td> 
//                             <td class="table-warning">${value.price}</td> 
//                             <td class="table-info">${value.category}</td> 
//                             <td class="table-primary">${value.stock}</td> 
//                             <td><ul><li>${ value.Fournisseur.aderess}</li><li>${value.Fournisseur.companyName}</li></ul></td>
//                             </tr> `
//     })
//         $('#tbody').append(tbody)
}

var inp = document.getElementById("inp");
$("#inpt").on("keyup", function(){
    var list = [];
    Data.forEach(element => {
        if(element["name"].includes(inp.value)){
            list.push(element);
        }
    })
    $("tbody").html("");
    f1ll(list);
})

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
            <td class="table-primary">${pmtr[i].ID}</td>
            <td class="table-info">${pmtr[i].name}</td>
            <td class="table-primary">${pmtr[i].colour}</td>
            <td class="table-warning">${pmtr[i].price}</td>
            <td class="table-primary">${pmtr[i].category}</td>
            <td class="table-info">${ul.innerHTML}</td>
            <td class="table-primary"><ul><li>${ pmtr[i].Supplier.address}</li><li>${pmtr[i].Supplier.companyName}</li></ul></td>
            </tr>`
    }
}