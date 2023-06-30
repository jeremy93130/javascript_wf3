class Cercle {
  constructor(r) {
    // Le constructeur prend un paramètre (r pour rayon car on va calculer son rayon)
    this.rayon = r;
  }

  // déclarer les méthodes calculerSurface et afficherInfo
  calculerSurface() {
    // Calculer et retourner le resultat de la surface
    let surface = (this.rayon = Math.PI * (this.rayon * this.rayon));
    return surface;
  }

  afficherInfo() {
    //   Afficher les informations du cercle
    console.log(
      `le cercle a un rayon de ${this.rayon} et une surface de ${Math.ceil(
        this.calculerSurface()
      )}`
    );
  }
}

let rayon1 = new Cercle(3); // instancier un objet Cercle
rayon1.afficherInfo();

// Supposons que vous deviez modéliser une classe CompteBancaire qui représente un compte bancaire avec les propriétés suivantes : titulaire, solde, et les méthodes : déposer(montant) qui permet de déposer de l'argent sur le compte , retirer(montant) qui permet de retirer de l'argent du compte et afficherSolde() qui affiche le solde actuel du compte.

// Votre tâche consiste à créer la classe CompteBancaire,
// créer les méthodes deposer, retirer et afficherSolde, instancier des objets comptebancaire pour différents titulaires, effectuer des opérations de dépôt et de retrait, et afficher les soldes des comptes
// Créer le constructeur avec les paramètres : titulaire et solde

class CompteBancaire {
  constructor(t, s) {
    this.titulaire = t;
    this.solde = s;
  }

  deposer(money) {
    return (this.solde += money);
  }

  retirer(money) {
    return (this.solde -= money);
  }

  afficherSolde() {
    console.log(
      `Madame,Monsieur ${this.titulaire}, votre solde est actuellement de ${this.solde}`
    );
  }
}

let titulaire1 = new CompteBancaire("Cynthia", 450);
titulaire1.afficherSolde();
titulaire1.retirer(100);
titulaire1.afficherSolde();
titulaire1.deposer(150);
titulaire1.afficherSolde();

let titulaire2 = new CompteBancaire("Wassila", 100);
titulaire2.deposer(400);
titulaire2.afficherSolde();
titulaire2.deposer(800);
titulaire2.afficherSolde();



