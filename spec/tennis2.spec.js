function tennispoint()
 {
     caseA = 0;
     caseB = 0;
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
      //////A
      if(caseA === 0)
        {
           strA = 'Love';
        }
      if(caseA === 1)
        {
           strA = 'fifteen';
        }
      if(caseA === 2)
        {
           strA = 'thirty';
        }
        if(caseA === 3)
          {
             strA = 'fourty';
          }
      else if(caseA === 4)
        {
           strA = 'A won the game';
           caseA = 0;
           return strA;
        }
      ///////B
      if(caseB === 0)
        {
           strB = 'Love';
        }
      if(caseB === 1)
        {
           strB = 'fifteen';
        }
      if(caseB === 2)
        {
           strB = 'thirty';
        }
        if(caseB === 3)
          {
             strB = 'fourty';
          }
      else if(caseB === 4)
      {
         strB = 'B won the game';
          caseB = 0;
         return strB;
      }
  return strA+'-'+strB;
  }
}

 describe('Tennis game', function()
 {
   var point = new tennispoint();
   /////////////////0-0//////////
  it('should  be  "Love-Love" when starting the game',function()
  {
   expect(point.echo()).toEqual('Love-Love');
  });
  /////////////////caseA////////
  it('should  be  "fifteen-Love" when A=15 and B=0',function()
  {
   expect(point.playAgetscore()).toEqual('fifteen-Love');
  });
  it('should  be  "thirty-Love" when A=30 and B=0',function()
  {
   expect(point.playAgetscore()).toEqual('thirty-Love');
  });
  it('should  be  "fourty-Love" when A=40 and B=0',function()
  {
   expect(point.playAgetscore()).toEqual('fourty-Love');
  });
  it('should  be  "A won the game" when A win',function()
  {
   expect(point.playAgetscore()).toEqual('A won the game');
  });
   //////////////caseB///////////
  it('should  be  "Love-fifteen" when A=0 and B=15',function()
  {
   expect(point.playBgetscore()).toEqual('Love-fifteen');
  });
  it('should  be  "Love-thirty" when A=0 and B=30',function()
  {
   expect(point.playBgetscore()).toEqual('Love-thirty');
  });
  it('should  be  "Love-fourty" when A=0 and B=40',function()
  {
   expect(point.playBgetscore()).toEqual('Love-fourty');
  });
  it('should  be  "B won the game" when B win',function()
  {
   expect(point.playBgetscore()).toEqual('B won the game');
  });
  /////////////15-15//////////////
  it('should  be  "fifteen-fifteen" when A and B equal 15',function()
  {
    point.playAgetscore();
    point.playBgetscore();
   expect(point.echo()).toEqual('fifteen-fifteen');
  });
  it('should  be  "thirty-fifteen" when A=30 and B=15',function()
  {
    point.playAgetscore();
   expect(point.echo()).toEqual('thirty-fifteen');
  });
 });
