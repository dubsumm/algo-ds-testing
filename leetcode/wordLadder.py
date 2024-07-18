
# Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
# Only one letter can be changed at a time.
# Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
# Note:
# Return 0 if there is no such transformation sequence.
# All words have the same length.
# All words contain only lowercase alphabetic characters.
# You may assume no duplicates in the word list.
# You may assume beginWord and endWord are non-empty and are not the same.
from collections import deque

class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: list[str]) -> int:
        wordSet = set(wordList)
        if endWord not in wordSet:
            return 0
        queue = deque([(beginWord, 1)])
        visited = set([beginWord])

        while queue:
            word, steps = queue.popleft()
            if endWord == word:
                return steps
            for i in range(len(word)):
                for letter in 'abcdefghijklmnopqrstuvwxyz':
                    new_word = word[:i] + letter + word[i+1:]
                    if new_word in wordSet and new_word not in visited:
                        visited.add(new_word)
                        queue.append((new_word, steps + 1))
                       

beginWord = "hit" 
endWord = "cog" 
wordList = ["hot","dot","dog","lot","log","cog"]

s = Solution()
print(s.ladderLength(beginWord, endWord, wordList)) 

     