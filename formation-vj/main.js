
const app = Vue.createApp({
    data() {
        return {
            name:"Pizza Royale",
            price:12,
            image:"assets/images/pizza-tomate.jpg",
            sale:true,
            notAvailable:false,
            ingredients: [
                "Olives",
                "Poulet roti",
                "Bacon",
                "Poivrons",
                "Champignons",
                "Mozzarella",
                "Oeuf"
            ],
            sauces : [
                {
                    id:1001,
                    type:"Sauce tomate",
                    color:"#db4006",
                    image:"assets/images/pizza-tomate.jpeg",
                },
                {
                    id:1001,
                    type:"Crème fraîche",
                    color:"#e9cb8f",
                    image:"assets/images/pizza-fromage.avif",

                },
            ],
            energy: {
                Kcal:242,
                Glucides:27.99,
                Fibres:1.75,
                Proteines:9.62,
                Sel:11,
            },
            totalPrice:0,
            nbrProduct:0,
            promo:"",
        };
    },
    methods: {
        addProduct(){
            if(this.sale){
                this.nbrProduct+=1; 
                this.totalPrice= (this.price - 5)* this.nbrProduct
            }else {
                 this.nbrProduct+=1;
                 this.totalPrice= this.price * this.nbrProduct
            }
        },
        updateImage(newLinkImage){
            this.image=newLinkImage;
        }
    },
});