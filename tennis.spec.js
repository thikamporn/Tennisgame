
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
    //เคสที่แล้วต้องเป็นเคสสองดิ้
    //อันนี้เคสสามมมมมม
});
