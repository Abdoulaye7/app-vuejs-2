const app = Vue.createApp({
    data() {
        return {
            newRecipeName: '',
            newRecipeDescription: '',
            recetteType: ['Asiatique', 'Italienne', 'Française', 'Mexicaine'],
            newRecipeCuisine: 'Italienne',
            recipes: JSON.parse(localStorage.getItem('recipes')) || [
                {
                    name: 'Spaghetti Carbonara',
                    description: 'Un classique italien avec des œufs, du fromage, du lard et du poivre.',
                    cuisine: 'Italienne',
                },
                {
                    name: 'Bœuf Bourguignon',
                    description: 'Un plat traditionnel français de bœuf braisé avec du vin rouge, des champignons et des lardons.',
                    cuisine: 'Française',
                },
            ],
            filter: 'all',
            cuisineAffichee: true,
        };
    },
    computed: {
        filteredRecipes() {
            if (this.filter === 'all') {
                return this.recipes;
            }
            return this.recipes.filter(recipe => recipe.cuisine === this.filter);
        }
    },
    methods: {
        addRecipe() {
            if (this.newRecipeName.trim() && this.newRecipeDescription.trim()) {
                this.recipes.push({
                    name: this.newRecipeName,
                    description: this.newRecipeDescription,
                    cuisine: this.newRecipeCuisine,
                });
                this.newRecipeName = '';
                this.newRecipeDescription = '';
                this.newRecipeCuisine = 'Italienne';
                this.saveRecipes();
            }
        },
        saveRecipes() {
            localStorage.setItem('recipes', JSON.stringify(this.recipes));
        }
    },
    watch: {
        recipes: {
            handler() {
                this.saveRecipes();
            },
            deep: true
        }
    }
});
