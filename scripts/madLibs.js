var story1 = [
	'Once there was a princess named <span class="madLibUserValue"></span>.This princess loved to <span class="madLibUserValue"></span> to the circus. On her last visit to the circus, the princess saw a really big <span class="madLibUserValue"></span>. This thing was so big, it <span class="madLibUserValue"></span> everything in sight! Later that day, the princess had a sore <span class="madLibUserValue"></span>. She tried to make it feel better by getting her mommy to put on <span class="madLibUserValue"></span> bandaids. By dinner time, the princess felt much better and had a yummy dinner of <span class="madLibUserValue"></span>. Then the princess and her daddy read <span class="madLibUserValue"></span> stories. It was a great day.',
	'Name','Verb','Animal','Verb (Past-Tense)','Part of the Body','Number','Noun', 'Number'
	];
	
var story2 = [
	'This is the second story <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span><span class="madLibUserValue"></span>',
	'Noun','Plural Noun','Place','Adjective','Verb','Part of the Body','Number','Noun'
	];
	
var story3 = [
	'This is the third story <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span><span class="madLibUserValue"></span>',
	'Noun','Plural Noun','Place','Adjective','Verb','Part of the Body','Number','Noun'
	];
	
var story4 = [
	'This is the fourth story <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span><span class="madLibUserValue"></span>',
	'Noun','Plural Noun','Place','Adjective','Verb','Part of the Body','Number','Noun'
	];
	
var story5 = [
	'This is the fifth story <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span> <span class="madLibUserValue"></span><span class="madLibUserValue"></span>',
	'Noun','Plural Noun','Place','Adjective','Verb','Part of the Body','Number','Noun'
	];

var madLibsEntries = [];

var madLibsStories = [story1, story2, story3, story4, story5];

function initializeMadLibs() {
	//Hide the story and show the form
		$('#madLibsStory').hide();	
		$('#madLibsForm').removeClass('hidden');
		
	//Select a random story
//	shuffleArray(madLibsStories);	 //Commented out the shuffle for now since I only have one story
	$('#madLibsStoryContent').html(madLibsStories[0][0]);	
	
	//Empty all the inputs and clear their old story values and assign the placeholders for xs
	$('#madLibsForm input').each(function (i, obj) {
		$(obj).val('')
		.attr('placeholder', madLibsStories[0][i+1]);
	});	
	madLibsEntries = [];
	
	//Assign the labels
	$('#madLibsForm label').each(function (i, obj) {
		$(obj).html(madLibsStories[0][i+1]);	
	});	
}

function generateMadLibsStory() {
	//Collect all of their entries
		$('#madLibsForm input').each(function (i, obj) {
      var entry = $(obj).val();
      madLibsEntries.push(entry);
		});

		//Distribute them into the story
		$('#madLibsStory .madLibUserValue').each(function (i, obj) {
      $(obj).html(madLibsEntries[i]);
		});		
		
		//Hide the form and show the result
		$('#madLibsForm').addClass('hidden');
		$('#madLibsStory').show();	
}

$(function(){
	//Wait for tab to be shown before firing off scripts so that React has a chance to render the form
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		initializeMadLibs();

		$('#madLibsCreate').click(function () {	
			generateMadLibsStory();
		});
		
		$('#madLibsReset').click(function () {	
			initializeMadLibs();
		});	
		
		$('#madLibsForm input').keypress(function(event) {
			if ( event.which == 13 ) {
				generateMadLibsStory();
			}
		});		
	});		
});