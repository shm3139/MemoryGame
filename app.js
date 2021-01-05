document.addEventListener('DOMContentLoaded',()=>{

	const cardArray=[
	{
		name:'1',
		img:'images/1.png'
	},
	{
		name:'1',
		img:'images/1.png'
	},
	{
		name:'2',
		img:'images/2.png'
	},
	{
		name:'2',
		img:'images/2.png'
	},
	{
		name:'3',
		img:'images/3.jpg'
	},
	{
		name:'3',
		img:'images/3.jpg'
	},
	{
		name:'4',
		img:'images/4.png'
	},
		{
		name:'4',
		img:'images/4.png'
	},
	{
		name:'5',
		img:'images/5.png'
	},
	{
		name:'5',
		img:'images/5.png'
	},
	{
		name:'6',
		img:'images/6.jpg'
	},
	{
		name:'6',
		img:'images/6.jpg'
	},
	];
	//randomizing the cards
	cardArray.sort(()=>0.5-Math.random());

	const grid=document.querySelector('.grid');
	const resultDisplay=document.querySelector('#result');
	var cardChosen=[];
	var cardChosenId=[];
	var cardsWon=[];

	//make board

	function createBoard(){
		for (let i=0; i <cardArray.length; i++) {
			var card=document.createElement('img');
			card.setAttribute('src','images/main.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click',flipCard);
			grid.appendChild(card);
		}
	}
	createBoard();

	//check for match function
	function checkForMatch(){
		var cards=document.querySelectorAll('img');
		const optionOneId=cardChosenId[0];
		const optionTwoId=cardChosenId[1];
		if(cardChosen[0]===cardChosen[1]){
			alert('You found a match');
			cards[optionOneId].setAttribute('src','images/white.jpg');
			cards[optionTwoId].setAttribute('src','images/white.jpg');
			cardsWon.push(cardChosen);
		}else{
			cards[optionOneId].setAttribute('src','images/main.jpg');
			cards[optionTwoId].setAttribute('src','images/main.jpg');
			alert('Try Again');
		}
		cardChosen=[];
		cardChosenId=[];
		resultDisplay.textContent=cardsWon.length;
		if (cardsWon.length===cardArray.length/2) {
			resultDisplay.textContent="Congrats!";
		}
	}

	//flip the card

	function flipCard(){
		//matching cardId and data Id, pairing them up 
		var cardId=this.getAttribute('data-id');
		cardChosen.push(cardArray[cardId].name);
		cardChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardChosen.length===2) {
			setTimeout(checkForMatch,500);
		}
	}
})