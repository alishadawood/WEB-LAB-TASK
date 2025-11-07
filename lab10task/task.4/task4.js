function toggleBulb()
{
    let bulb = document.getElementById("bulbImage");
    if (bulb.src.includes("bulboff"))
        {
            bulb.src = "blubof.jpeg";
        }
    else
        {
            bulb.src = "blubonon.jpeg";
        }
}