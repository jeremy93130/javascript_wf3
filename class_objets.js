class Personne {
  constructor(n, a) {
    // on appelle la fonction constructor avec deux paramètres (n,a) , Nom imposé par Js (constructor)
    this.nom = n; // On déclare une variable nom qui prend la valeur de n
    this.age = a; // on déclare une variable age qui prend la valeur de a
  }

  saluer() {
    // La methode saluer permet d'afficher la phrase dans le console.log
    console.log(`bonjour , je m'appelle ${this.nom} et j'ai ${this.age}`);
  }
}

// Creation des objets p1 et p2
// pour récuperer l'age ou le nom de p1 fair la syntaxe : p1.age; p1.nom;
let p1 = new Personne("jeremy", 31); // jeremy et 31 seront affectés à la variable p1 grâce à (this.nom et this.age) tout comme p2.
console.log(p1.nom);
let p2 = new Personne("Nawal", 33); // Nawal et 33 ans seront affectés à la variable p2 grâce à (this.nom et this.age) tout comme p1.

// pour appeler la methode saluer sur un des objets faire : p1.saluer();
p1.saluer(); // bonjour je m'appelle Jeremy et j'ai 31 ans;
p2.saluer(); // Bonjour je m'appelle Nawal et j'ai 33 ans;
console.log(p2.age); // 33
