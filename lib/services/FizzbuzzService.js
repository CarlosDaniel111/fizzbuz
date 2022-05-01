class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.score % 5 === 0 && explorer.score % 3 === 0){
            explorer.trick = "FIZZBUZZ";
        } else if(explorer.score % 3 === 0){
            explorer.trick = "FIZZ";
        } else if (explorer.score % 5 === 0){
            explorer.trick = "BUZZ";
        } else {
            explorer.trick = explorer.score;
        }
    }

    static applyValidationInNumber(number){
        if(number%3 === 0){
            if(number%5 === 0){
                return "FIZZBUZZ";
            }
            return "FIZZ";
        }else if(number%5 === 0){
            return "BUZZ";
        }else{
            return number;
        }
    }
}

module.exports = FizzbuzzService;