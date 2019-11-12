
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

const facebook_url = 'https://www.facebook.com';
const youtube_url = 'https://www.youtube.com';

var facebook_ico_path = 'assets/images/fb_ico.png';
var youtube_ico_path = 'assets/images/yt_ico.png';

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

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
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

{
    let b;
    b = 3;
    if (b > 3) {
        console.log(`${b} je vece od 3`);
    } else {
        console.error(`${b} nije vece od 3`);
    }
    console.warn('Ovo je mnogo strava kod!');
    //Napisati programcic koji proverava da li je B paran ili neparan broj.
    if (b % 2 == 0) {
        console.log('Paran je broj');
    } else {
        console.log('Neparan broj');
    }
}
{
    let discountDay = 2;//Tuesday
    let dateTimeNow = new Date();
    let dayInWeek = dateTimeNow.getDay();
    let capricciosa = 120;
    let discountSize = 0.1;//10%
    let pizzaCount = 5;
    let finalPrice = capricciosa * pizzaCount;

    if (dayInWeek === discountDay) {
        //finalPrice=finalPrice*(1-discountSize);
        finalPrice *= 1 - discountSize;
    }
    console.log(`Price for ${pizzaCount} pizzas is ${finalPrice}`);

    {
        let hours = dateTimeNow.getHours();
        let minutes = dateTimeNow.getMinutes();
        let seconds = dateTimeNow.getSeconds();
        let dayInMonth = dateTimeNow.getDate();
        let month = dateTimeNow.getMonth();
        let year = dateTimeNow.getFullYear();
        let timeStampString = `${hours}:${minutes}:${seconds}`;
        let dayInWeekString;
        let monthString;
        switch (dayInWeek) {
            case 0: dayInWeekString = 'Sunday';
                break;
            case 1: dayInWeekString = 'Monday';
                break;
            case 2: dayInWeekString = 'Tuesday';
                break;
            case 3: dayInWeekString = 'Wednesday';
                break;
            case 4: dayInWeekString = 'Thursday';
                break;
            case 5: dayInWeekString = 'Friday';
                break;
            case 6: dayInWeekString = 'Saturday';
                break;
            default:
                console.error(`Unknown day ${dayInWeek}`);
                dayInWeekString = 'ERROR';
                break;
        }

        //Napisati kod koji vraca naziv meseca uobliku stringa.
        //Meseci pocinju od 0 tojest januar je 0
        switch (month) {
            case 0: monthString = "January";
                break;
            case 1: monthString = "February";
                break;
            case 2: monthString = "March";
                break;
            case 3: monthString = "April";
                break;
            case 4: monthString = "May";
                break;
            case 5: monthString = "June";
                break;
            case 6: monthString = "July";
                break;
            case 7: monthString = "August";
                break;
            case 8: monthString = "September";
                break;
            case 9: monthString = "October";
                break;
            case 10: monthString = "November";
                break;
            case 11: monthString = "December";
                break
            default:
                console.error(`Unknown month ${month}`);
                monthString = "ERROR";
                break;
        }

        app.innerHTML += `<p>Today is ${dayInWeekString}, ${dayInMonth} of ${monthString} ${year}. Current Time: <span id="current-time">${timeStampString}</span></p>`

    }
}

function helloWorld() {
    console.log('Hello World!');
}

console.log('Pre poziva funkcije!');
helloWorld();
console.log('Posle poziva funkcije!');
// let message=15;
// console.log(message);

function logMessage(message) {
    console.log(`${message}`);
}

{
    let poruka = 'Danas je suncan dan!';
    logMessage(poruka);
    logMessage('Batman!');
    logMessage();

}
function add(a, b) {
    let zbir = a + b;
    return zbir;

}

let rezultat = add(5, 2);
console.log(rezultat);
//console.log(helloWorld);

//Napisati funkciju koja na osnovu poslatog dana u nedelji kao broj,
// vraca recima koji je dan u nedelji

//let абв;
//абв;
function getDayOfWeek(dayInNumber) {
    switch (dayInNumber) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default: return 'ERROR!';
    }


}
function isEven(number) {
    if (number % 2 == 0) return true;
    else return false;
}
console.log(getDayOfWeek(0));//Sunday

console.log(isEven(5) ? 'Even' : 'Odd');

// if(isEven(5)){
//     console.log('Even');
// }else{
//     console.log('Odd');
// }

