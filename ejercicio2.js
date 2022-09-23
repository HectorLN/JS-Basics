let n;
if (n > 0)
{
    function sumCube(n)
    {
        let sum = 0;

        for (let i = 1; i <= n; i++)
        {
            sum = sum  + i**3;
        }

        return sum;
    }

    console.log(sumCube(3));
}
else if (n < 0)
{
    console.log('Ingrese un valor positivo');
}

//----------------------------------------------------------------------------------------------------------------------

function isAvgWhole(array)
{
   let sum = 0;
   let arrayTotal = array.length;
   let grade = 0;
   array.forEach(item => {sum += item; });
   
   grade = sum / arrayTotal;

   console.log(grade);
   return grade;
}

let grades = [1, 2, 3, 4, 5];
isAvgWhole(array);

//----------------------------------------------------------------------------------------------------------------------

function coneVolume(h, r) 
{
    let vol;

    if(h == 0)
    {
        return 0;
    }

    vol = (Math.PI * r * r * h) / 3;

    vol = Math.round(vol*100)/100;

    return vol;
    
}

console.log(coneVolume(15, 6));

//----------------------------------------------------------------------------------------------------------------------

function sortIt(arr) 
{
    let arrayHelper = [];

    for (let i in arr)
    {
        if(typeof(i) == Array)
        {
            arrayHelper.push(i[0]);
        }
        else
        {
            arrayHelper.push(i);
        }

    }
   
    for (let i in arr)
    {
        if(typeof(i) == Array)
        {
            for(let [inx,ele] of arr.entries())
            {
                if (i[0] == ele)
                {
                    arrayHelper[ele] = [arrayHelper[ele]];
                }
            }
        }   
        
    }
    return arrayHelper.sort((a, b) => a - b);

}

console.log(sortIt[8,[1]]);

//----------------------------------------------------------------------------------------------------------------------

function triangle(n) 
{
    let points = (n * (n + 1))/ 2;
    
    console.log(points);
    return points;
}

triangle(3);

//-----------------------------------------------------------------------------------------------------------------------0
function makePlusFunction(baseNum) 
{
	plusFive();
}

function plusFive(newNum) 
{
    const plusFive = makePlusFunction(5);
    
    newNum = newNum + baseNum;

}

console.log(plusFive(2));
//-----------------------------------------------------------------------------------------------------------------------
function getFrequencies(arr) 
{
    let frequencies = {};
    for (let i in arr)
    {
        if(frequencies[arr[i]])
        {
            frequencies[arr[i]]++;
        }
        else
        {
            frequencies[arr[i]] = 1;
        }
    }
    return frequencies;
}

console.log(getFrequencies([1,2,3,1,2,4,5,6,3,4,5]));
//-----------------------------------------------------------------------------------------------------------------------
function isProbMatrix(arr) 
{
    let array = [];
    arr.map((item) => {array.push(item.length)});

    //si es cuadrada
    if(array.every((item) => {return item == array[0]}))
    {
        let sumFilas;

        //sumar valores columnas
        for(let i = 0; i < arr.length; i++)
        {
            sumFilas = 0;

            //sumar valores filas
            for(let j = 0; j < arr.length; j++)
            {
                if( Number(arr[i][j]) >= 0 && Number(arr[i][j]) <= 1)
                {
                    sumFilas += arr[i][j];
                }
                else
                {
                    return false;
                }
                
            }  
        }

        if(sumFilas == 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
    
}

console.log(isProbMatrix([ [0.5,0.5,0], [0.2,0.3,0.3,0.2], [0.1,0.2,0.7]]));
//-----------------------------------------------------------------------------------------------------------------------
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
  