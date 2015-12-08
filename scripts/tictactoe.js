var ticTacToeWin1 = ["A1","A2","A3"];
var ticTacToeWin2 = ["B1","B2","B3"];
var ticTacToeWin3 = ["C1","C2","C3"];
var ticTacToeWin4 = ["A1","B2","C3"];
var ticTacToeWin5 = ["A3","B2","C1"];
var ticTacToeWin6 = ["A1","B1","C1"];
var ticTacToeWin7 = ["A2","B2","C2"];
var ticTacToeWin8 = ["A3","B3","C3"];
var ticTacToeWinningCombinations = [ticTacToeWin1,ticTacToeWin2,ticTacToeWin3,ticTacToeWin4,ticTacToeWin5,ticTacToeWin6,ticTacToeWin7,ticTacToeWin8];

var xMoves = [];
var oMoves = [];
var numTurns;
var ticTacToeWin;
var xPlayer = 'X';
var oPlayer = 'O';
var ticTacToeWentFirst;
var ticTacToeSpacesLeft = 9;

function resetTicTacToeBoard() {
	//Set win back to false.
	ticTacToeWin = false;
	//Set numTurns back to 0 (TO DO: Only set to 0 if X goes first. Initialize to 1 if user wanted the O user to go first)
	numTurns = 0;
	ticTacToeSpacesLeft = 9;
	
	//Toggle the player who gets to go first
	if (ticTacToeWentFirst == xPlayer) {
		numTurns = 1;	
		var nextPlayerToGoFirst = oPlayer;
	}
	else {
		var nextPlayerToGoFirst = xPlayer;
	};
	ticTacToeWentFirst = nextPlayerToGoFirst;
	
		//Set label for player going first
	$('.ticTacToeTurn').html(ticTacToeWentFirst);

	// Clear moves from previous games
	xMoves = [];	
	oMoves = [];
	
	//Hide all the icons from previous game. Set all back to X as well.
	$('.ticTacToeSpace-taken').each(function (i, obj) {	
		$(obj).find('i').removeClass('fa-circle-o')
				.addClass('fa-times');	
		$(obj).removeClass('ticTacToeSpace-taken');
		$(obj).css('background-color','');
	});	

	//Get the modal set up
	$('.modal-title').html('Tic Tac Toe');
	$('.modalMessage').html('<i class="fa fa-trophy"></i><span class="ticTacToeWinner"></span> wins!');	
}

function showTicTacToeForm () {
	//Show the form asking for the names
	$('.ticTacToeBoard').addClass('hidden');		
	$('#ticTacToePlayerForm').removeClass('hidden');	
}

function showTicTacToeBoard () {
	//Pull player names from inputs. Leave as "X" and "O" respectively for inputs left blank
	//TO DO: Let the user choose who goes first.
	if( $('#playerXInput').val() ) {
		xPlayer = $('#playerXInput').val();        
	}
	else if ( !$('#playerXInput').val() ) {
		xPlayer = 'X';
	};
	if( $('#playerOInput').val() ) {
		oPlayer = $('#playerOInput').val();        
	}
	else if ( !$('#playerOInput').val() ) {
		oPlayer = 'O';
	};	
	ticTacToeWentFirst = oPlayer;	
	
	$('#ticTacToePlayerForm').addClass('hidden');
	$('.ticTacToeBoard').removeClass('hidden');			
}

function makeMoveTicTacToe(space) {
	//Make sure the spot that was clicked isn't already taken. If it is, don't do anything else.
	if (!$(space).hasClass('ticTacToeSpace-taken')) {
		numTurns++;
		ticTacToeSpacesLeft--;
		console.log(ticTacToeSpacesLeft);
		
		var spaceID = $(space).attr('id');
	
		//O's turn
		if (numTurns%2 == 0) {
			$(space).find('i').removeClass('fa-times')
				.addClass('fa-circle-o');	
			oMoves.push(spaceID);
			checkTicTacToeWin(oMoves);
			if (ticTacToeWin == true) {
				$('.ticTacToeWinner').html(oPlayer);
				$('#modalDialog').modal('show');
			//	$('#modalDialog').on('hide.bs.modal', function (event) {
			//		resetTicTacToeBoard();
			//	});	
			}
			else {
			$('.ticTacToeTurn').html(xPlayer);
			};
		}
		//X's turn
		else {
			xMoves.push(spaceID);
			checkTicTacToeWin(xMoves);	
			if (ticTacToeWin == true) {
				$('.ticTacToeWinner').html(xPlayer);
				$('#modalDialog').modal('show');
		//		$('#modalDialog').on('hide.bs.modal', function (event) {
		//			resetTicTacToeBoard();
		//		});	
			}
			else {
				$('.ticTacToeTurn').html(oPlayer);				
			};			
		};
			
		//Show the icon in the grid cell
		$(space).addClass('ticTacToeSpace-taken');	
		
		//If no one has won, and no more spaces avail, it's a tie	
		if (ticTacToeSpacesLeft == 0 && ticTacToeWin == false) {
			$('.modalMessage').html('Tie game!');	
			$('#modalDialog').modal('show');		
		};		

		//TO DO: Keep running total of wins per player (reset the totals when form shown)
	}
}
function checkTicTacToeWin(user) {	
	ticTacToeWinningCombinations.forEach(function(winningCombination) {
		var isSuperset = winningCombination.every(function(val) { return user.indexOf(val) >= 0; });
		if (isSuperset == true ) {
			winningCombination.forEach(function(winningSquare) {
				$('#' + winningSquare).css('background-color','#dff0d8');
			});			
			ticTacToeWin = true;
		}
	});
}

$(function(){
	//Wait for tab to be shown before firing off scripts so that React has a chance to render the board
	$('a[href="#jrTicTacToe"]').on('shown.bs.tab', function (e) {
			showTicTacToeForm();			
			
		$('.playTicTacToeButton').click(function () {	
			showTicTacToeBoard();			
			resetTicTacToeBoard();		
		});		
		$('.ticTacToeSpace').click(function () {	
				makeMoveTicTacToe(this);
		});
		$('.ticTacToePlayAgain').click(function () {	
			resetTicTacToeBoard();
		});
		$('.changeTicTacToePlayers').click(function () {	
			showTicTacToeForm();
		});	
		$('#ticTacToePlayerForm input').keypress(function(event) {
			if ( event.which == 13 ) {
				showTicTacToeBoard();			
				resetTicTacToeBoard();				
			}
		});			
	});	
});


//Single Player mode: When computer's turn:
  //Put the lines of code in a timeout function so that it does not happen right away (like maybe 500ms-1000ms delay)
  // Cycle through all available squares
			//Are there any that would cause computer to win? If so, go there
			//Else if are there any squares that would cause the other player to be blocked? If so, go there
			//Otherwise, just go in random spot.
	// Maybe have easy vs. hard. Easy just always picks random spot, difficult does the more complex logic?
