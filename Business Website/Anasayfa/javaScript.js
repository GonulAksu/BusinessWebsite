
//responsive bars icon 
function myfunction() {
    document.querySelector('.nav-links').classList.toggle("responsive");
}

//slide 

//obje dizisinden elementin belli periyotta değişmesini istediğimiz özelliklerini çekicez

let slidePropert = [
    { image: 'img/indir4.webp' },
    { image: 'img/indir5.webp' },
    { image: 'img/indir6.webp' }

];

index=0;
let slideCount=slidePropert.length;

let  setting={
    duration:'3000',
    random:true
};

init(setting);
//random ve artan değerde index üretelim bu init fonksiyonu özelliklerini setting objesinde alacak
function init(setting){

    let prev;
            //belli bir süre ile tekrar eden fonksiyonumz setinterval,clearinterval,settimeout(bir kere çalışır)
            setInterval(() => {

                if(setting.random){
                      //önce bir kere do gerçekleşir daha sonra while şartı sağlandığı sürece do gerçekleşmeye devam eder
                do{
                    index=Math.floor(Math.random()*slideCount);
                }while(index==prev)
                prev=index;
                
                mySlide(index);
                console.log(index);
                }
                //artan index
                else{

                    if(index==slideCount){
                        index=0;
                    }
                   
                    mySlide(index);
                    console.log(index);
                    index++;
                }
               
                
            }, setting.duration);

}


function mySlide(i){
    let Cimg=document.querySelector('#Cimg');
    Cimg.setAttribute('src',slidePropert[i].image);

}


