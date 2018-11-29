const keyboard = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A','S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z','X', 'C', 'V','B', 'N', 'M'];
for (let i = 0; i < keyboard.length; i ++)
{
    document.write("<button class=\"Buttons\" onclick=\"handleButtons(this)\">" + keyboard[i] + "</button> <div class=\"divider\"></div>");
    if ( keyboard[i] == 'P' || keyboard[i] == 'L')
    {
        document.write("<br>");
    }
}