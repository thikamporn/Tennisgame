function tennispoint()
{
    ScoreA = 0;
    ScoreB = 0;
    caseA = 0;
    caseB = 0;

this.startgame = function()
{
    return this.echo();
}
this.playAgetscore = function()
{
    caseA += 1;
    return this.echo();
}
this.playBgetscore = function()
{
    caseB += 1;
    return this.echo();
}
this.echo = function()
{
    var strA = '';
    var strB = '';
 if(ScoreA === 0)
 {
    strA = 'Love';
 }
 if(ScoreB === 0)
 {
   strB = 'Love';
 }
 if(caseA === 1)
 {
    strA = 'fifteen';
 }
 if(caseB === 1)
 {
    strB = 'Love';
 }
 if(caseA === 2)
 {
    strA = 'thirty';
 }
 if(caseB === 2)
 {
    strB = 'Love';
 }

 else if(caseA === 3)
 {
    strA = 'A won the game';
    return strA;
    
 }
 return strA+'-'+strB;

 }
}

describe('Tennis game', function()
{
  var point = new tennispoint();
  it('should  be  "Love = Love" when starting the game',function()
 {
  expect(point.startgame()).toEqual('Love-Love');
 });
 it('should  be  "fifteen = Love" when A=15 and B=0',function()
 {
  expect(point.playAgetscore()).toEqual('fifteen-Love');
 });
 it('should  be  "thirty = Love" when A=30 and B=0',function()
 {
  expect(point.playAgetscore()).toEqual('thirty-Love');
 });
 it('should  be  "A won the game" when A=40 and B=0',function()
 {
  expect(point.playAgetscore()).toEqual('A won the game');
 });
});
