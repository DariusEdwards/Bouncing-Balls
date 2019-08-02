let x = 0;
let y = 0;
let speed;
let speedY;

let a = 0;
let b = 0;
let speeda;
let speedb;

let j = 0;
let k = 0;
let speedj;
let speedk;

let t = 0;
let s = 0;
let speedt;
let speeds;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //createCanvas(600,600);
    background(0, 0, 0);
    x = 300;
    y = 30;

    a = 50;
    b = 100;

    j = 500;
    k = 30;

    t = 60;
    s = 500;

    speed = 5;
    speedY = 3;

    speeda = 2;
    speedb = 6;

    speedj = 4;
    speedk = 3;

    speedt = 8;
    speeds = 5;

}

function draw() {
    background(0, 0, 0);
    //fill(255, 50, 255);
    circle(x, y, 50);
    fill(random(0, 1000), random(0, 400), random(0, 400));

    circle(a, b, 50)
    fill(random(0, 1000), random(0, 400), random(0, 400));

    circle(j, k, 50)
    fill(random(0, 1000), random(0, 400), random(0, 400));

    circle(t, s, 50);
    fill(random(0, 1000), random(0, 400), random(0, 400));

    //  function mouseClicked() {
    //         circle(x, y, 10);
    //         fill(random(0,1000), random(0, 400), random(0,400));
    //     }


    if (x > width) {
        x -= speed;

        speed = -speed;

    } else if (x < 0) {
        x -= speed;
        speed = -speed;
    }

    if (y > height) {
        y -= speedY;
        speedY = -speedY;
    } else if (y < 0) {
        y -= speedY;
        speedY = -speedY;
    }

    x += speed;
    y += speedY;









    if (a > width) {
        a -= speeda;

        speeda = -speeda;

    } else if (a < 0) {
        a -= speeda;
        speeda = -speeda;
    }

    if (b > height) {
        b -= speedY;
        speedb = -speedb;
    } else if (b < 0) {
        b -= speedb;
        speedb = -speedb;
    }

    a += speeda;
    b += speedb;



    if (j > width) {
        j -= speedj;

        speedj = -speedj;

    } else if (j < 0) {
        j -= speedj;
        speedj = -speedj;
    }

    if (k > height) {
        k -= speedk;
        speedk = -speedk;
    } else if (k < 0) {
        k -= speedk;
        speedk = -speedk;
    }

    j += speedj;
    k += speedk;

    if (t > width) {
        t -= speedt;

        speedt = -speedt;

    } else if (t < 0) {
        t -= speedt;
        speedt = -speedt;
    }

    if (s > height) {
        s -= speeds;
        speeds = -speeds;
    } else if (s < 0) {
        s -= speeds;
        speeds = -speeds;
    }

    t += speedt;
    s += speeds;
}






// let x = 0;
// let y = 0;
// let speed;
// let speedY;

// let a = 0;
// let b = 0;
// let speeda;
// let speedb;

// let j = 0;
// let k = 0;
// let speedj;
// let speedk;

// let t = 0;
// let s = 0;
// let speedt;
// let speeds;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     //createCanvas(600,600);
//     background(0, 0, 0);
//     x = 300;
//     y = 30;

//     a = 50;
//     b = 100;

//     j = 500;
//     k = 30;

//     t = 60;
//     s = 500;

//     speed = 5;
//     speedY = 3;

//     speeda = 2;
//     speedb = 6;

//     speedj = 4;
//     speedk = 3;

//     speedt = 8;
//     speeds = 5;

// }

// function draw() {
//     background(0, 0, 0);
//     //fill(255, 50, 255);
//     circle(x, y, 50);
//     fill(random(0, 1000), random(0, 400), random(0, 400));

//     circle(a, b, 50)
//     fill(random(0, 1000), random(0, 400), random(0, 400));

//     circle(j, k, 50)
//     fill(random(0, 1000), random(0, 400), random(0, 400));

//     circle(t, s, 50);
//     fill(random(0, 1000), random(0, 400), random(0, 400));

//     //  function mouseClicked() {
//     //         circle(x, y, 10);
//     //         fill(random(0,1000), random(0, 400), random(0,400));
//     //     }


//     if (x > width) {
//         x -= speed;

//         speed = -speed;

//     } else if (x < 0) {
//         x -= speed;
//         speed = -speed;
//     }

//     if (y > height) {
//         y -= speedY;
//         speedY = -speedY;
//     } else if (y < 0) {
//         y -= speedY;
//         speedY = -speedY;
//     }

//     x += speed;
//     y += speedY;









//     if (a > width) {
//         a -= speeda;

//         speeda = -speeda;

//     } else if (a < 0) {
//         a -= speeda;
//         speeda = -speeda;
//     }

//     if (b > height) {
//         b -= speedY;
//         speedb = -speedb;
//     } else if (b < 0) {
//         b -= speedb;
//         speedb = -speedb;
//     }

//     a += speeda;
//     b += speedb;



//     if (j > width) {
//         j -= speedj;

//         speedj = -speedj;

//     } else if (j < 0) {
//         j -= speedj;
//         speedj = -speedj;
//     }

//     if (k > height) {
//         k -= speedk;
//         speedk = -speedk;
//     } else if (k < 0) {
//         k -= speedk;
//         speedk = -speedk;
//     }

//     j += speedj;
//     k += speedk;

//     if (t > width) {
//         t -= speedt;

//         speedt = -speedt;

//     } else if (t < 0) {
//         t -= speedt;
//         speedt = -speedt;
//     }

//     if (s > height) {
//         s -= speeds;
//         speeds = -speeds;
//     } else if (s < 0) {
//         s -= speeds;
//         speeds = -speeds;
//     }

//     t += speedt;
//     s += speeds;
// }
