### Symfony Films API

### Installation

* Installer la commande Symfony : https://symfony.com/download

* Lancer la commande 
### composer create-project symfony/website-skeleton my_project_name

### Commande "cd my_project_name"
### Lancer l'application avec la commande 'symfony server:start'


## Champs à créer 
### title (string)
### image (string)
### releaseDate (datetime)
### note (integer)
### imdbID (integer)
### overview (text)

### Création Controller / Formulaire / vues TWIG :  
###  php bin/console make:crud
## DATABASE_URL=mysql://root:root@127.0.0.1:8889/symfony_ril_nexflix
## Créer la BDD :  php bin/console doctrine:database:create
## Création des fichiers de migration : php bin/console make:migration
## Création des tables : php bin/console doctrine:migrations:migrate

### Utilisation API IMDB Movies

Documentation : https://developers.themoviedb.org/3/movies/get-movie-videos

* Récupérer tous les genres : https://api.themoviedb.org/3/genre/movie/list?api_key=<api_key>&language=fr-FR

* Récupérer les films populaires : https://api.themoviedb.org/3/discover/movie?api_key=<api_key>&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=12

* Récupérer l'image d'un film : https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg 

http://files.tmdb.org/p/exports/movie_ids_04_28_2019.json.gzapi_key=14110c874d089333cac3f40c97c2427b

# Exercices

## Exercices Niveau Débutant

* Tâche qui charge les films 
* Tâche qui charge les séries
* Tâche qui charge les genres

* Liste des films
* Liste des séries
* Liste des genres
 
 1. Deux entités films et séries
 2. Crud film + séries
 3. Page des films--entité film
 3. Page des séries - entité série
 4. Algo d'alimentation des genres, films et séries : proposition de commande basique sica galère- diapo fichier de commande
 5. Système de pagination simple
 6. Filtrage des films et séries par genre--entité genre + filtrage des films et séries par genre
 7. Création compte utilisateur avec page du profil

* Héritage de template
* Routes home/ films/ series/ user/

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


Niveau intermédiaire
Récupération code vidéo YouTube
Liste des épisodes par séries--entité épisode 
Liste du casting
Compte utilisateur  : pouvoir sauvegarder les films et séries vus
Système de pagination ajax.
Rôle user

Niveau avancé - admin
Fiche série ou film ne nécessite pas de changer de page.
Obtenir un site "one page" qui ne nécessite pas de changer de page, sauf pour 
