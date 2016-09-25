
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
    return str;
  }

describe ( "Tennis Game" ,function()
{
  it('Should be "Love-Love" when start game'),function()
    {
        var score = teampoint(0,0);
    }

});
