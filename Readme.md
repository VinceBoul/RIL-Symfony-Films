# Symfony Films API

## Installation

* Cloner le projet

* Installer la commande Symfony : https://symfony.com/download

* Lancer la commande composer install

* Lancer l'application avec la commande 'symfony server:start'


# Utilisation API IMDB Movies

Documentation : https://developers.themoviedb.org/3/movies/get-movie-videos

* Récupérer tous les genres : https://api.themoviedb.org/3/genre/movie/list?api_key=<api_key>&language=fr-FR

* Récupérer les films populaires : https://api.themoviedb.org/3/discover/movie?api_key=<api_key>&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=12


http://files.tmdb.org/p/exports/movie_ids_04_28_2019.json.gzapi_key=14110c874d089333cac3f40c97c2427b

# Exercices

## Exercices Niveau Débutant

* Tâche qui charge les films 
* Tâche qui charge les séries
* Tâche qui charge les genres

* Liste des films
* Liste des séries
* Liste des genres

## Exercices Niveau Intermédiaire

* Le systèle de tâche CRON ne charge pas correctement tous les films.
    * Pour optimiser l'usage de l'API et enrichir notre propre base de données, il faut mettre en place un système de sauvegarde automatique des films et séries
    * Cela peut se faire au moment d'une recherche, ou d'un changement de page dans la liste des films et séries
    * Il est possible d'améliorer la gestion de recherche des films, 
* Espace utilisateur : Inscription/Connexion
* 

## Exercices Niveau Avancé

* Espace administrateur (sécurisé)
    * Ajout de l'utilisateur Admin
    * Consulter la liste des utilisateurs
