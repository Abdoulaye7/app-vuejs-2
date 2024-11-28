const InputEntier ={
    template:`
    <slot></slot><input type="number" :value="entier" @input="onChange" step="1">.
    `,
    props:{
        entier: {
            type:Number,
            default:0,
        }
    },
    emits:['update:entier'],
    methods:{
        onChange(event){
            
            this.$emit('update:entier',parseInt(event.target.value));
        }

    }
}