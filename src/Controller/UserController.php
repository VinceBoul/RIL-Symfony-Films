<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Entity\Serie;
use App\Entity\User;
use App\Repository\MovieRepository;
use App\Repository\SerieRepository;
use PhpParser\Node\Expr\Array_;
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
     * @param Request $request
     * @param MovieRepository $movieRepo
     * @param SerieRepository $serieRepo
     * @return Response
     */
	public function seeMovie(Request $request, MovieRepository $movieRepo, SerieRepository $serieRepo): Response
	{
		/**
		 * @var User $user
		 */
		$user = $this->getUser();
		if ($user){

			$entityId = $request->request->get('entity-id');

			$handleEntities = $this->handleMovieSerie($user, $request->request->get('entity-id'), $movieRepo);

			if (!$handleEntities){
			    $entity = $this->handleMovieSerie($user, $request->request->get('entity-id'), $serieRepo);

            }

			if ($entity){
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->persist($entity);
                $entityManager->flush();
            }

			return new JsonResponse(array('message' => $successMessage));
		}
		return new Response("Nop", 404);
	}

    /**
     * @param User $user
     * @param $entityId
     * @param MovieRepository | SerieRepository $repo
     * @return array|null
     */
	private function handleMovieSerie(User $user, $entityId, $repo)
    {
        $entity = $repo->findOneBy(['tmdbId' => $entityId]);
        $success = false;
        if ($entity){

            if (get_class($entity) === 'App\Entity\Serie'){
                if (!$user->getSeries()->contains($entity)){
                    $user->addSeries($entity);
                    $success = true;
                } else{
                    $user->removeSeries($entity);
                }
            }else{
                if (!$user->getSeenMovies()->contains($entity)){
                    $user->addSeenMovie($entity);
                    $success = true;
                } else{
                    $user->removeSeenMovie($entity);
                }
            }
        }

            dd(get_class($entity));


        return $success ? [ 'user' => $user, $entity => $entity ] : null;
    }
}
