var numCardsActive = 0;
var numMoves = 0;
var firstCard;
var secondCard;
var numMatches = 0;
var totalMatches = 6;
var cards = ["cardcontent1","cardcontent1","cardcontent2","cardcontent2","cardcontent3","cardcontent3","cardcontent4","cardcontent4","cardcontent5","cardcontent5","cardcontent6","cardcontent6"]

function assignCards() {	
	//Reset the board
	numMatches = 0;
	numMoves = 0;
	numCardsActive = 0;	
	$('.numMoves').html(numMoves);
	$('.card').each(function (i, obj) {
			$(obj).removeClass('card-flipped')
				.removeClass('card-matched')
				.removeClass('card-active');
	});		
	
	//Shuffle the cards
	shuffleArray(cards);
	$('.card-content').each(function (i, obj) {
		$(obj).removeClass(); //Get rid of the old assignment
		$(obj).addClass('card-content')
			.addClass(cards[i]);
	});	
	
	//Get the modal set up
	$('.modal-title').html('Memory Game');
	$('.modalMessage').html('<i class="fa fa-trophy"></i>Yay! You won in <span class="numMoves"></span> moves.');
}

function flipCard(card) {
	if (!$(card).hasClass('card-flipped') && numCardsActive < 2) {		
		//Flip the card
		$(card).addClass('card-flipped')
			.addClass('card-active');
		numCardsActive ++;	
		
		//Once 2 cards have been flipped, check for a match
		if (numCardsActive == 2) {		
			$('.card-active .card-content').each(function (i, obj) {
					var classes = this.className.split(/\s+/);
					
					if (i == 0) {
						firstCard = classes;
					}
					else if (i == 1) {									
						secondCard = classes;
						
						//Match
						if (firstCard[1] == secondCard[1]) {								
							$('.card-active').each(function (i, obj) {	
									timeout = setTimeout(function () {
										$(obj).removeClass('card-active')
											.addClass('card-matched');
										numCardsActive = 0;	
									}, 250);					
							});
							numMatches ++;	
						}
						
						//No match
						else {
							$('.card-active').each(function (i, obj) {
									timeout = setTimeout(function () {
									$(obj).removeClass('card-active')
										.removeClass('card-flipped');
									numCardsActive = 0;	
									}, 750);									
							});													
						}						
					}		
			});			
			
			numMoves ++;
			$('.numMoves').html(numMoves);
			//All cards have been matched
			if (numMatches == totalMatches) {				
				$('#modalDialog').modal('show');
				$('#modalDialog').on('hide.bs.modal', function (event) {
					assignCards();
				});					
			}
		}
	}
}

$(function(){
	//Wait for tab to be shown before firing off scripts so that React has a chance to render the board
	$('a[href="#jrMemoryGame"]').on('shown.bs.tab', function (e) {
		assignCards();
		$('.card').click(function () {	
				flipCard(this);
		});
		$('.resetCards').click(function () {	
			assignCards();
		});
	});
});

//TO DO: Should be able to use react to generate the cards as long as I move the .card click handler after clicking the Memory Game nav link.

