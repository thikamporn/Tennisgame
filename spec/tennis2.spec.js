function tennispoint()
{
  ScoreA = 0;
  ScoreB = 0;
  this.startgame = function()
    {
      return this.echo();
    }
  this.echo = function()
    {
      var str = '';

      if(ScoreA === 0 && ScoreB === 0)
        {
            str = 'Love-Love';
        }
        return str;
    };
}

  describe('Tennis game', function()
  {
    var point = new tennispoint();
	  it('should  be  "Love = Love" when starting the game',function()
	  {
	      expect(point.startgame()).toEqual('Love-Love');
	  });
  });
