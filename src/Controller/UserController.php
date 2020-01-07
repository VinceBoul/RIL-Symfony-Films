<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Entity\User;
use App\Repository\MovieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    public function index()
    {
		if ($this->getUser()) {
			return $this->render('user/index.html.twig', [
				'controller_name' => 'UserController',
				'user' => $this->getUser()
			]);
		}else{
			return $this->redirectToRoute('site');
		}
    }

	/**
	 * @Route("seemovie", options={"expose"=true}, name="see_movie", methods={"POST"})
	 */
	public function seeMovie(Request $request, MovieRepository $movieRepo): Response
	{
		/**
		 * @var User $user
		 */
		$user = $this->getUser();

		if ($user){

			$entityId = $request->request->get('entity-id');

			$movie = $movieRepo->find($entityId);

			if (!$user->getSeenMovies()->contains($movie)){

				$user->addSeenMovie($movie);
				$successMessage = 'added';

			}else{
				$user->removeSeenMovie($movie);
				$successMessage = 'removed';
			}

			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($user);
			$entityManager->persist($movie);
			$entityManager->flush();

			return new JsonResponse(array('message' => $successMessage));
		}

		return new Response("Nop", 404);
	}
}
