<?php

namespace App\Controller;

use App\Entity\Movie;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
			]);
		}else{
			return $this->redirectToRoute('site');
		}
    }

	/**
	 * @Route("/{id}", name="see_movie", methods={"POST"})
	 */
	public function seeMovie(Request $request, Movie $movie): Response
	{

		dd($movie);

		return $this->render('movie/edit.html.twig');
	}
}
