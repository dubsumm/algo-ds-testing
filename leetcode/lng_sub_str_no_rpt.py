class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
      max = ''
      temp = ''
      start_ind = 0
      while start_ind < len(str):
        for i in range(len(str[start_ind:])):
            if str[i+start_ind] not in temp: 
              temp+=str[i+start_ind]
            else:
                temp = ''
                start_ind += 1
                break
            if len(temp) > len(max):
              max = temp
      return max      

c = Solution()
str = 'pwwkew'
print(c.lengthOfLongestSubstring(str))
            