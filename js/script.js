let circlePositions = [];
let position;
let c1X, c1Y, c2X, c2Y, c3X, c3Y, c4X, c4Y, c5X, c5Y, c6X, c6Y, c7X, c7Y, c8X, c8Y, c9X, c9Y, c10X, c10Y, c11X, c11Y, c12X, c12Y, c13X, c13Y, c14X, c14Y, c15X, c15Y, c16X, c16Y, c17X, c17Y, c18X, c18Y, c19X, c19Y, c20X, c20Y, c21X, c21Y, c22X, c22Y, c23X, c23Y, c24X, c24Y, c25X, c25Y, c26X, c26Y, c27X, c27Y, c28X, c28Y, c29X, c29Y, c30X, c30Y;
//↑位置　＝前の位置＋速さ

//R
c1X = 498; c1Y = 121;
c2X = 507; c2Y = 121;
c3X = 516; c3Y = 121;
c4X = 521; c4Y = 129;
c5X = 519; c5Y = 139;
c6X = 511; c6Y = 145;
c7X = 501; c7Y = 145;
c8X = 498; c8Y = 137;
c9X = 498; c9Y = 129;
c10X = 498; c10Y = 145;
c11X = 498; c11Y = 154;
c12X = 498; c12Y = 163;
c13X = 516; c13Y = 153;
c14X = 521; c14Y = 161;
//i
c15X = 537; c15Y = 122;
c16X = 537; c16Y = 138;
c17X = 537; c17Y = 147;
c18X = 537; c18Y = 156;
c19X = 537; c19Y = 165;
//k
c20X = 552; c20Y = 120;
c21X = 552; c21Y = 129;
c22X = 552; c22Y = 138;
c23X = 552; c23Y = 147;
c24X = 552; c24Y = 156;
c25X = 552; c25Y = 165;
c26X = 561; c26Y = 145;
c27X = 568; c27Y = 139;
c28X = 561; c28Y = 157;
c29X = 568; c29Y = 164;
//u
c30X = 583; c30Y = 138;
let c31X = 583; let c31Y = 147;
let c32X = 583; let c32Y = 156;
let c33X = 586; let c33Y = 164;
let c34X = 595; let c34Y = 168;
let c35X = 604; let c35Y = 164;
let c36X = 607; let c36Y = 156;
let c37X = 607; let c37Y = 147;
let c38X = 607; let c38Y = 138;
let c39X = 607; let c39Y = 164;
let c40X = 607; let c40Y = 168;
//K
let c41X = 643; let c41Y = 120;
let c42X = 643; let c42Y = 129;
let c43X = 643; let c43Y = 138;
let c44X = 643; let c44Y = 147;
let c45X = 643; let c45Y = 156;
let c46X = 643; let c46Y = 165;
let c47X = 652; let c47Y = 138;
let c48X = 657; let c48Y = 131;
let c49X = 662; let c49Y = 124;
let c50X = 652; let c50Y = 149;
let c51X = 657; let c51Y = 156;
let c52X = 662; let c52Y = 163;
let c53X = 665; let c53Y = 120;
let c54X = 667; let c54Y = 168;
//i
let c55X = 680; let c55Y = 122;
let c56X = 680; let c56Y = 138;
let c57X = 680; let c57Y = 147;
let c58X = 680; let c58Y = 156;
let c59X = 680; let c59Y = 165;
//m
let c60X = 695; let c60Y = 138;
let c61X = 695; let c61Y = 147;
let c62X = 695; let c62Y = 156;
let c63X = 695; let c63Y = 165;
let c64X = 700; let c64Y = 138;
let c65X = 705; let c65Y = 135;
let c66X = 710; let c66Y = 136;
let c67X = 716; let c67Y = 140;
let c68X = 717; let c68Y = 142;
let c69X = 717; let c69Y = 151;
let c70X = 717; let c70Y = 160;
let c71X = 717; let c71Y = 165;
let c72X = 722; let c72Y = 138;
let c73X = 727; let c73Y = 135;
let c74X = 733; let c74Y = 136;
let c75X = 739; let c75Y = 140;
let c76X = 740; let c76Y = 147;
let c77X = 740; let c77Y = 156;
let c78X = 740; let c78Y = 165;
//u
let c79X = 753; let c79Y = 138;
let c80X = 753; let c80Y = 147;
let c81X = 753; let c81Y = 156;
let c82X = 756; let c82Y = 164;
let c83X = 765; let c83Y = 168;
let c84X = 774; let c84Y = 164;
let c85X = 777; let c85Y = 156;
let c86X = 777; let c86Y = 147;
let c87X = 777; let c87Y = 138;
let c88X = 777; let c88Y = 164;
let c89X = 777; let c89Y = 168;
//r
let c90X = 792; let c90Y = 138;
let c91X = 792; let c91Y = 147;
let c92X = 792; let c92Y = 156;
let c93X = 792; let c93Y = 165;
let c94X = 792; let c94Y = 143;
let c95X = 797; let c95Y = 145;
let c96X = 802; let c96Y = 142;
let c97X = 805; let c97Y = 144;
//a
let c98X = 817; let c98Y = 138;
let c99X = 825; let c99Y = 135;
let c100X = 833; let c100Y = 138;
let c101X = 837; let c101Y = 143;
let c102X = 837; let c102Y = 149;
let c103X = 837; let c103Y = 157;
let c104X = 837; let c104Y = 165;
let c105X = 832; let c105Y = 150;
let c106X = 825; let c106Y = 151;
let c107X = 820; let c107Y = 152;
let c108X = 816; let c108Y = 156;
let c109X = 814; let c109Y = 160;
let c110X = 816; let c110Y = 164;
let c111X = 823; let c111Y = 168;
let c112X = 830; let c112Y = 165;


