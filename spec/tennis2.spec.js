function tennis()
{
  this.scoreA;
  this.scoreB;
}

function playAGetscore(Apoint)
{
  this.scoreA = Apoint;
}
function playBGetscore(Bpoint)
{
  this.scoreB = Bpoint;
}
function echo()
{
    var str = '';

    if(this.scoreA === 0 )
      {
          str += 'Love-';
      }
    if(this.scoreB === 0)
      {
          str += 'Love';
      }
      return str;
  }
  describe("Tennis game", function){
    var point = new tennis();
	  it('should  be  "Love = Love" when starting the game',function()
	  {
	      playAGetscore(0);
	      playBGetscore(0);
	      expect(echo()).toEual('Love-Love');
	  });
  });
