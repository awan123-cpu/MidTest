let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;
let questions = quiz.sort(function(){
    return 0.5 - Math.random();

});

let totaQuestion = questions.length;



$(function(){
 //timer start//
let totalTime = 1500;
let min = 0;
let sec = 0;
let counter = 0;
let timer = setInterval(function(){
    counter++;
    min = Math.floor( (totalTime - counter) / 60 );
    sec = totalTime - (min * 60) - counter;

    $(".timerBox span").text(min + ":" + sec);
    //console.log("min = " + min);
    //console.log("sec = "+ sec);

    if (counter == totalTime) {
        clearInterval (timer);
    }
}, 1000);
 //timer end//


 //untuk pertanyaan//
 printQuestion(index);

});

//fungsi to print question start//
function printQuestion(I) {
    $(".questionBox").text(questions[I].question);
    $(".optionBox span").eq(0).text(questions[I].option[0])
    $(".optionBox span").eq(1).text(questions[I].option[1])
    $(".optionBox span").eq(2).text(questions[I].option[2])
    $(".optionBox span").eq(3).text(questions[I].option[3])

}
//fungsi to print question end//


//check jawaban awal//
function chcekAnswer(option){
    attempt++;

    let optionClicked = $(option).data("opt");
    
    console.log(optionClicked);

    //console.log(questions[index]);

    if(optionClicked == questions[index].answer){
        $(option).addClass("right");
        score++
    } else{
        $(option).addClass("wrong");
        wrong++
    }

    $(".scoreBox span").text(score)

    $(".optionBox span").attr("onclick","")

}

//check jawaban akhir//

//function for next button awal//

function showNext(){
    if(index >=(questions.length - 1) ){
        showResult(0);
        return;
    }
   index++;

   $(".optionBox span").removeClass();
   $(".optionBox span").attr("onclick","chcekAnswer(this)")
   printQuestion(index);
}

//function for next button akhir//
function showResult(j) {
    if(
        j == 1 &&
        index < questions.length -1 &&
        !confirm(
            "Sorry You haven't complete your answer. Press OK to skip your placement test."
        )
    ) {
        return;
    }

    $("#questionScreen").hide();
    $("#resultScreen").show();

    $("#totalQuestion").text(totaQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswer").text(score);
    $("#wrongAnswer").text(wrong);
}





//function for result awal//
