console.error("1.Ques")
function findEvenNumber(number){
    for(let num of number){
        // console.log
        if(num%2===0){
            console.log("Even Number is found", num);
            return;
        }
    }
}
findEvenNumber([1,3,7,8,9])

// ANOTHER (FOR LOOP) METHOD FOR THE ABOVE CODE........If you give array to the parameter   values then you will give the for loop is must.......
console.error("Second method")
function findEvenNumber(number){
    
        for(number=0; number<9; number++){
            if(number%2===0){
                console.log("Even Number is found", number);
                continue;
            }
        }
}
findEvenNumber([1,2,3,4,5,6,7])

console.error("2.Ques")
i=10;
ans=i++ + i + ++i + --i + i--;
console.log(ans)
console.log(i)