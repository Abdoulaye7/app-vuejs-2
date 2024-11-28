const DialogueVoiture={
    template:
    `
      <div class="dialog">
        <p>
        Numéro série : <input type="text" v-model="voiture.serie"><br>
        Modèle : <input type="text" v-model="voiture.modele"><br>
        Puissance : <input type="number" step="1" v-model="voiture.puissance"> ch<br>
        Niveau Crit’air : <input type="number" step="1" v-model="voiture.critair">
        </p>
        <p>
        <input type="button"  value="Valider" @click="onValider">
        <input type="button"  value="Annuler" @click="onAnnuler">
        </p>
        </div>
    `,
    emits:['valider','annuler'],
    data(){
        return{
            voiture:{serie:'',modele:'',puissance:0,critair:6},
        }
    },
    methods:{
        onValider(event){
            this.$emit('valider',{...this.voiture})

        },
        onAnnuler(event){
            this.$emit('annuler');

        }

    },
}