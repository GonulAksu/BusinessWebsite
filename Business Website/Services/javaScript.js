


//forma submit verdik 
var btnadd=document.querySelector('#addnewserviceform');
// console.log(btnadd);
//input'tu alıp input.value diyerekde aşağıda sorgulama yapabiliriz
var input=document.querySelector('input');
var servicelist=document.querySelector('#service-list');
// console.log(servicelist);
var btndeleteAll=document.querySelector('.delete-all');
let values;
loaditemFromLS();
Events();


function Events(){
    btnadd.addEventListener('submit',addService);
    servicelist.addEventListener('click',deleteİtem);
    btndeleteAll.addEventListener('click',deleteAll);

}


//localstorage'den aldığı bilgileri cretaenewitem'a gönderecek ki öceki girilmiş servislerde ekrana gelsin
//başta bu fonksiyonu çağırmamızın sebebi sayfa yüklendiğinde LS'de olan daha önceki bilgiler direk yüklensin diye
function loaditemFromLS(){
    values=getitemFromLS();
    Array.from(values).forEach(item=>{
        createNewitem(item);
    })
}

//yukarıda LS'dan gelen degerleri gönderdik Şimdide inputdan gelen değeri createNewitem'a göndericez
function addService(e){
    // console.log(e.target);

    //şuan input' agirilen value değerini aldık.
    //console.log(e.target.childNodes[1].firstElementChild.value); 
    let inputValue=e.target.childNodes[1].firstElementChild.value;
    
   
    if(inputValue==" "){
        alert('addnewservice');
       
    }else{
        createNewitem(inputValue);
        setitemFromLS(inputValue);
     }

    
    e.preventDefault();
}

function createNewitem(e){
    //inputa değer girilmiş ise bu değeri listenin bir parçası olarak , yani li elementi yaratarak listeye ekleyelim
    const li=document.createElement('li');
    li.classList="list-group-item list-group-item-success";
    li.appendChild(document.createTextNode(e));
    const a=document.createElement('a');
    a.classList="delete-item float-right";
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';
    li.appendChild(a);
    servicelist.appendChild(li);
    input.value=' ';

}


//butona direk onclick vererek
//butona class verip ona click vererek 
//yada butonu ayıklayarak

//delete-item ' yapalım service-listdeki
function deleteİtem(e){
    // console.log(e.target); li ve i yi getiriyor
    if(e.target.classList=="fas fa-times"){
       e.target.parentElement.parentElement.remove();

       deleteitemToLS(e.target.parentElement.parentElement.textContent);
    }
    e.preventDefault();

}
function deleteAll(e){

    // servicelist.innerHTML= " ";
    // // servicelist.childNodes.forEach(function(item){
    // //     if(item.nodeType===1){
    // //         //element=1
    // //         //text=0,
    // //         item.remove();
    // //     }
    // // })
    
    
    // e.preventDefault();

    if (confirm('are you sure ?')) {
        
        //servicelist'in firstchild'dı old. sürece
        while(servicelist.firstChild){
            servicelist.removeChild(servicelist.firstChild);
        }
        localStorage.clear();
    }
    e.preventDefault();
}




//localstorage..........................................

function getitemFromLS(){
    if(localStorage.getItem('servicename')===null){
        values=[];
    }
    else{
        values=JSON.parse(localStorage.getItem('servicename'));
    }
    return values;
}
function setitemFromLS(e){
    //LS daki degerleri value içerisine atıyoruz ve gelen input.value değerinide ekliyor 
    values=getitemFromLS();
    values.push(e);
    localStorage.setItem('servicename',JSON.stringify(values));
}
function deleteitemToLS(text){
    items =getitemFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);   
        }
    });
    localStorage.setItem('servicename',JSON.stringify(items));
}


