function isPositiveDominant(a) 
{
    let positive = [];
    let posCount = 0;

    let negative = [];
    let negCount = 0;

    a.forEach(function(item)
    {
        if(item < 0 )
        {
            negative.push(item);
        }
        else if(item > 0)
        {
            positive.push(item);
        }
    });

    posCount = new Set(positive).size;
    negCount = new Set(negative).size;

    if(posCount > negCount)
    {
        return true;
    }
    else if (posCount == negCount)
    {
        return false;
    }
    else
    {
        return false;
    }
}

console.log(isPositiveDominant([1,0,0,-1]));
  