var o = 1; 

//Number what Data is displayed
var displayNum = 0;

//variabels for Website creations
var div_header = document.createElement('div');
var label1 = document.createElement('label');
var input1 = document.createElement('input');
var label2 = document.createElement('label');
var input2 = document.createElement('input');
var paragraph1 = document.createElement('p');
var paragraph2= document.createElement('p');
var newButton = document.createElement('button');
var newButton2 = document.createElement('button');
var RiseLogo = document.createElement('img');

class LastString{
    constructor(){
        this.OutputString = "";
        this.OutputText = "";
        this.NumberofData = "";
        this.DataNumber = "";
    }
}

class AllLastStrings{
    constructor(){
        this.Strings = [];
    }
    newString(LastString)
    {
        this.Strings.push(LastString);
    }
    get allStrings()
    {
        return this.Strings;
    }
}

//Array for all TestStrings
var allLastStrings = new AllLastStrings();


fetch('Output.json')
            .then(response => response.json())
            .then(data => {

                var arrayString = JSON.stringify(data);
                var CleanString = CleanJSON(arrayString);

                //The sorted String ready for display
                lastString = new LastString()

                //Count on how many Strings get into one TestString
                var i = 0;

                //Count got many Test Strings there are
                var j = 0;

                CleanString.forEach(element => {

                    if(i==0){

                        lastString.OutputString = element;
                    }
                    if(i==1)
                    {
                        lastString.OutputText = element;
                    }
                    if(i==2)
                    {
                        lastString.NumberofData = element;
                    }
                    if(i==3)
                    {
                        lastString.DataNumber = element;

                        var newlastString = new LastString();
                        newlastString.DataNumber = lastString.DataNumber;
                        newlastString.NumberofData = lastString.NumberofData;
                        newlastString.OutputString = lastString.OutputString;
                        newlastString.OutputText = lastString.OutputText;

                        allLastStrings.newString(newlastString);

                        j++;
                        i = -1;

                        if(allLastStrings.allStrings.length == 5)
                        {
                        CreateDiv(allLastStrings.allStrings[0]);
                        }
                    }
                    i++;
                });
            });

//number of Paragraphs in html
var k = 0;

//Cleans the JSON into an Array of "LastString" objects
function CleanJSON(Input){

var FirstLetter = Input.slice(1);
var LastLetter = FirstLetter.slice(0, this.length - 2);

var MultipleJSONStrings = LastLetter.split("}");
var NewMultipleJSONStringsLoop=[];
var NewMultipleJSONStrings=[];
var z = 0;

MultipleJSONStrings.forEach(element => {
    //number of digits that are getting cut in front of the first string
    var u = 1;

    while(MultipleJSONStrings[0].charAt(u) != "{"){
        u++;
    }
    u++;

    //if loop needed cause if a problem when the number of data is 2 digit
    if(u==10)
    {
    u++;
    }

    NewMultipleJSONStringsLoop[z]=MultipleJSONStrings[z].slice(u);
    NewMultipleJSONStrings[z]=MultipleJSONStrings[z].slice(u);

    z++;
});

var SingleJSONStrings = [];
var RAM = [];
    var t = 0;
    var r = 0;

NewMultipleJSONStringsLoop.forEach(element => {

    RAM = NewMultipleJSONStrings[t].split(",");
    SingleJSONStrings[r] = RAM[0]
    r++;
    SingleJSONStrings[r] = RAM[1]
    r++;
    t++;
});

var Output = [];
var i =0;

SingleJSONStrings.forEach(element => {

    k++;

    var Data = element.split(":");

    Data.forEach(element => {

        if(element.charAt(0) != '"' && element.charAt(0) != '{')
        {
            LastLetterElement=element;
        }
        if(element.charAt(0) == '{'){
            var FirstLetterElement = element.slice(2);
            var LastLetterElement = FirstLetterElement.slice(0, this.length - 1);
        }
        if(element.charAt(0) != '{' && element.charAt(0) == '"'){
            var FirstLetterElement = element.slice(1);
            var LastLetterElement = FirstLetterElement.slice(0, this.length - 1);
        }

        Output[i]=LastLetterElement;

        for (let j = 0; j < LastLetterElement.length; j++) {
            if(LastLetterElement.charAt(j)=='"')
            {
                Output[i]=LastLetterElement.slice(0, this.length - 1);
            }
          }

        i++;
    })
});
return(Output);
}

//erstellt die div in der index.html
function CreateDiv(Input){

var i = 0;

    div_header.setAttribute('class','header');
    div_header.id = "center";

    label1.innerHTML = Input.OutputString;

    input1.value = Input.OutputText;

    label2.innerHTML = Input.NumberofData;

    input2.value = Input.DataNumber;

    newButton.addEventListener('click', ChangeDivNext);
    newButton.textContent = '->';
    newButton2.addEventListener('click', ChangeDivPrevious);
    newButton2.textContent = '<-';

    RiseLogo.src = "rise_logo.png";
    RiseLogo.id = "picture";

    //Instantiates all the objects in html in right order
    div_header.appendChild(label2);
    div_header.appendChild(input2);
    div_header.appendChild(label1);
    div_header.appendChild(input1);

    div_header.appendChild(paragraph1);

    div_header.appendChild(newButton2);
    div_header.appendChild(newButton);

    div_header.appendChild(paragraph2);

    div_header.appendChild(RiseLogo);
    document.body.appendChild(div_header);

}

//changes data in the html to the next one saved on "allLastStrings"
function ChangeDivNext(){
    if(displayNum == allLastStrings.allStrings.length-1)
    {
        alert("last data set");
    }
    else
    {
        displayNum++;
        input2.value = allLastStrings.allStrings[displayNum].DataNumber;
        input1.value = allLastStrings.allStrings[displayNum].OutputText;
    }
}
//changes data in the html to the previous one saved on "allLastStrings"
function ChangeDivPrevious(){
    if(displayNum == 0)
    {
        alert("first data set");
    }
    else{
        displayNum--;
        input2.value = allLastStrings.allStrings[displayNum].DataNumber;
        input1.value = allLastStrings.allStrings[displayNum].OutputText;
    }
}
