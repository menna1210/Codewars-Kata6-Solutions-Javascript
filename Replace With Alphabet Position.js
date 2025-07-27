function findAlpha(alpha){
    let final = alpha.toLowerCase().split('').filter(char=>char>='a'&&char<='z')
    .map(char=>char.charCodeAt(0)-96).join(' ')
    return final
}
console.log(findAlpha("The sunset sets at twelve o' clock."));
