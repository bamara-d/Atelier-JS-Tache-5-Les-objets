/* Exercice 1 : Documentation

   1- Qu'est-ce qu'un objet en JavaScript ?

   Un objet est une entité qui possède des caractéristiques (propriétés) et des comportements (méthodes). Il peut contenir des valeurs de différents types, y compris d'autres objets, des tableaux, des chaînes de caractères, des nombres, des fonctions, etc. 

*/

// Exercice 2 : Les objets

// 2-- Créez un objet "personne" avec les propriétés suivantes : nom, prénom, âge, profession. Affichez cet objet dans la console.

const person = {
  nom: "BADJI",
  prenom: "Moussa Alkaly",
  age: 45,
  profession: "Ingénieur en programmation",
};

// 3-- Modifiez une propriété de l'objet personne (par exemple, l'âge) et affichez à nouveau l'objet modifié dans la console.

person.age = 35;
console.table(person);

// 4-- Créez un deuxième objet "animal" avec les propriétés suivantes : espèce, couleur, nombre de pattes. Affichez cet objet dans la console.

const animal = {
  espece: "mouton",
  couleur: "Blanc",
  nombreDePattes: 4,
};

console.table(animal);

let name1 = "Amie";
let name2 = name1;
name2 = "Nafi";

console.log(name2, name1);

let animal2 = animal;
animal2 = "noir"
console.log(animal2, animal);