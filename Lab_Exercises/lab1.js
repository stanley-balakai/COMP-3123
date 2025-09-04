function CapitalizeFirstLetter(sentence){
    let letterStorage=[]
    for(let i = 0; i<sentence.length; i++){
        let letter=sentence[i]
        if(i==0){
            letter = letter.toUpperCase()
        }else if(sentence[i-1]===' '){
            letter = letter.toUpperCase()
        }
        letterStorage.push(letter)
    }
        let capitalizedString = letterStorage.join('')
        return capitalizedString
       }

    console.log(CapitalizeFirstLetter("this is a test to see if this works"))



    function max(...numbers){
        let largestNumber = 0
        for(let i = 0; i<numbers.length; i++){
            if(numbers[i]> largestNumber){
                largestNumber = numbers[i]
            }
        }
        return largestNumber
    }

        console.log(max(40,2,3))

// • Acute angle: An angle between 0 and 90 degrees.
// • Right angle: An 90 degree angle.
// • Obtuse angle: An angle between 90 and 180 degrees.
// • Straight angle: A 180 degree angle.

    function angle_type(angle){
        if(angle==180){
            return "Straight Angle"
        }else if(angle<180 && angle>90){
            return "Obtuse Angle"
        }else if(angle==90){
            return "Right Angle"
        }else if(angle<90 && angle>0){
            return "Acute Angle"
        }else{
            return "invalid input"
        }
    }

    console.log(angle_type(90))

    function right(str) {
    if (str.length < 3) {
        return "String length must be greater than or equal to 3"
    }
    let lastThreeLetters = str.slice(-3)
    let remainingLetters = str.slice(0, -3)
    
    return lastThreeLetters + remainingLetters
}

    console.log(right("ThisIsATEST"))