circlePositions = [
    [c1X, c1Y], [c2X, c2Y], [c3X, c3Y], [c4X, c4Y], [c5X, c5Y], [c6X, c6Y], [c7X, c7Y], [c8X, c8Y], [c9X, c9Y], [c10X, c10Y],
    [c11X, c11Y], [c12X, c12Y], [c13X, c13Y], [c14X, c14Y], [c15X, c15Y], [c16X, c16Y], [c17X, c17Y], [c18X, c18Y], [c19X, c19Y], [c20X, c20Y],
    [c21X, c21Y], [c22X, c22Y], [c23X, c23Y], [c24X, c24Y], [c25X, c25Y], [c26X, c26Y], [c27X, c27Y], [c28X, c28Y], [c29X, c29Y], [c30X, c30Y],
    [c31X, c31Y], [c32X, c32Y], [c33X, c33Y], [c34X, c34Y], [c35X, c35Y], [c36X, c36Y], [c37X, c37Y], [c38X, c38Y], [c39X, c39Y], [c40X, c40Y],
    [c41X, c41Y], [c42X, c42Y], [c43X, c43Y], [c44X, c44Y], [c45X, c45Y], [c46X, c46Y], [c47X, c47Y], [c48X, c48Y], [c49X, c49Y], [c50X, c50Y],
    [c51X, c51Y], [c52X, c52Y], [c53X, c53Y], [c54X, c54Y], [c55X, c55Y], [c56X, c56Y], [c57X, c57Y], [c58X, c58Y], [c59X, c59Y], [c60X, c60Y],
    [c61X, c61Y], [c62X, c62Y], [c63X, c63Y], [c64X, c64Y], [c65X, c65Y], [c66X, c66Y], [c67X, c67Y], [c68X, c68Y], [c69X, c69Y], [c70X, c70Y],
    [c71X, c71Y], [c72X, c72Y], [c73X, c73Y], [c74X, c74Y], [c75X, c75Y], [c76X, c76Y], [c77X, c77Y], [c78X, c78Y], [c79X, c79Y], [c80X, c80Y],
    [c81X, c81Y], [c82X, c82Y], [c83X, c83Y], [c84X, c84Y], [c85X, c85Y], [c86X, c86Y], [c87X, c87Y], [c88X, c88Y], [c89X, c89Y], [c90X, c90Y],
    [c91X, c91Y], [c92X, c92Y], [c93X, c93Y], [c94X, c94Y], [c95X, c95Y], [c96X, c96Y], [c97X, c97Y], [c98X, c98Y], [c99X, c99Y], [c100X, c100Y],
    [c101X, c101Y], [c102X, c102Y], [c103X, c103Y], [c103X, c103Y], [c104X, c104Y], [c105X, c105Y], [c106X, c106Y], [c107X, c107Y], [c108X, c108Y], [c109X, c109Y], [c110X, c110Y],
    [c111X, c111Y], [c112X, c112Y]
];

