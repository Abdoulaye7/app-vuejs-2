function filtrerParAge(users, ageMin){
    return users.filter(u => u.age >= ageMin);
}

function sommeDesAges(users){
    return users.reduce((acc, currentVal) => acc + currentVal.age, 0);
}

function ajouterUtilisateur(users, nom, age){
    users.push({ nom, age });
    return users;
}

function filtrerUtilisateurs(users, critere){
    return users.filter(u => u.nom === critere.nom);
}

function extraireNoms(users) {
    return users.map(u => u.nom);
}

function aUnMajeur(users) {
    return users.some(u => u.age >= 18);
}

function tousMajeurs(users) {
    return users.every(u => u.age >= 18);
}

function trouverUtilisateur(users, nom) {
    return users.find(u => u.nom === nom);
}

function dernierMajeur(users) {
    return users.findLastIndex(user => user.age >= 18);
}

function ageMoyen(users) {
    const totalAges = users.reduce((acc, currentVal) => acc + currentVal.age, 0);
    return totalAges / users.length;
}

function filtrerParNom(users, nom) {
    return users.filter(u => u.nom.includes(nom));
}

const utilisateurs = [
    { nom: "Charlie", age: 25 },
    { nom: "Am", age: 30 },
    { nom: "Aaliou", age: 20 }
];
const critere = { nom: "Bob" };

const arrayNoms = extraireNoms(utilisateurs);
console.log(arrayNoms); // ["Charlie", "Am", "Aaliou"]

const unAdulte = aUnMajeur(utilisateurs);
console.log(unAdulte); // true

const tousAdultes = tousMajeurs(utilisateurs);
console.log(tousAdultes); // true

console.log(trouverUtilisateur(utilisateurs, 'Charlie')); // { nom: "Charlie", age: 25 }
console.log(dernierMajeur(utilisateurs)); // 1
console.log(ageMoyen(utilisateurs)); // 25

const utilisateursFiltrés = filtrerParNom(utilisateurs, 'a');
console.log(utilisateursFiltrés); // [{ nom: "Charlie", age: 25 }, { nom: "Aaliou", age: 20 }]

const utilisateursFiltrésParAge = filtrerParAge(utilisateurs, 25);
console.log(utilisateursFiltrésParAge); // [{ nom: "Charlie", age: 25 }, { nom: "Am", age: 30 }]
const orders = [
    { id: 1, amount: 50 },
    { id: 2, amount: 120 },
    { id: 3, amount: 30 },
    { id: 4, amount: 120 }
];

// Supposons que nous voulons supprimer la commande avec l'id 3
const index = orders.findIndex(order => order.id === 3);
console.log(index)
if (index !== -1) {
    orders.splice(index, 1);
}

console.log(orders);
// [
//   { id: 1, amount: 50 },
//   { id: 2, amount: 120 },
//   { id: 4, amount: 120 }
// ]
