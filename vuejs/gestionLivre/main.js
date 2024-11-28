const app = Vue.createApp({
    data(){
        return{
            newBookTitle: '',
            newBookAuthor: '',

            books: [
                { id: 1, title: '1984', author: 'George Orwell', read: false },
                { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', read: true },
                { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', read: false },
                { id: 4, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', read: true },
                { id: 5, title: 'Moby Dick', author: 'Herman Melville', read: false }
              ],
              filter: 'all',
        };

    },
    methods:{
        addBook() {
            if (this.newBookTitle.trim() !== '' && this.newBookAuthor.trim() !== '') {
              this.books.push({
                id: Date.now(),
                title: this.newBookTitle,
                author: this.newBookAuthor,
                read: false
              });
              this.newBookTitle = '';
              this.newBookAuthor = '';
            }
        }

    },
   

});