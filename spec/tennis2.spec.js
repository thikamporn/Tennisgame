function tennispoint()
{
  this.playAGetscore = '';
  this.playBGetscore = '';
  this.echo = function()
  {
    var str = '';

    if(this.playAGetscore === 0)
      {
          str += 'Love-';
      }
    if(this.playBGetscore === 0)
      {
          str += 'Love';
      }
    if(this.playAGetscore === 15)
     {
          str += 'fifteen-';
     }
    if(this.playBGetscore === 15)
     {
          str += 'fifteen';
     }
    if(this.playAGetscore === 30)
     {
          str += 'thirty-';
     }
    if(this.playBGetscore === 30)
     {
          str += 'thirty' ;
     }
    if(this.playAGetscore === 40)
    {
          str += 'A Win the game';
    }
    if(this.playBGetscore === 40)
    {
         str += 'B Win the game' ;
    }
      return str;
  };
}

  describe('Tennis game', function(){
	  it('should  be  "Love = Love" when starting the game',function()
	  {
       var point = new tennispoint();
	      point.playAGetscore = 0;
	      point.playBGetscore = 0;
	      expect(point.echo()).toEqual('Love-Love');
	  });
    it('should  be  "fifteen = Love" when A=15 and B=0',function()
    {
       var point = new tennispoint();
        point.playAGetscore = 15;
        point.playBGetscore = 0;
        expect(point.echo()).toEqual('fifteen-Love');
    });
    it('should  be  "thirty = Love" when A=30 and B=0',function()
    {
       var point = new tennispoint();
        point.playAGetscore = 30;
        point.playBGetscore = 0;
        expect(point.echo()).toEqual('thirty-Love');
    });
    it('should  be  "A won the game" when teamA have score 40',function()
    {
       var point = new tennispoint();
        point.playAGetscore = 40;
        point.playBGetscore = 0;
        expect(point.echo()).toEqual('A won the game');
    });
  });
