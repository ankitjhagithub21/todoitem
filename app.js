const addBtn = document.getElementById('addBtn');
const input = document.getElementById('input');
const list = document.getElementById('list');
const removeBtn = document.getElementById('removeBtn');
const filter = document.getElementById('filter');

addBtn.addEventListener('click', ()=> {
    if(input.value==""){
       alert("Input field is empty!!")
    }else{
        let li = document.createElement('li');
        li.textContent=input.value;
        list.appendChild(li);
        input.value="";
    }
});

removeBtn.addEventListener("click", () => {

    let items = list.getElementsByTagName('li');
   if(items.length==0){
    console.log("list is empty");
   }else{
        list.removeChild(items[items.length-1])
   }
    
});

filter.addEventListener('keyup', ()=> {
    let items = list.getElementsByTagName('li');
    
     //Array.from() : convert html collection to an array

    Array.from(items).forEach(item => {
        let filterValue = filter.value.toUpperCase();
        let itemValue = item.textContent.toUpperCase();
        

        if(itemValue.indexOf(filterValue) > -1){
           item.style.display=""
        }else{
            item.style.display="none";
        }
    })




})