def longestPalindrome(s: str) -> str:
    if len(s) <= 1:
        return s

    def expand_answer(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1 : right]

    answer = s[0]

    for i in range(len(s) - 1):
        odd = expand_answer(i, i)
        even = expand_answer(i, i + 1)
        if len(odd) > len(answer):
            answer = odd
        if len(even) > len(answer):
            answer = even
    return answer


answer = longestPalindrome("asdfklsldfkfjfjfjfjfjfj")

print(answer)
