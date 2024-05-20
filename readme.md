> Consegna:
> L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.Bonus
> Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

    con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
> Consigli del giorno:
> :party_wizard: Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.Ad esempio: Di cosa ho bisogno per generare i numeri?
> Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.


Esercizio Campo Minato

1) Per prima cosa creiamo un header con un bottone dove andremo a clicclare per creare la griglia .
2) Dopo creiamo anche un contenitore dove appenade la griglia .
3) Nel file css iniziamo a crearci le classi che aggiungeremo dopo in css con la parte estetica.
4) Iniziamo con il JS : per prima cosa ho bisogno di assegnare ad una variabile il bottone selezionandolo tramite il suo selettore
5) Dopo averlo selezionato correttamente richiamo la variabile ed utilizzo una funzione evento click per dare istruzioni al bottone
    - all'interno dell'event ho bisogno di un ciclo che verrà ripetuto da 1 a 100 volte (quindi uso un for)
        -nel ciclo mi creo una variabile che corrisponderà al nostro quadrato
        - appendiamo il quadrato facendo in modo che sia figlia del nostro container precedentemente inserito nell'html 
        - appendiamo la/le classi che vogliamo all'interno del nostro elemento che modificheranno il nostro quadrato
    -Dopo aver fatto ciò creiamo un altro event che ci permette di visualizzare i numeri e cambiare il colore del quadrato quando clicco su di esso
        - appendiamo uno span che corrisponderà al nostro indice di iterazione 1-100 
        - per modificare lo sfondo appendiamo una classe al nostro quadrato precedentemente creata nel css 
        - inseriamo un console log che ci mostra la cifra cliccata in console.

SECONDA PARTE ESERCIZIO CAMPO MINATO:

> Consegna
> Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
> Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
> Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
> Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
> Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.BONUS:
> Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

    difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

> Consigli del giorno: :party_wizard:
> Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
> Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
> Le validazioni e i controlli possiamo farli anche in un secondo momento.

1) Per prima cosa mi creo nel css una nuova classe bomba che cambierà il background in rosso quando il numero cliccato risulta in una bomba
2) Per far si che le bombe vengano piazzete ho bisogno di una funzione che generi 16 numeri randomici che non si devono ripetere che vadano dall'inizio alla fine della difficoltà selezionata (Ciclo while dovrebbe venirci in aiuto visto che non sappiamo quante volte il ciclo si dovrà ripetere considerando che i numeri devono essere randomici ).
3) Se abbiamo generato i numeri correttamente possiamo far si di aggiungere ad essi la classe bomba creata prima in css
4) Dopo aver generato le bombe dobbiamo far si che se venisse cliccata una bomba il gioco finirebbe e ci deve venir stampata una stringa con il numero di volte che l'utente ha cliccato + il messaggio di sconfitta 
5) Se invece l'utente riesce ad evitare  tutte le bombe(cioè quando termina il numero di celle non bombe cliccabili che sarà uguale al numero delle celle - le bombe) ho bisogno di un messaggio di vittoria sempre seguito dai click 