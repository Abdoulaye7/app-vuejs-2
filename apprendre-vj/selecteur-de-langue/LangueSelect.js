const LangueSelect ={
    template:
    `
      <select @change="onChange" v-model="selectedLangue" >
        <option value="Francais">Francais</option>
        <option value="Anglais">Anglais</option>
        <option value="Italien">Italien</option>
      </select>
    `,
    props:{
        modelValue:{type:String,default:'Francais'}
    },
    emits:['update:modelValue'],
    data() {
        return {
            selectedLangue: this.modelValue
        };
    },
    methods:{
        onChange(event){
            this.$emit('update:modelValue',this.selectedLangue)
        }
    }
}