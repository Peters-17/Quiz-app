import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any[] = [];
  currentQuestionIndex = 0;
  userAnswers: string[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
  }

  submitAnswer(choice: string) {
    this.userAnswers[this.currentQuestionIndex] = choice;
    this.currentQuestionIndex++;
  }

  getScore() {
    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].answer) {
        score++;
      }
    }
    return score;
  }
}
