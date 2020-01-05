<?php

namespace App\Command;

use App\Entity\Genre;
use App\Entity\Movie;
use App\Entity\MovieGenre;
use App\Entity\Serie;
use App\Repository\GenreRepository;
use App\Repository\MovieGenreRepository;
use App\Repository\MovieRepository;
use App\Repository\SerieRepository;
use Doctrine\Bundle\DoctrineBundle\Mapping\ContainerEntityListenerResolver;
use Doctrine\ORM\EntityManager;
use Psr\Container\ContainerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\HttpClient\HttpClient;

class ImportDataCommand extends Command
{
    protected static $defaultName = 'app:import-data';

	/**
	 * @var MovieRepository
	 */
    private $movieRepo;

	/**
	 * @var SerieRepository
	 */
	private $serieRepo;

	/**
	 * @var MovieGenreRepository
	 */
	private $movieGenreRepo;

	/**
	 * @var ContainerInterface
	 */
	private $container;

	/**
	 * @var EntityManager $em
	 */
	private $em;


	CONST API_URL = "https://api.themoviedb.org/3/trending/all/day?language=fr-FR&api_key=14110c874d089333cac3f40c97c2427b";

	CONST API_URL_MOVIE_GENRES = "https://api.themoviedb.org/3/genre/movie/list?api_key=14110c874d089333cac3f40c97c2427b&language=fr-FR";


	public function __construct(MovieRepository $movieRepository, SerieRepository $serieRepository, MovieGenreRepository $movieGenreRepository, ContainerInterface $container)
	{
		$this->movieRepo = $movieRepository;
		$this->serieRepo = $serieRepository;
		$this->movieGenreRepo = $movieGenreRepository;
		$this->container = $container;
		$this->em = $this->container->get('doctrine')->getManager();

		parent::__construct();
	}

    protected function configure()
    {
        $this->setDescription('Commande qui enregistre les films et les séries');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $this->importMoviesGenres();

        //$this->importFilmsAndSeries($io);

		$this->em->flush();


		return 0;
    }

    private function importFilmsAndSeries(SymfonyStyle $io){
		$httpClient = HttpClient::create();
		$responseContent = json_decode($httpClient->request('GET', self::API_URL)->getContent());

		$nbMoviesCreated = 0;
		$nbSeriesCreated = 0;
		foreach ($responseContent->results as $r){

			if ($r->media_type === "movie"){

				// Si on ne trouve pas le film par son identifiant IMDB
				if (!$this->movieRepo->findOneBy(['tmdbId' => $r->id])){

					// Création d'un film
					$movie = new Movie();
					$movie->setTmdbId($r->id);
					$movie->setTitle($r->title);
					$movie->setOriginalTitle($r->original_title);
					$movie->setOverview($r->overview);
					$movie->setReleaseDate(new \DateTime($r->release_date));
					$movie->setVoteAverage($r->vote_average);
					$movie->setPosterPath($r->poster_path);
					$this->em->persist($movie);

					// Incrémentation du compteur
					$nbMoviesCreated++;
				}
			}elseif ($r->media_type === "tv"){
				// Si on ne trouve pas le film par son identifiant IMDB
				if (!$this->serieRepo->findOneBy(['tmdbId' => $r->id])){

					// Création d'un film
					$serie = new Serie();
					$serie->setTmdbId($r->id);
					$serie->setTitle($r->name);
					$serie->setOriginalTitle($r->original_name);
					$serie->setOverview($r->overview);
					$serie->setFirstAirDate(new \DateTime($r->first_air_date));
					$serie->setVoteAverage($r->vote_average);
					$serie->setPosterPath($r->poster_path);
					$this->em->persist($serie);

					// Incrémentation du compteur
					$nbSeriesCreated++;
				}
			}
		}

		$io->success($nbMoviesCreated . ' films ont été créés :)');
		$io->success($nbSeriesCreated . ' séries ont été créés :)');
	}

	/**
	 * Import les genres de films
	 * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
	 * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
	 * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
	 * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
	 */
    private function importMoviesGenres()
	{
		if (count($this->movieGenreRepo->findAll()) === 0){

			$httpClient = HttpClient::create();
			$responseContent = json_decode($httpClient->request('GET', self::API_URL_MOVIE_GENRES)->getContent());

			foreach ($responseContent->genres as $g) {
				$genre = new MovieGenre();
				$genre->setName($g->name);
				$genre->setTmdbID($g->id);
				$this->em->persist($genre);
			}
		}
	}
}
