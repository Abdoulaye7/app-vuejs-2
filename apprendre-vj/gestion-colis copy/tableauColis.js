const tableauColis = {
    template: `
      <table @click="onClick">
        <thead>
        <tr><th>Colis</th><th>Format</th><th>Poids</th></tr>
        </thead>
        <tbody>
        <tr v-for="c of colis" :key="c.id" :class="getClass(c)">
        <td>{{c.id}}</td> <td>{{c.format}} : {{tailleColis(c)}}</td> <td>{{c.poids}} kg</td>
        <td><button name="enlever" :data-idcolis="c.id">×</button></td>
        </tr>
        
        </tbody>
        <tfoot>
        <tr><td colspan="3">Total : {{colisTotal}} colis pesant {{poidsTotalColis.toFixed(1)}} kg</td></tr>
        </tfoot>
        </table>
    `,
    props: {
      colis: {
        type: Array,
        required:true
      }
      
    },
    emits:['enlever'],
    data() {
      return {
        format: ['petite', 'moyen', 'grand', 'énorme'],
      }
    },
    computed: {
      colisTotal() {
        return this.colis.length;
        
      },
      poidsTotalColis() {
        return this.colis.reduce((acc,current) =>
             acc + current.poids,0
        )
        
      }
    },
    methods: {
      getClass(colis) {
        return colis.poids > 2.5 ? 'lourd' :'leger';
        
      },
      tailleColis(c) {
        return this.format[c.format-1];
        },
  
      onClick(e){
        if(e.target.name ==='enlever'){
          this.$emit('enlever',e.target.dataset.idcolis);
        }
        
      }
    }
  }
  