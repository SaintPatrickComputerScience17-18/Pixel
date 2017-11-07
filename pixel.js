function Pixel(r,g,b){

    //declare red
    //declare green
    //declare blue


    this.addRed = function(n){
        //code in here
    };

    this.addGreen = function(n){
        //code in here
    };

    this.addBlue = function(n){
        //code in here
    };

    this.brighten = function(n){
        //code in here
    };

    this.complement = function(n){
        //code in here
    };

    this.grayScale = function(n){
        //code in here
    };


}

function report(mypixel){
    //reduces redundancy of code.
    console.log("My red is :"+mypixel.red);
    console.log("My green is :"+mypixel.green);
    console.log("My blue is :"+mypixel.blue);
}

//declares a main method to test the code.
function main(){

    //creates a Pixel-object
    let rectangle = new Pixel(200,100,120);

    //use a report to test each function
    report(rectangle);

    rectangle.addRed(60);
    rectangle.addGreen(60);
    rectangle.addBlue(60);

    console.log("------Added 60 to each value above------");
    report(rectangle);

    rectangle.brighten(-0.40);
    console.log("------Reduced brightness by 40%------");
    report(rectangle);

    
    console.log("------Complement to the previous color------");
    report(rectangle.complement());

    rectangle.grayScale();
    console.log("------Averages the 3 values from the brighten example------");
    report(rectangle);


}

//runs the code
main();
