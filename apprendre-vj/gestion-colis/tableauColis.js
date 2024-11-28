const tableauColis = {
    template: `
      <table border="1" @click = "onClick">
        <thead>
          <tr><th>Colis</th><th>Format</th><th>Poids</th></tr>
        </thead>
        <tbody>
          <tr v-for="c of colis" :key="c.id" :class="getClass(c)">
            <td>{{ c.id }}</td>
            <td> {{c.format}} : {{ format[c.format] }}</td>
            <td>{{ c.poids }}kg</td>
            <td><button :data-idcolis="c.id" name="enlever">×</button></td>
          </tr>
        </tbody>
        <tfoot>
          <tr><td colspan="4">Total : {{ colisTotal }} colis pesant {{ poidsTotalColis.toFixed(1) }} kg</td></tr>
        </tfoot>
      </table>
    `,
    props: {
      colis: {
        type: Array,
        required: true,
      }
    },
    emits:['enlver'],
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
        return this.colis.reduce((poidsTotal, c) => poidsTotal+c.poids,0.0);
      }
    },
    methods: {
      getClass(colis) {
        return colis.poids > 2.5 ? 'lourd' : 'leger';
      },
      enleverColis(id) {
        this.$emit('enlever', id);
      },
      onClick(e){
        if(e.target.name ==='enlver'){
            this.$emit('enlver',e.target.data.idColis);
        }
      }
    }
  }
  