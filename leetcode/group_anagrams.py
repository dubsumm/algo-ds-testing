from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
      anagram_map = defaultdict(list)
 
      for s in strs:
        sorted_str = ''.join(sorted(s))
        anagram_map[sorted_str].append(s)
      for val in anagram_map.values():
         result.append(val)
      print(anagram_map.keys())
      return result
    
      
c = Solution()
strs = ["eat","tea","tan","ate","nat","bat"]
print(c.groupAnagrams(strs))