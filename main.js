//this function takes a phrase and returns a capitalized acronym.

function toAcronym(inp){
    let newInp = inp.split(' ')
    let acronym = ''
    for (let i = 0; i < newInp.length; i++) {
      acronym += newInp[i][0].toUpperCase()
    }
    return acronym
  }

console.log(toAcronym("keepm it Simple sweetheart")) // => KISS
console.log(toAcronym("Drugs and Resistance Education")) // => DARE
console.log(toAcronym("MayBe one Day we wIll MeEt aGain")) // => MODWWMA