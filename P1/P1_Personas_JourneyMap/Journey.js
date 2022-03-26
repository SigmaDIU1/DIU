/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.sigma";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/SigmaDIU1/DIU";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Olivia",
                Photo: "olivia.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere preparar un viaje con su pareja para desconectar del estrés",
                touch1: "agenda",
                feel1: "4",
                con1: "ver que días pueden tener libres ambos para organizar el viaje",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Pregunta a sus amigos si conocen una buena ciudad en el sur para ir de vacaciones",
                touch2: "Móvil",
                feel2: "3",
                con2: "Sus amigos le recomiendan demasiados sitios y a su pareja no termina de convencerle viajar tan lejos",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide ir a Granada y alojarse en un hostel, el LemonRock, ya que le gustó mucho a uno de sus amigos",
                touch3: "Móvil (buscador google)",
                feel3: "5",
                con3: "Está preocupada por si la página web le va a facilitar el proceso de realizar una reserva online, ya que las anteriores veces le costo mucho",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Entra en la página del LemonRock e investiga sobre los servicios que ofrece",
                touch4: "Móvil",
                feel4: "2",
                con4: "Se empieza a poner nerviosa porque solo encuentra referencias a la zona restaurante y ninguna a las habitaciones",
                ima4: "cartoon-looking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "En la sección de contacto ve un teléfono al que llama para preguntar por las habitaciones",
                touch5: "Móvil (llamada)",
                feel5: "1",
                con5: "Llama al sitio y le comunican que desde hace unos meses no es un hostel, pero quien le atiende le recomienda uno cercano",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Decide hacer caso a la recomendación del LemonRock, llama al sitio consigue un alojamiento via telefónica sin problemas y una vez lo tiene llama de nuevo al LemonRock y reserva una mesa",
                touch6: "Móvil (llamada)",
                feel6: "3",
                con6: "Tras haberlo conseguido, se da cuenta de que es un proceso mucho más complicado de lo que esperaba, pero se queda tranquila ya que esta todo solucionado",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Enrique",
                Photo: "Enrique.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Necesita buscar un alojamiento económico en Granada por motivos laborales",
                touch1: "agenda",
                feel1: "4",
                con1: "A pesar de que le gusta su trabajo le cansa tener que viajar tanto",
                ima1: "cartoon-phoningangry.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide que lo más económico es buscar un hostel en un agregador llamado granadahotelsweb.com",
                touch2: "Portatil (navegador web)",
                feel2: "3",
                con2: "Es bastante exigente en algunos aspectos como en el ambiente del sitio y la comida, por lo que ninguno le termina de convencer",
                ima2: "cartoon-thinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra el LemonRock que parece atraer a muchos jovenes y tiene una comida buena y económica",
                touch3: "Portatil (navegador web)",
                feel3: "4",
                con3: "Mientras busca información sobre el sitio a penas encuentra comentarios recientes sobre las habitaciones",
                ima3: "cartoon-PChappy.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Intenta hacer una reserva desde el mismo agregador",
                touch4: "Portatil (navegador web)",
                feel4: "2",
                con4: "Tras muchos intentos no es capaz de encontrar un día en el que haya habitaciones disponibles",
                ima4: "cartoon-why.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Decide intentar reservar desde la propia página del LemonRock",
                touch5: "Portatil (navegador web)",
                feel5: "3",
                con5: "Ve que la reserva es solo para mesas y decide mirar el resto de la página, ahí descubre que ya solo ofrecen servicio de restaurante",
                ima5: "cartoon-PCcrying.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Ya que la comida si que le parecía buena decide reservar una mesa para ir a comer y hacer el reportaje de ese local",
                touch6: "Portatil (navegador web)",
                feel6: "4",
                con6: "Está un poco frustrado porque tiene que buscar otro sitio donde alojarse",
                ima6: "cartoon-PCtyping.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



