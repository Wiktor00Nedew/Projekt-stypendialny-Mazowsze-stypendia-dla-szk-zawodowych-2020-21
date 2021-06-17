var acceleratedQuestions = {
    questions: [
    'Ile minimalnie sił musi działać na ciało, aby poruszało się ono ruchem jednostajnie przyspieszonym?',
    'Prękość statku wzrosła w 60 km/h w czasie 4 godzin. Ile wynosi przyspieszenie?', 
    'Jeżeli prędkość ciała się zmniejszyła, to przyspieszenie jest:'
    ],
    trueAnswers: ['1', '15 km/h2', 'ujemne'],
    answers1: ['1', '2', '3', '4'],
    answers2: ['60 km/h2', '20 km/h2', '15 km/h2', '5 km/h2'],
    answers3: ['równe 0', 'dodatnie', 'ujemne', 'zbyt mało danych'],
    currentQuestion: 0
};

var uniformQuestions = {
    questions: [
    'Droga przebyta przez ciało w ruchu jednostajnym wynosi 20 km, czas ruchu to 2h. Jaka jest prędkość tego ciała?', 
    'Ruch jednostajny występuje wtedy, gdy na ciało działa:', 
    'Gdy droga się wydłuża, a czas pozostaje bez zmian i jest różny od zera, to:'
    ],
    trueAnswers: ['10 km/h', '0 sił', 'prędkość wzrasta'],
    answers1: ['25 km/h', '20 km/h', '10 km/h', '40 km/h'],
    answers2: ['1 niezrównoważona siła', '2 niezrównoważone siły', '3 nierównoważące się siły', '0 sił'],
    answers3: ['prędkość wzrasta', 'prędkość maleje', 'prękość się nie zmienia', 'prędkość jest równa zero'],
    currentQuestion: 0
};

var freeFallQuestions = {
    questions: [
        '',
        'question2',
        'question3'],
    trueAnswers: ['b', 'd', 'c'],
    answers1: ['a', 'b', 'c', 'd'],
    answers2: ['a', 'b', 'c', 'd'],
    answers3: ['a', 'b', 'c', 'd'],
    currentQuestion: 0
};

$('button#button1').on('click', function(){
    let object;
    if($('body#acceleratedBody').length){
        object = acceleratedQuestions;
    }
    else if($('body#uniformBody').length){
        object = uniformQuestions;
    }
    else if($('body#freeFallBody').length){
        object = freeFallQuestions;
    }
    console.log("button 1 clicked");
    on_click(1, object);
});

$('button#button2').on('click', function(){
    let object;
    if($('body#acceleratedBody').length){
        object = acceleratedQuestions;
    }
    else if($('body#uniformBody').length){
        object = uniformQuestions;
    }
    else if($('body#freeFallBody').length){
        object = freeFallQuestions;
    }
    console.log("button 2 clicked");
    on_click(2, object);
});

$('button#button3').on('click', function(){
    let object;
    if($('body#acceleratedBody').length){
        object = acceleratedQuestions;
    }
    else if($('body#uniformBody').length){
        object = uniformQuestions;
    }
    else if($('body#freeFallBody').length){
        object = freeFallQuestions;
    }
    console.log("button 3 clicked");
    on_click(3, object);
});

$('button#button4').on('click', function(){
    let object;
    if($('body#acceleratedBody').length){
        object = acceleratedQuestions;
    }
    else if($('body#uniformBody').length){
        object = uniformQuestions;
    }
    else if($('body#freeFallBody').length){
        object = freeFallQuestions;
    }
    console.log("button 4 clicked");
    on_click(4, object);
});

$('button#nextButton').on('click', function(){
    let object;
    let questionNumber;
    if($('body#acceleratedBody').length && acceleratedQuestions.currentQuestion < 2){
        questionNumber = ++acceleratedQuestions.currentQuestion;
        object = acceleratedQuestions;
    }
    else if($('body#uniformBody').length && uniformQuestions.currentQuestion < 2){
        questionNumber = ++uniformQuestions.currentQuestion;
        object = uniformQuestions;
    }
    else if($('body#freeFallBody').length && freeFallQuestions.currentQuestion < 2){
        questionNumber = ++freeFallQuestions.currentQuestion;
        object = freeFallQuestions;
    }
    if(questionNumber <= 2){
        load_content(questionNumber, object)
    }
});

