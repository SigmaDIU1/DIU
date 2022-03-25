/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.sigma";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/SigmaDIU1/DIU";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Olivia",
				Photo: "olivia.jpg",
				Quote: "Enseñar es no parar de aprender",
				Age: 25,
				Occupation: "Diseñadora",
				Family: "Con pareja estable desde hace 3 años. Sin hijos.",
				Location: "Barcelona",
				Character: "Le gusta conocer a las personas",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Viajar para conocer a más gente", "Evadirse de la rutina", "Conseguir su propia casa"],
				Frustrations: ["No le gusta mucho la tecnología, pero se obligada a utilizarla", "Le gustaría dedicarse a completamente a la enseñanza", "A su pareja no le gusta viajar muy lejos"],
				Bio: "Es de Barcelona y lleva cuatro años trabajando como diseñadora, pero su verdadera vocación es la enseñanza, un mundo al que le gustaría entrar y por el que lleva mucho tiempo luchando, su pareja siempre le ha apoyado en ese aspecto. Nunca le dice no a una buena conversación con cualquier tipo de persona que se lo pida.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Lleva un tiempo estresada por el trabajo y ha convencido a su pareja para hacer un viaje a la otra punta de España",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Enrique",
				Photo: "Enrique.jpg",
				Quote: "Lo importante es ver aquello que resulta invisible para los demás",
				Age: 30,
				Occupation: "Videógrafo",
				Family: "Sin ataduras, su familia son sus amigos.",
				Location: "Madrid (Móstoles)",
				Character: "Fotografiar los mejores momentos de la vida",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Fotografiar todos los países del mundo", "Terminar el reportaje sobre los destinos turisticos de Granada", "Formar una familia (de verdad)", "Hacer un tour gastronómico por el mundo"],
				Frustrations: ["Viajar tanto le impide asentarse en un sitio estable", "Por el alto precio de los materiales no puede disponer de todos los que le gustaría", "Lleva tiempo buscando pareja estable pero debido a su trabajo le cuesta encontrar una"],
				Bio: "Videógrafo madrileño enamorado del bocata de calamares y de la comida en general, tiene mucha experiencia en distintos eventos como bodas y eventos municipales, por ello la diputación le ha llamado para un trabajo, nunca se queda en casa un fin de semana.",
				//The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos:   "La diputación de Granada le ha encargado hacer un reportaje sobre diferentes sitios turísticos de la provincia" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])