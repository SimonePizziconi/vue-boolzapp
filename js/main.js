const { createApp } = Vue;

  createApp({
    data() {
      return {
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/boy.png',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/gamer-1.png',
                visible: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Francesca',
                avatar: 'img/girl.png',
                visible: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicura di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/man-1.png',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/man-2.png',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/woman-2.png',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federica',
                avatar: 'img/woman.png',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
        ],
        newMessage: ``, 
        searchName: ``,
        activeDropdownIndex: null,
      }
    },
    methods: {
        // Aggiungi classe alla chat attiva
        activeClass(index){
            this.filteredContacts.forEach((chat, i) => {
                chat.visible = i === index;
            });
        },

        // Invia un nuovo messaggio
        sendNewMessage(){
            if(this.newMessage.trim() !== '' && this.activeChat){
                this.activeChat.messages.push({
                    message: this.newMessage,
                    status: 'sent'
                  });
                  setTimeout(() => {
                    this.activeChat.messages.push({
                      message: 'ok',
                      status: 'received'
                    });
                  }, 1000);
                  this.newMessage = '';
            }
        },

        // Per mostare il dropdown
        toggleDropdown(index) {
            this.activeDropdownIndex = this.activeDropdownIndex === index ? null : index;
        },

        // Elimina messaggio
        deleteMessage(index) {
            // Rimuovi il messaggio dall'array activeChat.messages
            this.activeChat.messages.splice(index, 1);

            // Chiudi il menu a tendina dopo l'eliminazione
            this.activeDropdownIndex = null;
        },

        // Mostra date e ultimo messaggio inviato
        getLastMessage(contact) {
            // Restituisce l'ultimo messaggio del contatto
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage ? lastMessage.message : '';
        },

        getLastMessageTime(contact) {
            // Restituisce l'ora dell'ultimo messaggio del contatto
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage ? lastMessage.date.split(' ')[1] : '';
        }

    },
    computed:{
        // Mostra i messaggi in base alla chat attiva
        activeChat(){
            return this.contacts.find(chat => chat.visible);
        },
        
        filteredContacts() {
            if (!this.searchName.trim()) {
                return this.contacts;
            }
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.searchName.trim().toLowerCase())
            );
        },
    }
  }).mount('#app');