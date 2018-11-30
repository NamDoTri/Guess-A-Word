const Qkeyboard = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A','S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z','X', 'C', 'V','B', 'N', 'M'];
const alphabet =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W','X', 'Y', 'Z'];
for (let i = 0; i < Qkeyboard.length; i ++)
{
    if (screen.width < 1400)
    {
        document.write("<button class=\"Buttons\" onclick=\"handleButtons(this)\">" + Qkeyboard[i] + "</button> <div class=\"divider\"></div>");
        if ( Qkeyboard[i] == 'P' || Qkeyboard[i] == 'L')
        {
            document.write("<br>");
        }
    }
    else if (screen.width > 1400)
    {
        document.write("<button class=\"Buttons\" onclick=\"handleButtons(this)\">" + alphabet[i] + "</button> <div class=\"divider\"></div>");    
    }   
}