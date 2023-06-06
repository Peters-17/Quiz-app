import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questions = [
    { question: 'What is 1+1?', answer: '2', choices: ['2', '3', '4', '5'] },
    { question: 'What color is the sky?', answer: 'Blue', choices: ['Green', 'Blue', 'Red', 'Purple'] },
    { question: 'What is the capital of France?', answer: 'Paris', choices: ['London', 'Paris', 'Berlin', 'Madrid'] },
    { question: 'Which language is used in Angular?', answer: 'TypeScript', choices: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
  ];

  constructor() { }

  getQuestions() {
    return this.questions;
  }
}

