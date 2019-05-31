class CalcController {

    constructor() {

        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._displayDateEl = document.querySelector("#data");
        this._displayTimeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonEvents();
    }

    initialize() {
        //var that = this;
        this.setDisplayDateTime();

        //repetindo a cada intervalo, refresh
        let intervalo = setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

        //setando um timeout para executar uma única vez
        setTimeout(() => {

            //clearTimeout(intervalo);

            //clearTimeout -> para cancelar o timeout
        }, 10000)

    }

    addEventListenerAll(elemento, evento, funcao) {

        evento.split(" ").forEach(ev => {
            elemento.addEventListener(ev, funcao, false);
        });

    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    setError() {
        this.displayCalc = "Error";
    }


    addOperation(valor) {
        this._operation.push(valor);
    }


    execBtn(valorDoBotao) {
        switch (valorDoBotao) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.clearEntry();
                break;

            case 'subtracao':
                this.clearEntry();
                break;

            case 'multiplicacao':
                this.clearEntry();
                break;

            case 'igual':
                this.clearEntry();
                break;

            case 'divisao':
                this.clearEntry();
                break;

            case 'porcento':
                this.clearEntry();
                break;

            case 'ponto':
                this.clearEntry();
                break;

            default:

                this.setError();
                break;
        }
    }

    initButtonEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'drag', fnbotao => {

                let texto = btn.className.baseVal.replace("btn-", "");

                this.execBtn(texto);

            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', fnbotao => {

                btn.style.cursor = "pointer";

            })

        });

    }


    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
        );
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime() {
        return this._displayTimeEl.innerHTML;
    }

    set displayTime(valor) {
        this._displayTimeEl.innerHTML = valor;
    }

    get displayDate() {
        return this._displayDateEl.innerHTML;
    }

    set displayDate(valor) {
        this._displayDateEl.innerHTML = valor;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor) {
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(valor) {
        this._currentDate = valor;
    }

}