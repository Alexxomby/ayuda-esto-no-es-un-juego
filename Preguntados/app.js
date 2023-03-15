//@ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./modelo/Quiz.js";
import { UI } from "./modelo/UI.js";

function main() {

    const quiz = new Quiz(questions);
    const ui = new UI();
    
    ui.showQuestion(quiz.getQuestionIndex().text);

    //ui.showQuestion(quiz.getQuestionIndex().choices);

}

main();