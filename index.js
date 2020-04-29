 // get the filter input
 let filterInput = document.getElementById("filterInput");
 // Add event Listener
 filterInput.addEventListener('keyup',filterNames);
 
 function filterNames() {
     // get the value of the input
     let filtervalue = document.getElementById("filterInput").value.toUpperCase();
     // get name ul
     let ul = document.getElementById("names");
     // get it lis from ul
     let li = ul.querySelectorAll('li.collection-item')
     // loop through collection items
     for(let i = 0 ; i < li.length; i++){
         let a = li[i].getElementsByTagName('a')[0];
         // if match
         if(a.innerHTML.toUpperCase().indexOf(filtervalue) > -1){
             li[i].style.display ="block"
         }else{
             li[i].style.display ="none"
         }
     }
 }