(() => {

    // place your const, vars, functions or classes here
    fields = [ 4 , 4 , 11 , 4 ];
    width = g.getWidth();
    height = g.getHeight();
    rowHeight = height/4;
    rowlights = [];

    function drawBerlinClock() {
        var now = new Date();
        rowlights[0] = now.getHours() / 5;
        rowlights[1] = now.getHours() % 5;
        rowlights[2] = now.getMinutes() / 5;
        rowlights[3] = now.getMinutes() % 5;
    
        g.clear();
        
        g.drawRect(0,0,width,height);
        for (row = 0 ; row < 4 ; row++) {
          nfields = fields[row];
          boxWidth = width/nfields;
          
          for (col = 0 ; col < nfields ; col++) {
            x1 = col*boxWidth;
            y1 = row*rowHeight;
            x2 = (col+1)*boxWidth;
            y2 = (row+1)*rowHeight;
            
            g.setColor(1,1,1);
            g.drawRect(x1,y1,x2,y2);
            if (col<rowlights[row]) {
              
              if (row === 2 ) {
                if (((col+1) % 3) === 0) {
                  g.setColor(1,0,0);
                } else {
                  g.setColor(1,1,0);
                }
              } else {
                  g.setColor(1,0,0);
              }
              
              g.fillRect(x1+2,y1+2,x2-2,y2-2);
            }
          }
        }
    }

    // special function to handle display switch on
    Bangle.on('lcdPower', (on) => {
        if (on) {
        	drawWidgets();
            // call your app function here
            drawBerlinClock();
    }});

    // call your app function here 

    // refesh every 15 sec
    setInterval(drawBerlinClock, 15E3);

    drawBerlinClock();

})();
