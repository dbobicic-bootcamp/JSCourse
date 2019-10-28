//-----------------------------------------------
//Nedelja 1
//Nedelja 1, Dan 1
/* Danas smo presli osnove osnova HTML-a, CSS-a, JS-a;
Sledeci kod nam ispisuje poruku kao i u web stranicu ubacuje neki element
*/
console.log('Hello by js');
console.log('Hello World!');

const app = document.getElementById('app');
console.log(app);

app.innerHTML = '<p>Hello to BootcampPizza from JavaScript!</p>';

const  facebook_url='https://www.facebook.com';
const  youtube_url='https://www.youtube.com';

var facebook_ico_path='assets/images/fb_ico.png';
var youtube_ico_path='assets/images/yt_ico.png';

const social = document.getElementById('social');
social.innerHTML =
    `<a href="${facebook_url}" target="_blank"><img class="social-icon" src="${facebook_ico_path}" /></a>`;


social.innerHTML += `<a href="${youtube_url}" target="_blank"><img class="social-icon" src="${youtube_ico_path}" /></a>`;



//Dodati ikonice za tviter i instagram

//--------------------------------------------------------------------
//Nedelja 1
//Dan 4
{
    console.log('Dobar dan!');
    var variable = 'Dobar dan iz varijable!';
    console.log(variable);
    var variable2 = ' Dodatak poruke';
    console.log(variable + variable2);
    var number1 = 8;
    var number2 = 0;
    var number3 = number1 / number2;
    console.log('To ' + number3 + ' and beyond!');
    number1 = 15;
    number2 = 10;
    number3 = 2;

    console.log((number1 + number2) * number3);

    const constant = 5;

    console.log(constant);
    //constant=6; //Ne moze!
}
//console.log(constant); //Ne moze!

{
    var a = 12;
    // let b = 5;
    console.log(a);
    //console.log(b);
}
console.log(a);
//let b=15; //Ako imamo let spolja onda je naredna linija okej. U suprotnom nije okej!
//console.log(b);

//S1
/*{
   
    let b;
    b=15;
    console.log(b);
    //b=10;
    
    //S2
    {
        //let b;
        b=99;
        console.log(b);
        let c;
        console.log(c);
        c=8;
        //S3
        {
            let d=9;
            d=21;
            console.log(d)
        }
        let d;
        console.log(d);
    }
    
}*/
//var b;
//  console.log(b);

/*{
    {
        b=15;
        let b;
        b=10;
        var c;
        console.log(b);
    }

    {

        b=15;

    }
    let b;
    console.log(b);
}

c=10;
console.log(c);
*/

/*{
    let a;
    let someVariable;
    let a1;
    //let 1a;
    let _a;
    //let let;
    let _1a;
    let _;
    
    //let ab*;
    //let *ab;
}*/

var name = 'Bootcamp Pizza';
var street = 'Bulevar kralja Aleksandra';
var streetNumber = 73;
var postalCode = 11000;
var city = 'Belgrade';
var country = 'Republic of Serbia';
var phoneNumber = '+381(0)64-12-34-567';

const storeNameContainer = document.getElementById('store-name');
storeNameContainer.innerHTML = name;

const storeAddressContainer = document.getElementById('store-address');
storeAddressContainer.innerHTML = `<p>${street} ${streetNumber}, ${postalCode} ${city}<br/>${country}</p>Phone: ${phoneNumber}`;

var radius = 16;
//var pizzaSurface=radius*radius*3.14;
//var pizzaSurface=radius*radius*Math.PI;
var pizzaSurface = Math.pow(radius, 2) * Math.PI;
console.log(`Pizza surface is ${Math.round(pizzaSurface)} cm²`);
//console.log('Pizza surface is '+Math.round(pizzaSurface)+' cm²');

//Given the sliceNumber and radius, calculate the slice length

//Zadatak 3
/*
{
    let depoMalih = 10;
    let depoVelikih = 20;
    {
        let kolMalih = 3;
        let kolvelikih = 2;
        let ukupnoKauc = kolMalih * depoMalih + kolvelikih * depoVelikih;
        console.log('Ukupno za kauciju: ' + ukupnoKauc);
    }
}
*/

//---------------------------------------------------------
//Date and Time

//PAZNJA - KORISTICEMO KASNIJE
{
    let dateTimeNow = new Date();
    console.log(dateTimeNow);

    let hours = dateTimeNow.getHours();
    let minutes = dateTimeNow.getMinutes();
    let seconds = dateTimeNow.getSeconds();
    let timeStampString = `${hours}:${minutes}:${seconds}`;
    console.log(timeStampString);
    //Za danasnji datum
    console.log(dateTimeNow.getDay());

    let totalSeconds=hours*3600+minutes*60+seconds; 
    //let totalSeconds=(hours*60+minutes)*60+seconds;

    console.log(`Total number of seconds today is ${totalSeconds}`);
    //Postavicemo datum na neki dan koji je nedelja
    //dateTimeNow.setDate(27);
    //console.log(dateTimeNow.getDay());

    //Write date and time in the following format: [{date} - time]

    let dayInMonth = dateTimeNow.getDate();
    let month = dateTimeNow.getMonth() + 1;
    let year = dateTimeNow.getFullYear();
    let dateStampString = `${dayInMonth}-${month}-${year}`;
    console.log(dateStampString);

    let dateTimeStampString = `[{${dateStampString}} - ${timeStampString}]`;
    console.log(dateTimeStampString);
    



}

