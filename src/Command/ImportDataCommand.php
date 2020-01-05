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

        $this->importFilmsAndSeries($io);

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
				$nbMoviesCreated = $this->importMovies($r, $nbMoviesCreated);
			}elseif ($r->media_type === "tv"){
				$nbSeriesCreated = $this->importSeries($r, $nbSeriesCreated);
			}
		}

		$io->success($nbMoviesCreated . ' films ont été créés :)');
		$io->success($nbSeriesCreated . ' séries ont été créés :)');
	}

	private function importMovies($data, $nbMoviesCreated){
		// Si on ne trouve pas le film par son identifiant IMDB
		if (!$this->movieRepo->findOneBy(['tmdbId' => $data->id])){

			// Création d'un film
			$movie = new Movie();
			$movie->setTmdbId($data->id);
			$movie->setTitle($data->title);
			$movie->setOriginalTitle($data->original_title);
			$movie->setOverview($data->overview);
			$movie->setReleaseDate(new \DateTime($data->release_date));
			$movie->setVoteAverage($data->vote_average);
			$movie->setPosterPath($data->poster_path);
			$this->em->persist($movie);

			// Incrémentation du compteur
			$nbMoviesCreated++;
		}
		return $nbMoviesCreated;
	}

	private function importSeries($data, $nbSeriesCreated){
		// Si on ne trouve pas le film par son identifiant IMDB
		if (!$this->serieRepo->findOneBy(['tmdbId' => $data->id])){

			// Création d'un film
			$serie = new Serie();
			$serie->setTmdbId($data->id);
			$serie->setTitle($data->name);
			$serie->setOriginalTitle($data->original_name);
			$serie->setOverview($data->overview);
			$serie->setFirstAirDate(new \DateTime($data->first_air_date));
			$serie->setVoteAverage($data->vote_average);
			$serie->setPosterPath($data->poster_path);
			$this->em->persist($serie);

			// Incrémentation du compteur
			$nbSeriesCreated++;
		}
		return $nbSeriesCreated;
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
