import { Component } from '@angular/core';

export class Quest {
  title: string;
  answers: Answer[];
  userAnswer: number;
  isBig = true;
}

export class Answer {
  id: number;
  text: string;
  correct: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onHome = true;
  score: number;
  bestScore = 0;
  quest: Quest = new Quest();
  currentQuest: number;
  quests: Quest[] = [
    {
      title: 'A respeito das características do algoritmo de escalonamento SPF(shortest process first), assinale a opção correta.',
      answers: [
        { id: 1, text: 'Os processos são executados na ordem em que chegam à fila de espera e executados até o final, sem nenhum evento preemptivo. ', correct: false },
        { id: 2, text: 'No SPF, um processo recém-chegado e em espera, cujo tempo estimado de execução completa seja menor, provoca a preempção de um processo em execução que apresente tempo estimado de execução completa maior. ', correct: false },
        { id: 3, text: 'O SPF favorece processos longos em detrimento dos mais curtos. Estes, ao chegarem à fila de espera, são obrigados a aguardar a conclusão dos processos longos que já estiverem em andamento, para, então, entrar em execução. ', correct: false },
        { id: 4, text: 'Os processos são despachados na ordem em que são colocados em espera e recebem uma quantidade limitada de tempo do processador para execução; além disso, são interrompidos caso sua execução não se conclua dentro do intervalo de tempo delimitado. ', correct: false },
        { id: 5, text: 'O escalonador seleciona o processo que estiver à espera e possuir o menor tempo de execução estimado e o coloca em execução até a sua conclusão. ', correct: true },
      ],
      userAnswer: 0,
      isBig: true
    },
    {
      title: 'Quando dois ou mais processos têm condições de “rodar", é o escalonador que decide, baseado em um algoritmo de escalonamento, qual será o próximo a receber tempo de CPU. Nesse contexto, quando há uma interrupção e suspensão temporária da execução de processos não bloqueados após um tempo máximo fixado tem-se o que categorizamos de escalonamento',
      answers: [
        { id: 1, text: 'Preemptivo', correct: true },
        { id: 2, text: 'First-Come, First Served. ', correct: false },
        { id: 3, text: 'Hood-Robin. ', correct: false },
        { id: 4, text: 'Quantum. ', correct: false },
        { id: 5, text: 'Não-preemptivo. ', correct: false },
      ],
      userAnswer: 0,
      isBig: false
    },
    {
      title: '“Escalonamento cooperativo” se dá quando a CPU é alocada para executar uma determinada atividade específica. Sistemas operacionais que usam esse tipo de escalonamento são conhecidos como “sistemas operacionais multitarefa cooperativa”. Toda essa abordagem está intimamente ligada a qual função dos sistemas operacionais?',
      answers: [
        { id: 1, text: 'Gerenciamento de arquivos.', correct: false },
        { id: 2, text: 'Gerenciamento da memória principal. ', correct: true },
        { id: 3, text: 'Controle do sistema de I/O. ', correct: false },
        { id: 4, text: ' Gerenciamento de processos.', correct: false },
        { id: 5, text: ' Suporte ao armazenamento secundário. ', correct: false },
      ],
      userAnswer: 0,
      isBig: false
    },
    {
      title: 'A maioria dos sistemas operacionais atuais utiliza um escalonador de tarefas do tipo preemptivo. Nesse tipo de escalonamento, a tarefa',
      answers: [
        { id: 1, text: 'Pode perder o processo caso ocorra uma interrupção para ativar uma tarefa mais prioritária.', correct: true },
        { id: 2, text: 'É executada por um tempo estabelecido, independentemente de requisições de outros processamentos. ', correct: false },
        { id: 3, text: 'Utiliza o processador tanto quanto necessário, até que haja a necessidade de uma operação de entrada ou saída. ', correct: false },
        { id: 4, text: 'Utiliza o processador, até que seja completamente executada e finalizada. ', correct: false },
        { id: 5, text: 'É executada de forma alternada com outra tarefa para evitar monopolização do processador. ', correct: false },
      ],
      userAnswer: 0,
      isBig: false
    },
  ];

  next(): void {
    this.updateScore();
    this.currentQuest++;
    this.quest = this.quests[this.currentQuest];
  }

  start(): void {
    this.currentQuest = 0;
    this.score = 0;
    this.quest = this.quests[this.currentQuest];
    this.onHome = false;
  }

  end(): void {
    this.updateScore();
    this.onHome = true;
    if (this.bestScore < this.score) {
      this.bestScore = this.score;
    }

    this.quests.map(quest => quest.userAnswer = undefined);
  }

  updateScore(): void {
    if (this.quest.userAnswer == this.quest.answers.find(res => res.correct === true).id) {
      this.score++;
    }
  }

  selectThis(id: number): void {
    this.quest.userAnswer = id;
  }
}