function logMessageTimeStamp(message) {
    let now = new Date();
    console.log(`${getTimeFormat(now)} ${message}`);
}
function getTimeFormat(time) {
    return `[${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}]`;
}
logMessageTimeStamp('Pauza pls!');
{

    let array = new Array();
    array.push(10);
    console.log(array);
    array.push('abc');
    console.log(array);
    array.unshift('start')
    console.log(array);
    array[0] = 'Dobar dan';
    console.log(array);
    let nizb = [1, 2, 3];
    console.log(nizb);
    //array.push(nizb);
    let nizc = array.concat(nizb);
    console.log(nizc);
    console.log(nizc.length);
    for (let i = 0; i < nizc.length; i++) {
        logMessageTimeStamp(nizc[i]);
    }
}

const orderBtnClassName = '.order-btn';
//const orderButtons = document.getElementsByClassName(orderBtnClassName);
const orderButtons = document.querySelectorAll(orderBtnClassName);
console.log(orderButtons);
// for(let button in orderButtons){
//     console.log(button);
// }//NE
const cart = document.querySelector('#cart');

const cartPop = document.querySelector('#cart-pop');
const pizzaCounterBadge = document.querySelector('#counter');
cartPop.style.display = 'none';
let isCartVisible = false;
var pizzaCount = 0;


function changeCartPopDisplay() {
    //cartPop.style.display=isCartVisible?'none':'block';
    if (isCartVisible) {
        cartPop.style.display = 'none';
        //cart.style.color='#FFFFFF';
    } else {
        cartPop.style.display = 'block';

        //cart.style.color='#ffff00';
    }
    isCartVisible = !isCartVisible;

}

cart.addEventListener('click', changeCartPopDisplay);


// let nesto=document.querySelector('#abc');
// let podatak=nesto.getAttribute('value');
// console.log(podatak)

// let object = document.querySelector('#abc');
// object.addEventListener('change', function () {
//      changeMe(object);
//      });

// function changeMe(element) {
//     let paragraph = document.querySelector('#par');
//     paragraph.innerHTML = element.getAttribute('value');
// }

/*for (let button of orderButtons) {
    button.addEventListener('click', function () {
        selectPizza(button);
    });
}*/

orderButtons.forEach(button => {
    button.addEventListener('click', function () {
        selectPizza(button);
    });
});
//Zapamtiti
function selectPizza(element) {
    console.log(element);
    pizzaCount++;
    pizzaCounterBadge.innerHTML = pizzaCount;
}
//Objekti
{
    let osoba =
    {
        name: 'Mirko',
        age: 18,
        money: 175,
        nicknames: ['Micko', 'Mire', 'Miki']
    }
    let osobe = [
        {
            name: 'Jovan',
            age: 17,
            money: 165,
            nicknames: []
        },
        {
            name: 'Sima',
            age: 19,
            money: 200
        },
        osoba
    ]
    console.log(osoba);
    console.log(osobe);
    let persona = {
        name: 'Milos',
        surname: 'Marko'
    }
    console.log(persona.name);
    persona.name = 'Marko';

    console.log(`Zovem se ${persona.name} ${persona.surname}`);
    osobe.forEach(element => {
        if (element.age >= 18) {
            console.log(element);
        }
    })
    persona.age = 20;
    console.log(persona);
    function getNameSurname(osoba) {
        return `${osoba.name} ${osoba.surname}`;
    }
    console.log(getNameSurname(persona));
    //OBject.keys(objekat) //Vraca niz KEY-ova objekta

    //Napraviti objekat koji opisuje jednu stavku porudzbine:
    //Potrebno je da sadrzi idPizze, Naziv, velicinu, kolicinu i cenu jednog komada
    //Potrebno je nakon toga napisati funkciju koja za poslatu picu vraca 
    //podatak o ukupnoj ceni stavke porudzbine.
    //i tu vrednost dodaje u objekat stavke porudzbine
    let stavka = {
        id: 1,
        name: 'Capricossa',
        size: 32,
        count: 5,
        unitPrice: 400
    }
    let discountDay = 2;
    let discount = 0.1;
    let dayToday = new Date();

    function getTotalPrice(stavka) {
        if (dayToday.getDay() == discountDay) {
            return stavka.count * stavka.unitPrice * (1 - discount);
        } else {
            return stavka.count * stavka.unitPrice;
        }
    }
    stavka.ukupnaCena = getTotalPrice(stavka);
    console.log(stavka.ukupnaCena);


    stavka.izracunajUkupnuCenu= function(){
        return this.unitPrice*this.count;
    }
    console.log(stavka.izracunajUkupnuCenu());

    console.log(osoba);
    let osobaString=JSON.stringify(osoba);
    console.log(osobaString);

    let poruka='{"naslov":"Dobar dan","telo":"Telo vreteno!"}';
    console.log(poruka);
    let porukaObjekat=JSON.parse(poruka);
    console.log(porukaObjekat);
}