<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Entity\MovieGenre;
use App\Form\MovieType;
use App\Repository\MovieGenreRepository;
use App\Repository\MovieRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/movie")
 */
class MovieController extends AbstractController
{
	/**
	 * @Route("/{name}", name="movie_index_genre", methods={"GET"})
	 * @param MovieGenre|null $genre
	 * @param MovieRepository $movieRepository
	 * @param MovieGenreRepository $genreRepo
	 * @return Response
	 */
    public function indexByGenre(MovieRepository $movieRepository, MovieGenreRepository $genreRepo, MovieGenre $genre): Response
    {
        return $this->render('movie/index.html.twig', [
            'movies' => $movieRepository->getMoviesByGenre($genre->getId()),
			'genre' => $genre,
			'genres' => $genreRepo->findAll()
        ]);
    }

	/**
 	 * @Route("/", name="movie_index", methods={"GET"})
	 * @param MovieRepository $movieRepository
	 * @param MovieGenreRepository $genreRepo
	 * @return Response
	 */
	public function index(MovieRepository $movieRepository, MovieGenreRepository $genreRepo): Response
	{
		return $this->render('movie/index.html.twig', [
			'movies' => $movieRepository->findAll(),
			'genres' => $genreRepo->findAll()
		]);
	}


	/**
     * @Route("/new", name="movie_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $movie = new Movie();
        $form = $this->createForm(MovieType::class, $movie);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($movie);
            $entityManager->flush();

            return $this->redirectToRoute('movie_index');
        }

        return $this->render('movie/new.html.twig', [
            'movie' => $movie,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="movie_show", methods={"GET"})
     */
    public function show(Movie $movie): Response
    {
        return $this->render('movie/show.html.twig', [
            'movie' => $movie,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="movie_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Movie $movie): Response
    {
        $form = $this->createForm(MovieType::class, $movie);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('movie_index');
        }

        return $this->render('movie/edit.html.twig', [
            'movie' => $movie,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="movie_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Movie $movie): Response
    {
        if ($this->isCsrfTokenValid('delete'.$movie->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($movie);
            $entityManager->flush();
        }

        return $this->redirectToRoute('movie_index');
    }
}
