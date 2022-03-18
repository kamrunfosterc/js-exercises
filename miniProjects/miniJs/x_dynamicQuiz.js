// 'use strict'

(function (){
    var questions = [{
        question: "What is 2*5?",
        choices: [2,5,10,15,20],
        correctAnswer: 2
    },{
        question:"What is 3*6?",
        choices:[3,6,9,12,18],
        correctAnswer: 4
    },{
        question:"What is 8*9?",
        choices:[72,99,108,134,156],
        correctAnswer: 0
    },{
        question:"What is 8*8?",
        choices: [20,30,40,50,64],
        correctAnswer: 4
    }];
    var questionCounter = 0;//this tracks question number
    var selections = [];//array containing user choices
    var quiz = $('#quiz');//jquery call on quiz div object

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function (e){
        e.preventDefault();

        // Suspend click listener during fade animation
        if(quiz.is(':animated')){
            return false;//won't work during transition between questions
        }
        choose();

        // If no user selection, progress is stopped
        if(isNaN(selections[questionCounter])){
            alert('Please make a selection!');
        } else{
            questionCounter++;
            displayNext();
        }
    });
    //Click handler for the 'prev' button
    $('#prev').on('click', function (e){
        e.preventDefault();

        if (quiz.is(':animated')){
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });
    //Click handler for the 'Start Over' button
    $('#start').on('click', function (e){
        e.preventDefault();

        if (quiz.is(':animated')){
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    //Animates buttons on hover
    $('.button').on('mouseenter', function(){
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function (){
        $(this).removeClass('active');
    });

    //Creates and returns div containing questions and answer selections
    function createQuestionElement(index){
        var qElement = $('<div>',{
            id: 'question'
        });
        var header = $('<h2>Question '+ (index + 1)+ ':</h2>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    //Creates list of answer choices as radio inputs
    function createRadios(index){
        var radioList = $('<ul>');
        var item;
        var input = '';
        for (var i=0; i< questions[index].choices.length; i++){
            item = $('<li>');
            input = '<input type="radio" name="answer" value=' + i + '/>';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    //reads user selection and pushes value to an array
    function choose(){
        selections[questionCounter] = + $('input[name="answer"]:checked').val();
    }

    //displays next requested element
    function displayNext(){
        quiz.fadeout(function (){
            $('#question').remove();

            if (questionCounter < questions.length){
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if(!(isNaN(selections[questionCounter]))){
                    $('input[value='+selections[questionCounter]+']').prop('checked', true;
                }

                //Controls display of 'prev' button
            }
        })
    }

})