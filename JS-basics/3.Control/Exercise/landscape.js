function isLandscape(width, height) 
{
    if (width > height) return "Landscape";
    else if (width < height) return "Portrait";
    else return "Square";
}

console.log(isLandscape(800, 600));

//cleaner way of writing the above code

function isLandscape(width, height)
{
    return (width > height); //returns true if landscape and false if portrait
}

console.log(isLandscape(800, 600)); 