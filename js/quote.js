
  $(document).ready(function(){
    var quoteSource=[
    {
      quote: "Fear is the mind-killer.",
      name:"Frank Herbert, Dune"
      },
      {
        quote:"There is no one right way to live.",
        name:"Daniel Quinn, Ishmael"
      },
      {
        quote:"The premise of the Taker story is 'the world belongs to man'. … The premise of the Leaver story is 'man belongs to the world'.",
        name:"Daniel Quinn, Ishmael"
      },
      {
        quote:"Make it so.",
        name:"Capt. Jean-Luc Picard, Star Trek: TNG"
      },
      {
        quote:"To boldly go where no one has gone before.",
        name:"Gene Roddenberry"
      },
      {
        quote:"There are four lights.",
        name:"Capt. Jean-Luc Picard, Star Trek: TNG"
      },
      {
        quote:"Resistance is futile.",
        name:"Da Borg"
      },
      {
        quote:"You can tell you’ve found a really interesting question when nobody wants you to answer it.",
        name:"Daniel Quinn, Ishmael"
      },
      {
        quote:"You can't take the sky from me.",
        name:"Joss Whedon, Firefly"
      }, 
      { 
        quote: "This is how humans are: We question all our beliefs, except for the ones that we really believe in, and those we never think to question.",
        name: "Orson Scott Card, Speaker for the Dead"
      },
      {
        quote:"May the odds be ever in your favor.",
        name:"Suzanne Collins, The Hunger Games"
      },
      {
        quote:"All that is gold does not glitter, Not all those who wander are lost",
        name:"J. R. R. Tolkien, The Lord of the Rings"
      },
      {
        quote:"The electric things have their life too. Paltry as those lives are.",
        name:"Philip K. Dick, Do Androids Dream of Electric Sheep"
      },
      {
        quote:"Maybe I’ll post a consumer review. “Brought product to surface of Mars. It stopped working. 0/10.”",
        name:"Andy Weir, The Martian"
      },
      {
        quote:"Nothing but the rain.",
        name:"Starbuck, Battlestar Galactica"
      },
      {
        quote:"Causes are only lost when we give up.",
        name:"Laura Roslin, Battlestar Galactica"
      },
      {
        quote:"Do you know what the definition of a hero is? Someone who gets other people killed. You can look it up later.",
        name:"Zoe Washburne, Firefly"
      },
      {
        quote:"I am no man!",
        name:"Eowyn, Lord of The Rings"
      },
      {
        quote:"Fire cannot kill a dragon.",
        name:"Daenaryes Targaryen, Game of Thrones"
      },
      {
        quote:"Star-Lord, man. Legendary outlaw.",
        name:"Peter Quill, Guardians of the Galaxy"
      },
      {
        quote:"Fear of a name only increases fear of the thing itself.",
        name:"Hermione Granger, Harry Potter"
      }

  ];
    

    $('#quoteButton').click(function(evt){
      //define the containers of the info we target
      var quote = $('#quoteContainer p').text();
      var quoteGenius = $('#quoteGenius').text();
      //prevent browser's default action
      evt.preventDefault();
      //getting a new random number to attach to a quote and setting a limit
      var sourceLength = quoteSource.length;
      var randomNumber= Math.floor(Math.random()*sourceLength);
      //set a new quote
      for(i=0;i<=sourceLength;i+=1){
      var newQuoteText = quoteSource[randomNumber].quote;
      var newQuoteGenius = quoteSource[randomNumber].name;
      //console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
        quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-               '+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
      
    };
  
  });//end quoteButton function
    
    
});//end document ready


