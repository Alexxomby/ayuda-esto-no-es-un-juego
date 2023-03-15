

import { Pregunta } from "../script/Pregunta"

export class Quiz {

    getQuestionIndex = 0
    score = 0
    constructor(preguntas){
        this.questions = questions
    }

    getQuestionIndex(){
        return this.question[this.getQuestionIndex]
    }

    guess(anwer){

        if(this.getQuestionIndex().respuestaCock(aswer))
        this.getQuestionIndex++
    }
}

new Quiz()