$(document).ready(function(){
    let object;
    if($('body#acceleratedBody').length){
        object = acceleratedQuestions;
    }
    else if($('body#uniformBody').length){
        object = uniformQuestions;
    }
    else if($('body#freeFallBody').length){
        object = freeFallQuestions;
    }
    //console.log("loaded page");
    load_content(0, object);
});

function on_click(buttonNumber, object){
    let buttonSet;
    if(object.currentQuestion == 0){
        buttonSet = object.answers1;
    }
    else if(object.currentQuestion == 1){
        buttonSet = object.answers2;
    }
    else if(object.currentQuestion == 2){
        buttonSet = object.answers3;
    }
    console.log(buttonSet[buttonNumber]);
    console.log(object.trueAnswers[object.currentQuestion]);
    if(buttonSet[buttonNumber - 1] == object.trueAnswers[object.currentQuestion]){
        $('h2#tryAgain').text('');
        if(buttonNumber == 1){
            $('button#button1').css('background-color', 'green');
        }
        else if(buttonNumber == 2){
            $('button#button2').css('background-color', 'green');
        }
        else if(buttonNumber == 3){
            $('button#button3').css('background-color', 'green');
        }
        else if(buttonNumber == 4){
            $('button#button4').css('background-color', 'green');  
        }
        $('button#nextButton').attr('disabled', false);
    }
    else{
        $('h2#tryAgain').text('Spróbuj ponownie');
        if(buttonNumber == 1){
            $('button#button1').css('background-color', 'red');
        }
        else if(buttonNumber == 2){
            $('button#button2').css('background-color', 'red');
        }
        else if(buttonNumber == 3){
            $('button#button3').css('background-color', 'red');
        }
        else if(buttonNumber == 4){
            $('button#button4').css('background-color', 'red');  
        }
    }
}

function load_content(questionNumber, object){
    $('h2#question').text(object.questions[questionNumber]);
    $('button#nextButton').attr('disabled', true);
    let t;
    let rd;
    for(let i = 0; i < 4; i++){
        rd = Math.floor(Math.random()*4);
        if(questionNumber == 0){
            t = object.answers1[i];
            object.answers1[i] = object.answers1[rd];
            object.answers1[rd] = t;
        }
        else if(questionNumber == 1){
            t = object.answers2[i];
            object.answers2[i] = object.answers2[rd];
            object.answers2[rd] = t;
        }
        else if(questionNumber == 2){
            t = object.answers3[i];
            object.answers3[i] = object.answers3[rd];
            object.answers3[rd] = t;
        }
    }
    for(let i = 0; i < 4; i++){
        //console.log("text inserted");
        //console.log(object.currentQuestion);
        $('button#button1').css('background-color', 'white'); 
        $('button#button2').css('background-color', 'white'); 
        $('button#button3').css('background-color', 'white'); 
        $('button#button4').css('background-color', 'white'); 
        $('h2#tryAgain').text('');
        if(questionNumber == 0){
            if(i == 0){
                $('button#button1').text(object.answers1[i]);
            }
            else if(i == 1){
                $('button#button2').text(object.answers1[i]);
            }
            else if(i == 2){
                $('button#button3').text(object.answers1[i]);
            }
            else if(i == 3){
                $('button#button4').text(object.answers1[i]);  
            }
        }
        else if(questionNumber == 1){
            if(i == 0){
                $('button#button1').text(object.answers2[i]);
            }
            else if(i == 1){
                $('button#button2').text(object.answers2[i]);
            }
            else if(i == 2){
                $('button#button3').text(object.answers2[i]);
            }
            else if(i == 3){
                $('button#button4').text(object.answers2[i]);
            }
            
        }
        else if(questionNumber == 2){
            if(i == 0){
                $('button#button1').text(object.answers3[i]);
            }
            else if(i == 1){
                $('button#button2').text(object.answers3[i]);
            }
            else if(i == 2){
                $('button#button3').text(object.answers3[i]);
            }
            else if(i == 3){
                $('button#button4').text(object.answers3[i]);
            }
            
        }
    }
    //debug
    //console.log(object.answers1[0]);
    //console.log(object.answers1[1]);
    //console.log(object.answers1[2]);
    //console.log(object.answers1[3]);
    //endOfDebug
}