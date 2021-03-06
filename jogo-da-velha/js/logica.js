var jogadorX = {
			simbolo: 'X'
		}
		var jogadorO = {
			simbolo: 'O'
		}
		var VAZIO = {
        	simbolo : "_"
        };

        var tabuleiro = [
        	[VAZIO,VAZIO,VAZIO],
        	[VAZIO,VAZIO,VAZIO],
        	[VAZIO,VAZIO,VAZIO]
        ];
		
		
		var vencedorX = false;
		var vencedorO = false;
		var qtdJogadas = 0;

		var jogadorAtual = jogadorX;

		var fazerJogada = function(linha,coluna){
			if(tabuleiro[linha][coluna]===VAZIO){

				tabuleiro[linha][coluna] = jogadorAtual;

				desenharTabuleiro();
				verificarVencedor();
				proximoJogador();

			}else{
				alert("Jogada Inválida")
			}
		}

		var proximoJogador = function(){

			if(jogadorAtual ===jogadorX){
					jogadorAtual = jogadorO;
				}else{
					jogadorAtual = jogadorX;
				}
		}

		var verificarVencedor = function(){			

				qtdJogadas++;
				verificarSomaDiagonalPrincipal();

				if(!vencedorX && !vencedorO){
					verificarSomaDiagonalSecundaria();
				}

				if(!vencedorX && !vencedorO){
					verificarSomaColuna();
	        	}

				if(!vencedorX && !vencedorO){
	        		verificarSomaLinha();
        		}

        		if(vencedorX){
					alert('Jogador X venceu o jogo');				
					

        		}else if(vencedorO){
        			alert('Jogador O venceu o jogo');	
        			
        		}

        		verificarEmpate();
			
		}

		var verificarSomaLinha = function(){

			var pontuacaoXLinha = 0;
			var pontuacaoOLinha = 0;


	   		for (var linha=0; linha<3;linha++){
    			for(var coluna=0; coluna<3;coluna++){
    					
    				if(tabuleiro[coluna][linha].simbolo==='X'){
    					pontuacaoXLinha++;
        				 
					}else if(tabuleiro[coluna][linha].simbolo==='O'){
						pontuacaoOLinha++
					}    			

				}


    			if(pontuacaoXLinha===3){
					vencedorX = true;
					break;
				}else if(pontuacaoOLinha===3){
					vencedorO = true;
					break;
				}					

				pontuacaoXLinha=0;
				pontuacaoOLinha = 0;

        	}  
		}

		var verificarSomaColuna = function(){

			var pontuacaoXColuna = 0;
			var pontuacaoOColuna = 0;

			for (var linha=0; linha<3;linha++){
    			for(var coluna=0; coluna<3;coluna++){
    					
    				if(tabuleiro[linha][coluna].simbolo==='X'){
    					pontuacaoXColuna++;
        				 
					}else if(tabuleiro[linha][coluna].simbolo==='O'){
						pontuacaoOColuna++
					}        			
				}

				if(pontuacaoXColuna===3){
					vencedorX = true;
					break;
				}else if(pontuacaoOColuna===3){
					vencedorO = true;
					break;
				}
			pontuacaoXColuna=0;
			pontuacaoOColuna = 0; 
			}

				   		

		}


		var verificarSomaDiagonalPrincipal = function(){

			var pontuacaoXDiagonal = 0;				
			var pontuacaoODiagonal = 0;
			
			for (var linha=0; linha<3;linha++){        		    

					if(tabuleiro[linha][linha].simbolo==='X'){
						pontuacaoXDiagonal++						
					}else if(tabuleiro[linha][linha].simbolo==='O'){
						pontuacaoODiagonal++
					}				

					if(pontuacaoXDiagonal===3){

						vencedorX = true;
						break;
					}else if(pontuacaoODiagonal===3){
							vencedorO = true;
						break;
					}
				}

		}



		var verificarSomaDiagonalSecundaria = function(){

			var pontuacaoXDiagonal = 0;				
			var pontuacaoODiagonal = 0;
			var coluna = 2; 
			
			for (var linha=0; linha<3;linha++){        			    

				if(tabuleiro[linha][coluna].simbolo==='X'){
					pontuacaoXDiagonal++						
				}else if(tabuleiro[linha][coluna].simbolo==='O'){
					pontuacaoODiagonal++
				}				

				if(pontuacaoXDiagonal===3){
					vencedorX = true;
					break;
				}else if(pontuacaoODiagonal===3){
					vencedorO = true;
					break;
				}

				coluna--;
			}



		}

		var verificarEmpate = function(){			

			if(qtdJogadas>8 && !vencedorO && !vencedorX){				

				alert('Houve um empate');	
			}

		}
		
		

		var mostrarGanhador = function(ganhador){
			alert(ganhador);

		}

		var criarBotaoTabuleiro = function(linha, coluna){

			var button = document.createElement("button");
        	button.textContent= tabuleiro[linha][coluna].simbolo;
        	button.onclick = function(){
				fazerJogada(linha,coluna);
        	}
        	
        	document.body.appendChild(button);

		}


		var limparTela = function(){		

			document.body.innerHTML="";

			


		}

		var criarBotaoLimpar = function(){

			novaLinha();
			var button = document.createElement("button");
			button.textContent="Recarregar Jogo";
			button.onclick = function(){

				window.location.reload();
			}
			
			document.body.appendChild(button);

		}

		var criarBotaoIniciarJogo = function(){

			var button = document.createElement("button");
			button.textContent="IniciarJogo";
			button.onclick = function(){

				desenharTabuleiro();
			}
			
			document.body.appendChild(button);			

		}



		var desenharTabuleiro = function(){
			limparTela();
			
        	for (var linha=0; linha<3;linha++){
        		for(var coluna=0; coluna<3;coluna++){
        			
					criarBotaoTabuleiro(linha,coluna);
        		}
        		
        		novaLinha();
        	}

        	criarBotaoLimpar();

        }
        
        var novaLinha = function(){

        	var br = document.createElement("br");
        	document.body.appendChild(br);
        }