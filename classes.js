


class hero{
    constructor({hpStat, attackStat, defenseStat, name})
    {
        this.name = name;
        this.hpStat = hpStat;
        this.attackStat = attackStat;
        this.defenseStat = defenseStat;
    }
    recieveDmg(attackerStat){
        this.hpStat = this.hpStat-attackerStat;
        console.log(" "+this.name+ "has been hit!")
        console.log(this.name+"has remaining health of: " + this.hpStat)
    }
    attack(target){
        console.log(this.name + " strikes his Target! for: " + this.attackStat +"!");
        target.recieveDmg(this.attackStat);
    }




} 
