import re
from collections import defaultdict

class Solution:
    def countOfAtoms(self, formula: str) -> str:
        i = 0
        stack = [defaultdict(int)]
        while i < len(formula):
            if formula[i] == "(":
                stack.append(defaultdict(int))
                i += 1
            elif formula[i] == ")":
                i += 1
                multiplier = ""
                while i < len(formula) and formula[i].isdigit():
                    multiplier += formula[i]
                    i += 1
                temp_map = stack.pop()
                if multiplier:
                    multiplier = int(multiplier)
                    for key in temp_map:
                        temp_map[key] *= multiplier
                for key in temp_map:
                    stack[-1][key] += temp_map[key]
            else:
                element = formula[i]
                count = ""
                if i + 1 < len(formula) and formula[i + 1].islower():
                    element = formula[i : i + 2]
                    i += 1
                while i + 1 < len(formula) and formula[i + 1].isdigit():
                    count += formula[i + 1]
                    i += 1
                count = int(count) if count else 1
                stack[-1][element] += count
                i += 1
        final_map = stack.pop()
        answer = ""
        for element in sorted(final_map.keys()):
            answer += element
            if final_map[element] > 1:
                answer += str(final_map[element])

        return answer
