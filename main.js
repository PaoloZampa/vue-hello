 /* Stampare a schermo un messaggio all’interno di un h1  utilizzando una proprietá nell'oggetto restituito dalla funzione data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Buon divertimento e confermate lettura come al solito! */
 
 
 const { createApp } = Vue

  createApp({
    data() {
      return {
        myMessage: 'Hello Vueeeeee!',
        imgLink: 'https://picsum.photos/1000/600'
      }
    }
  }).mount('#app')