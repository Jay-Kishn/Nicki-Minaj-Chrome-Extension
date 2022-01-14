let nickiMinjajImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuff3MxrHCy7Ui4x_jZK8sSMQc1Y1qcLlyw&usqp=CAU",
    "https://c.ndtvimg.com/2021-09/tfv4jovo_nicki-minaj_625x300_15_September_21.jpg",
    "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61432e7cf41b725ee1e90593%2F0x0.jpg" ,
    "https://api.time.com/wp-content/uploads/2015/08/nicki-minaj2.jpg?w=824&quality=70",
    "https://i.insider.com/61430b4f2db0850019a9b86d?width=700" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoiO3D__HNgHomZRd2IgFMYbxSdslHnVMnw&usqp=CAU",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elm070118cover001gray-original-2x1-cropb-1528895627.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*",
    "https://www.pinkvilla.com/imageresize/nicki-minaj-welcomes-first-child-with-husband-kenneth-petty_.jpg?width=752&format=webp&t=pvorg",
    "https://i.guim.co.uk/img/media/5ab954f33f0c65d79af081a4ff6cb5db54170822/0_151_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2c2719ce888ee5bc1d3e7d0da293cc0f",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-nhjXGaJNraNONyvMTmiZtDQzoBbLWAib4w&usqp=CAU"
];

const imgs = document.getElementsByTagName("img");

Array.from(imgs).forEach(function(item){
    const randomImg = Math.floor(Math.random() * nickiMinjajImages.length)
    item.src = nickiMinjajImages[randomImg]
});

let nickiMinjajQuotes = ["Chile anyways so" , "Why are they there then?", "you stupid fucking dinosaur",
"oh nah we gotta go" , "i never found you entertaining" , "CWALING ALL BARBZ, CWALING ALL BARBZ " ,
"i am who i am becoz i am who i am" , "what was this award for...im sorry"];

/*const link = document.querySelector('yt-formatted-string');
const headers = link.getAttribute('title'); */

const headers = document.getElementsByTagName("yt-formatted-string");

Array.from(headers).forEach(function(item){
    const randomHead = Math.floor(Math.random() * nickiMinjajQuotes.length)
    item.innerText = nickiMinjajQuotes[randomHead]
});






