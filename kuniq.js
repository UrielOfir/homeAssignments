console.log(KUniqueCharacters("2aabbcbbbadef"));

function KUniqueCharacters(str) {
  // code goes here
  let k = str[0];
  let longestSubstring = "";
  recursiveCheck(str.substring(1, str.length));

  function recursiveCheck(substring) {
    let charcters = {};
    let changedCharIndex = 0;
    for (let i = 0; i < substring.length; i++) {
      if (changedCharIndex === 0) {
        changedCharIndex = substring[i] != substring[0] ? i : changedCharIndex;
      }
      if (!charcters[substring[i]]) {
        charcters[substring[i]] = true;
      }
      if (Object.keys(charcters).length <= k) {
        if (i + 1 > longestSubstring.length) {
          longestSubstring = substring.substring(0, i + 1);
        }
      }
      else break
    }
    substring = substring.substring(changedCharIndex, substring.length);
    if (substring.length>1){
      recursiveCheck(substring);
    }
  }
  return longestSubstring;
}
