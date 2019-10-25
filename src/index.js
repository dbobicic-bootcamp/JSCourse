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

const social = document.getElementById('social');
social.innerHTML =
    '<a href="https://www.facebook.com" target="_blank"><img class="social-icon" src="assets/images/fb_ico.png" /></a>';


social.innerHTML += '<a href="https://www.youtube.com" target="_blank"><img class="social-icon" src="assets/images/yt_ico.png" /></a>';

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