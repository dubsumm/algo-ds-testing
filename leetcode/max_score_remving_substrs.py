class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        score = 0
        def helper(pattern: str, val: int) -> int:
            nonlocal s
            score = 0
            stack = [s[0]]
            for i in range(1,len(s)):
                if stack and stack[-1] + s[i] == pattern:
                    stack.pop()
                    score += val
                else: stack.append(s[i])
            s = ''.join(stack)
            return score
        if x > y:
            score += helper('ab', x)
            if s:
                score += helper('ba', y)
        else: 
            score += helper('ba', y)
            if s:
                score += helper('ab', x)
        return score