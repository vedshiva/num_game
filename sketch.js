var rand = [];

var num;

function setup(){
canvas = createCanvas (1200,800)

for (var i=0;i<10;i++){

rand [i] = Math.round (random(1,50));

}


}

function draw(){
    background (255)

    for (var i=0;i<10;i++){
        textSize (22);
    text (rand[i],i*100,200);
    console.log (text)
    }

    textSize (24);
    fill (0)
    text (num, 600,400);

    
}

function keyPressed(){
    if (keyCode){
        num = Math.round (random(1,50));
        console.log (num)
        for (var i=0;i<10;i++){
            console.log (i)
        if (num === rand[i]){
            console.log (rand[i])
            rand[i]  = "x";

        }
    }
    }
}