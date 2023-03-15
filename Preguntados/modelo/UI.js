
export class UI{
    constructor(){
    }

    /**
     * 
     * @param {String} text pregunta a procesar
     */
    showQuestion(text){

        const questionTitle =document.getElementById('question');
        questionTitle.innerText = text;

    }

    /**
     * 
     * @param {string[]} choices opciones de las preguntas
     */
    showChoices(choices){
        
    const choicesContainer = document.getElementById("choices");

        for (let i = 0; i < choices.length; i++){

            const buton = document.createElement("button");
            buton.innerText = "algo";
            buton.className = 'button';

            choicesContainer.append(buton);
        }



    }

}