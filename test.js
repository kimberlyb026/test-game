
function myfunction(){
	
	var age=prompt("hoe  oud ben je");

	if (age>=16){
		alert("je mag het spel spelen");
	}
	 
	 else {
	 	alert("je mag het spel niet spelen")
	}
	if (age <= 15) {
		return false;
	}



	alert('je krijgt vragen die je moet beantwoorden om je einde te krijgen');
	alert('je hebt een droom en komt terecht in een fantasie bos en je ziet de magische wezen zoals elfen kabouters en ze vertellen dat je moet uikijken voor de rare wezens in de bos. je moet naar de kasteel om weer wakker te worden.')

	var sprookje = prompt('je mag kiezen tussen elfen en kabouters welke zou je kiezen');
	if (sprookje =='elfen') {
		var elfen=prompt ('je bent nu met de elfen en laten je kiezen tussen vliegen of lopen')
		if (elfen=='vliegen') {
			var vliegen=prompt('je hebt voor vliegen gekozen. je krijgt vliegstof en ziet 2 wegen rechts of links welke ga je') }
			if (vliegen=='rechts') {
				alert('je ziet het kasteel en gaat erin en je wordt weer wakker')
			}
			else if (vliegen=='links')
				alert('je ziet een vogel en je volgt hem en je vliegt te lang en je vliegstof is op en je valt en BAM je bent dood')
			}
		else if (elfen=='lopen'){
			var lopen=prompt('je loop de bos in en ziet een kat zou je hem volgen ja of nee')}
			if (lopen=='ja') {
				alert('je volgt hem en raakt hem kwijt nu kom je helemaal niet meer thuis en je ziet rare wezens en ZE ETEN JE OP!!!!')

else if (lopen=='nee')
alert('je kon beter vliegen met de elfen want je bent de weg kwijt')
}
else if (sprookje=='kabouters')
	{
		var kabouters=prompt ('de kabouters lopen met je door het bos je hebt de keus om met de grotekabouter mee te gaan of met de puntkabouter wie kies je')
	}

if (kabouters =='puntkabouter')
	{
		var puntkabouter = prompt('de punt kabouter neemt je mee en je kom bij de village uit. zou je rondkijken of vragen of die je meeneem naar het kasteel')
	}

	
if(puntkabouter=='rondkijken')
		{var rondkijken =prompt('je vraagt of je mag rondkijken en kom bij een huisje aan je doet de deur open en je ziet niemand. ga je roepen of je gaat zoeken of er nog iets bijzonders is')}

	
if(puntkabouter=='meenemen')
	alert('hij wou je niet meenemen dus hij neemt je mee het huisje en sluit je op')



	if(rondkijken=='roepen')
		{var roepen=prompt('je roept en je roept of er iemand is en er komt iemand aan zou je vragen hoe je naar het kasteel kom of ga je weer weg')}

	if (rondkijken=='zoeken')
		alert('je bent aan het rondkijken en er komt iemand aan hij vindt het niet leuk dat je rondkijkt en hij sluit je op in de hok en je komt er nooit meer uit')

if(roepen=='vragen')
	alert('je vraagt het aan de bewoner en hij geef je de richting van het kasteel en je loopt en je bent bij het kasteel en wordt weer wakker')

if (roepen=='weg')
	alert('de puntkabouter was naar je opzoek en zag je lopen en pakt je bij de kraag en sluit je op')

if (kabouters=='grotekabouter')
		{var grotekabouter= prompt('je bent nu met de grote kabouter hij zegt dat alles veilig is in het bos vertrouw je hem')}

	if(grotekabouter=='ja') 
	alert('omdat je hem vertouwde ben je bij het kasteel en ga je terug naar huis')

if(grotekabouter=='nee')
{var nee=prompt('je loopt weg van hem en je ziet een village ga je rondzoeken of loop je weg')}

if(nee=='rondzoeken')
	{var rondzoeken=prompt('je loopt naar de village en ziet een huis wat ga je doen het gebied doorzoeken of bewoners vinden')}

if(nee=='weglopen')
	alert('je loopt weg en de puntkabouter vindt je en sluit je op')

if(rondzoeken=='doorzoeken')
alert('je vindt een geheime gang en ga daardoor heen en je komt bij het kasteel uit en je kan naar huis')



else if  (rondzoeken =='vinden')
alert('je vindt een bewoner en je vraagt of je hem kan brengen naar het kasteel hij zegt ja maar je wist niet dat hij ook een puntkabouter was en hij sluit je nu ook op' )




}