let targetBoolean = [];
let fall = [], fallCount = [], fallCountBoolean = [];
let speedsX = []; //[番号][値]
let speedsY = []; //[番号][値]
let frictionsX = [];
let gravitysY = [];


let targetX = []; // 到達したいx座標
let targetY = []; // 到達したいy座標
let targetCount = [];
let randomMode;

let target2 = []; //ついてくるようにする
let Ptarget2;

let target3;
let target3Circle = [];
let target3CircleBoolean = true;

let information = [];
let infomartionCount = 0;

let circleColor = [255, 255, 255];
let circleColorTerget = [255, 255, 255];
let circleColorBoolean = true;

let canvasWidth;
let canvasHeight

function setup() {
    const canvasParent = document.getElementById('canvas-parent');
    canvasWidth = canvasParent.offsetWidth;
    canvasHeight = canvasParent.offsetHeight;
    const sketchCanvas = createCanvas(canvasWidth, canvasHeight);
    sketchCanvas.parent('canvas-parent');
    print(sketchCanvas.canvas);
    sketchCanvas.canvas.classList.add('z-n1');
    sketchCanvas.canvas.classList.add('position-absolute');
    sketchCanvas.canvas.classList.add('top-0');
    sketchCanvas.canvas.classList.add('start-0');


    for (let i = 0; i < circlePositions.length; i++) {
        information.push(true);
        speedsX.push(random(-10, 10));
        speedsY.push(random(-30, 0));
        frictionsX.push(0.5);
        gravitysY.push(0.1);
        targetX.push(circlePositions[i][0]);
        targetY.push(circlePositions[i][1]);
        // Ptarget2.push(circlePositions[55]);
        // Ptarget2 = int(random(circlePositions.length - 1))
        target2.push(circlePositions[55][0]);
        target2.push(circlePositions[55][1]);
        targetCount.push(0);
        targetCount.push(0);
        targetBoolean.push(false);
        fall.push(false);
        fallCount.push(0);
        fallCountBoolean.push(true);
    }
    randomMode = int(random(3));
}

