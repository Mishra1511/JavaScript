// const nums=[10,2,3,4,5];

// // const result= nums.filter((value) => {
// //     return value>35;
// // });

// // const mapfun= nums.map((value) => {
// //     return value+10;
// // })
// // console.log(result);
// // console.log(mapfun);
// // console.log(nums);


// // const reduce= nums.reduce((prev,curr) =>{
// //     return curr/prev;
// // });

// // console.log(reduce);

// const even=nums.filter((value) =>{
//     return value%2===0;
// });

// const sum=even.reduce((prev,curr) =>{
//     return prev+curr;
// })
// console.log(even);
// console.log(sum);


// console.log('Before API call');

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((res) =>{
// return res.json();
// })
// .then((data) =>{
//     console.log(data);
//     const ulist=document.getElementById('ulist');
//     data.map((d) =>{
//         const list1=document.createElement('li');
//         const list2=document.createElement('li');
//         list1.innerText=d.title;
//         list2.innerText=d.completed;
//         ulist.appendChild(list1);
//         ulist.appendChild(list2);
//     })
        
// })
// .catch((err) => {
// console.log("Promise Rejected",err);
// });

// console.log('After API call');

//const URL = `https://api.weatherapi.com/v1/current.json?key=65262a815b944d44ac8164121232610&q=${lat},${long}&aqi=no`

const geoloactionsupport= 'geolocation' in window.navigator;

function getgeoloaction(){
    if(!geoloactionsupport) throw new Error('Geolocation not supprted!!');

   return new Promise((resolve,reject) =>{
    window.navigator.geolocation.getCurrentPosition(function(position){
        const lat=position.coords.latitude;
        const long=position.coords.longitude;
        resolve({lat , long});
    },function(error){
        reject(error);
    });
   });
}
const p=document.getElementById('result');
const body=document.querySelector('body');

async function getweather(lat,long){
    const URL=`https://api.weatherapi.com/v1/current.json?key=65262a815b944d44ac8164121232610&q=${lat},${long}&aqi=no`;

    const response= await fetch(URL);
    const finalresponse= response.json();

    return finalresponse;
}


async function init(){
    try{
        const result = await getgeoloaction();
        const weatherdata=await getweather(result.lat,result.long);

        const temp=weatherdata.current.temp_c;
        
        let weathertype='';
        if(temp>30){
            body.style.backgroundColor='red';
            weathertype='Too Hot!';
        }
        
        else if(temp>10 && temp<30){
            body.style.backgroundColor='#f8ac30';
            weathertype='Pleasunt Weather!';
        }
        
        else{
            body.style.backgroundColor='lightgrey';
            weathertype='Too Cold!';
        }
        const div=document.createElement('div');
        div.innerText=`${weathertype}`;
        div.style.fontFamily='cursive';
        div.style.fontSize='50px';
    
        body.prepend(div);
        p.innerText=`Hey there, the weather of ${weatherdata.location.name} is ${temp} degrees.` ;
        
    }catch(error){
        console.log('Hey, Something went wrong!!',error);
    }
}

init();