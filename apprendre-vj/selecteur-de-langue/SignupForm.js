const SignupForm ={
    template:`<h2>Formulaire d'inscription</h2>
    <form @submit.prevent="onSubmit">
        <p><input type="text" v-model="nom" placeholder="votre nom"></p>
        <p><input type="email" v-model="email" placeholder="votre email"></p>
        <p><input type="submit" value="Enregistrer"></p>
    </form>`,
    data() {
        return {
            nom: '',
            email: ''
        };
    },
    emits:['form-submitted'],
    methods:{
        onSubmit(event){
            this.$emit('form-submitted', { nom: this.nom, email: this.email });
        }

    }
}