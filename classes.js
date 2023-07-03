


class fighter{
    constructor({hpStat, attackStat, defenseStat, name, hpTag})
    {
        this.name = name;
        this.hpStat = hpStat;
        this.attackStat = attackStat;
        this.defenseStat = defenseStat;
        this.hpTag = hpTag;
    }
    recieveDmg(attackerStat){
        this.hpStat = this.hpStat-attackerStat;

        document.getElementById(this.hpTag).style.width = this.hpStat + '%';
        if(this.hpStat<1){
            document.getElementById(this.hpTag).style.width = 0 + '%';
        }


        console.log(" "+this.name+ "has been hit!")
        console.log(this.name+"has remaining health of: " + this.hpStat)
        if(this.hpStat<1){
            console.log(this.name+" has fallen in combat...");
        }
    }
    attack(target){

        let attackRandBuff = Math.floor(Math.random()*11);
        let currAttackVal = attackRandBuff + this.attackStat;


        console.log(this.name + " strikes his Target! for: " + currAttackVal +"!");
        
        setMessage(this.name + " strikes his Target! for: " + currAttackVal +"!");

        target.recieveDmg(currAttackVal);
    }
    heal(){

        let healRoll = 10;
        let healBuff = Math.floor(Math.random()*11);
        let currHealVal = healBuff+healRoll;




        console.log(this.name + " heals themselves for: "+ currHealVal + "!");
        setMessage(this.name + " heals themselves for: " + currHealVal +"!");
        this.hpStat = this.hpStat + currHealVal;
        document.getElementById(this.hpTag).style.width = this.hpStat + '%';
        
    }





} 

function setMessage(messageTranscript){
    document.getElementById('messageDisp').innerHTML = messageTranscript;
}