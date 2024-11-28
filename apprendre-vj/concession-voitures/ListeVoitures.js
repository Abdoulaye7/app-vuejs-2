const ListeVoitures = {
  template: `
    <p> {{nombreVoituresAffichees}} voitures : </p>
    <ul>
       <li v-for="v of voitures" 
       :key="v.serie" 
       :data-serie="v.serie"
       v-show="voitureAffichable(v)">
          Modèle {{v.modele}} : {{v.puissance}} ch, crit’air {{v.critair}} 
          <span v-show="assuranceElevee(v)"> (assurance +)</span>
       </li>
    </ul>
  `,
  props: {
    voitures: {
      type: Array,
      required: true
    },
    critair: {
      type: Number,
      default: 6,
    }
  },
  computed: {
    nombreVoituresAffichees() {
      return this.voitures.filter(v => this.voitureAffichable(v)).length;
    }
  },
  methods: {
    assuranceElevee(v) {
      return v.puissance >= 150;
    },
    voitureAffichable(v) {
      return v.critair <= this.critair ;
    }
  }
};
