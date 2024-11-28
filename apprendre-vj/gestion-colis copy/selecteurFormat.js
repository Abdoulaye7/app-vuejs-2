const selecteurFormat={
    template:`<p>Sélectionnez un format : <select @change="onChange" :value="modelValue">
<option value="0">Tous les formats</option>
<option v-for="f in 5" :value="f">Format {{f}}</option>

</select></p>`,
props:{
    modelValue:{type:Number,default:0}
},
emits:['update:modelValue'],
methods:{
    onChange(event){
        this.$emit('update:modelValue',parseInt(event.target.value));
    }
}
}