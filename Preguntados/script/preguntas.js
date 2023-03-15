import { Pregunta } from "../modelo/pregunta.js";
import { data } from "./data.js";

const newPreguntas = data.map(pregunta => new Pregunta(pregunta.question, pregunta.choices, pregunta.answer))

export { newPreguntas };