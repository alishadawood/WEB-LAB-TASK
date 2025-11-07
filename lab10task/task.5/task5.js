function toggleParagraph()
{
    let para = document.getElementById("myPara");
    if (para.style.display === "none")
        {
            para.style.display = "block";
        }
    else
        {
            para.style.display = "none";
        }
}