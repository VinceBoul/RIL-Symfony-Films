<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
