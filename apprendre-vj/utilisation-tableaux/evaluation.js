const personnes = [
    { nom: "Alice", age: 17 },
    { nom: "Bob", age: 22 },
    { nom: "Charlie", age: 18 },
    { nom: "David", age: 15 }
  ];

  const majeurs = personnes.filter(p => p.age >= 18);
  console.log(majeurs);

  const produits = [
    { nom: "Ordinateur", prix: 1000 },
    { nom: "Téléphone", prix: 500 },
    { nom: "Tablette", prix: 300 }
  ];
  const index =0;
  const nomsProduits = produits.map((p) => p.nom.toUpperCase())
  console.log(nomsProduits)

  const livres = [
    { titre: "Harry Potter", auteur: "J.K. Rowling" },
    { titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien" },
    { titre: "1984", auteur: "George Orwell" }
  ];
  
  // Utilise la méthode find pour trouver le livre avec le titre "Harry Potter".
  const livreHarryPotter= livres.find((l) => l.titre ==="Harry Potter")
  console.log(livreHarryPotter)

  const etudiants = [
    { nom: "Alice", score: 12 },
    { nom: "Bob", score: 9 },
    { nom: "Charlie", score: 15 },
    { nom: "David", score: 10 }
  ];
  
// Utilise la méthode every pour vérifier si tous les étudiants ont réussi.
  const tousReussis =  etudiants.every((e)=>e.score >= 10)
console.log(tousReussis);

const ventes = [
    { produit: "Ordinateur", montant: 1000 },
    { produit: "Téléphone", montant: 500 },
    { produit: "Tablette", montant: 300 }
  ];
  
  // Utilise la méthode reduce pour calculer le montant total des ventes.
  const initialValue = 0;
  const montantTotal = ventes.reduce((accumulateur,currentValue)=>
    accumulateur+currentValue.montant,initialValue
);
  console.log(montantTotal);

  const employes = [
    { nom: "Charlie", age: 25 },
    { nom: "zidane", age: 22 },
    { nom: "Davide", age: 30 },
    { nom: "Aliou", age: 28 }
  ];
  
  // Utilise la méthode sort pour trier les employés par âge.
  const employesTries = employes.sort((a, b) => a.age - b.age);
  console.log(employesTries);

  const articles = [
    { titre: "Article 1", auteur: "Alice" },
    { titre: "Article 2", auteur: "Bob" },
    { titre: "Article 3", auteur: "Alice" },
    { titre: "Article 4", auteur: "Charlie" }
  ];
  
 
  