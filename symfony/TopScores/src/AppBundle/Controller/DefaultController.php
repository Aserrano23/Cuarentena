<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{
    private function saveDataToJson(){
        $results = [];
        $competitions = $this->getCompetitions();
        $jsonDefinitivo = [];
            
            foreach ($competitions as $index => $competition) {
                if ($competition['plan'] == "TIER_ONE" && is_string($competition['area']['ensignUrl'])) {
                    $jsonDefinitivo[$index] = [
                        'id' => $competition['id'],
                        'area' => $competition['area'],
                        'name' => $competition['name'],
                        'code' => $competition['code'],
                        'plan' => $competition['plan']
                    ];
                }
            }

            foreach ($competitions as $index => $competition) {
                if ($competition['plan'] == "TIER_ONE" && is_string($competition['area']['ensignUrl'])) {
                    $matches = $this->getMatchesPerCompetition($competition['code']);
                    foreach ($matches as $indexMatch => $match) {
                        $jsonDefinitivo[$index]['matches'][$indexMatch] = [
                            'id' => $match['id'],
                            'date' => substr($match['utcDate'], 0,10),
                            'time' => substr($match['utcDate'], 11,-4),
                            'status' => $match['status'],
                            'group' => $match['score'],
                            'score' => [
                                'fullTime' => [
                                    'homeTeam' => $match['score']['fullTime']['homeTeam'],
                                    'awayTeam' => $match['score']['fullTime']['awayTeam']
                                ],
                                'halfTime' => [
                                    'homeTeam' => $match['score']['halfTime']['homeTeam'],
                                    'awayTeam' => $match['score']['halfTime']['awayTeam']
                                ],
                                'extraTime' => [
                                    'homeTeam' => $match['score']['extraTime']['homeTeam'],
                                    'awayTeam' => $match['score']['extraTime']['awayTeam']
                                ],
                                'penalties' => [
                                    'homeTeam' => $match['score']['penalties']['homeTeam'],
                                    'awayTeam' => $match['score']['penalties']['awayTeam']
                                ]
                            ],
                            'homeTeam' => [
                                'id' => $match['homeTeam']['id'],
                                'name' => $match['homeTeam']['name']
                            ],
                            'awayTeam' => [
                                'id' => $match['awayTeam']['id'],
                                'name' => $match['awayTeam']['name']
                            ],
                        ];
                    }
                }
            }

            file_put_contents("competitions.json", json_encode($jsonDefinitivo));
    }

    private function getCompetitionsWithMatches(){
        $json = file_get_contents("competitions.json");
        return json_decode($json, true);
    }

    private function getCompetitions(){
         //OBTENGO LOS DATOS DE LAS COMPETICIONES
         $i = 0;
         $url = 'http://api.football-data.org/v2/competitions';
         $opts = array(
             'http'=>array(
                 'method'=>"GET",
                 'header'=>"X-Auth-Token: d9988790167f4255aef093295095b416"
             )
             );
         $context = stream_context_create($opts);
         $json = file_get_contents($url, false, $context);
         $competitions = json_decode($json, true);

         return $competitions['competitions'];
    }
    private function getMatchesPerCompetition($competitionCode){
        //OBTENGO LOS DATOS DE LAS COMPETICIONES
        $url = 'http://api.football-data.org/v2/competitions/'.$competitionCode.'/matches';
        $opts = array(
            'http'=>array(
                'method'=>"GET",
                'header'=>"X-Auth-Token: d9988790167f4255aef093295095b416"
            )
            );
        $context = stream_context_create($opts);
        sleep(7);
        $json = file_get_contents($url, false, $context);
        $matches = json_decode($json, true);
        return $matches['matches'];
   }

    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {      
        //$this->saveDataToJson();
        
        return $this->render('default/index.html.twig', [
            //'competitions' => $this->getCompetitions(),
            'results' => $this->getCompetitionsWithMatches(),
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }
}