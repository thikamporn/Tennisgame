
function teampoint(SA,SB)
{
    var str = '';

    if(SA === 0 )
      {
          str += 'Love-';
      }
    if( SB === 0)
      {
          str += 'Love';
      }
    if(SA === 15)
     {
         str += 'fifteen-';
     }
    if(SB === 15)
     {
         str += 'fifteen';
     }
     if(SA === 30)
       {
           str += 'thirty-';
       }
    if(SB === 30)
       {
           str += 'thirty';
       }
    if(SA === 40)
     {
         str = 'A Win the game';
     }
    if(SB === 40)
     {
         str = 'B Win the game';
     }
    return str;
  }

describe ( "Tennis Game" ,function()
{
  it('Should be "Love-Love" when start game'),function()
    {
        var score = teampoint(0,0);
    }
  it('Should be "fifteen-fifteen" when A=15 and B=15'),function()
    {
         var score = teampoint(15,15);
    }
  it('Should be "thirty-thirty" when A=30 and B=30'),function()
    {
        var score = teampoint(30,30);
    }
  it('Should be "fifteen-Love" when A=15 and B=0'),function()
    {
        var score = teampoint(15,0);
    }
    //case 4 ไม่ผิดแน่งับบ
  it('Should be "fifteen-thirty" when A=15 and b=30'),function()
    {
        var score = teampoint(15,30);
    }
    //ง่วงแล้วง่าาา
  it('Should be "B Win the game" when A=15 and B=40'),function()
    {
       var score = teampoint(15,40);
    }
    //อีกนิดนะ อึ๊บๆ
  it('Should be "thirty-Love" when A=30 and B=0'),function()
    {
       var score = teampoint(30,0);
    }
  it('Should be "thirty-fifteen" when A=30 and B=15'),function()
    {
       var score = teampoint(30,15);
    }
    //case 8 go up
  it('Should be "B Win the game" when A=30 and B=40'),function()
    {
       var score = teampoint(30,40);
    }
});
