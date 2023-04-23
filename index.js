const findMatching = (names, string) => {
    return names.filter(names => names.toUpperCase() === string.toUpperCase());
 }
 
 const fuzzyMatch = (name, string) => {
    return name.filter(name=> name.charAt(0) === string.charAt(0))
 }
 
 const matchName = (name, hometown)=> {
     return name.filter(name => name.name === hometown);
 }