function draw() {
    background(255);
    // console.log(circleColor[0]);
    if (information[0] && infomartionCount == 0) {
        stroke(0);
        if (width / 2 - 45 < mouseX && mouseX < width / 2 + 45 && height / 2 - 15 < mouseY && mouseY < height / 2 + 15) {
            fill(255, 0, 0, 200);
        } else {
            noFill();
        }
        rect(width / 2 - 45, height / 2 - 15, 90, 20);
        fill(0, 0, 0);
        textAlign(CENTER);
        textSize(15);
        text("Click me!", canvasWidth / 2, canvasHeight / 2);
        textSize(12);
        text("Stop and then click to randomly", canvasWidth / 2 , canvasHeight / 2 + 20)
        text("change colors and patterns.", canvasWidth / 2 , canvasHeight / 2 + 40)
        infomartionCount++;
    }
    for (let i = 0; i < circleColorTerget.length; i++) {
        if (circleColorTerget[i] - circleColor[i] < 0) {
            circleColor[i] -= abs(circleColorTerget[i] - circleColor[i]) / 250;
        } else if (circleColorTerget[i] - circleColor[i] > 0) {
            circleColor[i] += abs(circleColorTerget[i] - circleColor[i]) / 250;
        } else {

        }

    }
    for (let i = 0; i < circlePositions.length; i++) {
        position = circlePositions[i];
        noStroke();
        //250までに目標の色を段々変えていく
        fill(circleColor[0], circleColor[1], circleColor[2]);
        let k = c54X - width / 2;
        circle(position[0] - k, position[1] , 10);

        if (targetBoolean[i] == false) {
            if (fall[i] && fallCount[i] < 250) {
                position[0] += speedsX[i];
                if (circleColorBoolean) {
                    for (let i = 0; i < circleColorTerget.length; i++) {
                        circleColorTerget[i] = random(0, 255);
                    }
                    circleColorBoolean = false;
                }
                position[1] += speedsY[i];
                speedsY[i] += gravitysY[i];

                if (position[1] - 100 > canvasHeight) {
                    speedsY[i] *= -0.7;
                    position[1] = canvasHeight + 100;
                    if (abs(speedsX[i]) < frictionsX[i]) {
                        speedsX[i] = 0;
                    } else if (speedsX[i] < 0) {
                        speedsX[i] += frictionsX[i];
                    } else {
                        speedsX[i] -= frictionsX[i];
                    }
                } else if (position[1] - 100 < 0) {
                    speedsY[i] *= -1;
                    position[1] = 100;
                }
                if (position[0] - k > canvasWidth) {
                    speedsX[i] *= -1;
                    position[0] = canvasWidth + k;
                } else if (position[0] - k < 0) {
                    speedsX[i] *= -1;
                    position[0] = k;
                }

                fallCount[i]++;
                if (fallCount[i] == 250) {
                    fall[i] = false;
                    fallCountBoolean[i] = true;
                    targetBoolean[i] = true;
                }
            }
        } else {
            if (abs(targetX[i] - position[0]) > 0.5 || abs(targetY[i] - position[1]) > 0.5) {
                if (targetCount[i] > 100) {
                    // 目標座標に向かって移動する
                    position[0] += (targetX[i] - position[0]) * 0.05; // 0.05はボールの移動速度を調整するための値
                    position[1] += (targetY[i] - position[1]) * 0.05; // 0.05はボールの移動速度を調整するための値
                } else {
                    if (randomMode == 0) {

                        position[0] += speedsX[i];
                        position[1] += speedsY[i];
                        targetCount[i]++;
                    } else if (randomMode == 1) {
                        /*案2 */
                        position[0] += speedsX[i];
                        position[1] += speedsY[i];
                        if (speedsX[i] < 0) {
                            speedsX[i] += abs(speedsX[i]) / 30;
                        } else {
                            speedsX[i] -= abs(speedsX[i]) / 30;
                        }
                        if (speedsY[i] < 0) {
                            speedsY[i] += abs(speedsY[i]) / 30;
                        } else {
                            speedsY[i] -= abs(speedsY[i]) / 30;
                        }

                        targetCount[i]++;
                    } else if (randomMode == 2) {
                        position[0] += (target2[0] - position[0]) * 0.05; // 0.05はボールの移動速度を調整するための値
                        position[1] += (target2[1] - position[1]) * 0.05; // 0.05はボールの移動速度を調整するための値
                        targetCount[i]++;
                    } else if (randomMode == 3) {
                        // if (target3CircleBoolean) {
                        //     target3Circle.push(k);
                        //     target3Circle.push(100);
                        //     target3 = i;
                        //     target3CircleBoolean = false;
                        // } else if (target3CircleBoolean == false)  {
                        // position[0] += (target3Circle[0] - position[0]) * 0.01; // 0.05はボールの移動速度を調整するための値
                        // position[1] += (target3Circle[1] - position[1]) * 0.01; // 0.05はボールの移動速度を調整するための値
                        // if(target3 == i){
                        //     target3Circle[0] ++;
                        // }
                        // //円のやつインタラ2
                        // targetCount[i] += 0.5;
                        // // console.log(target3Circle);
                        // }
                    }
                }
            } else {
                // console.log(i, position[0], position[1], targetCount[i], "");
                targetCount[i] = 0;
                speedsX[i] = (random(-10, 10));
                speedsY[i] = (random(-30, 10));
                targetBoolean[i] = false;
                if (i == 1) {
                    circleColorBoolean = true;
                    randomMode = int(random(3));
                    // target3Circle.length = 0;
                    // target3CircleBoolean = true;
                }
                // information[i] = true;
                // console.log(randomMode);
            }
        }
    }
    infomartionCount = 0;
}

function mouseClicked() {
    for (let i = 0; i < circlePositions.length; i++) {
        if (0 < mouseX && mouseX < width && 0 < mouseY && mouseY < height) {
            information[i] = false;
            if (fallCountBoolean[i]) {
                fall[i] = true;
                fallCount[i] = 0;
                fallCountBoolean[i] = false;
            }
        }
    }
}

