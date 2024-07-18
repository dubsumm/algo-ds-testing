def isValid(s: str) -> bool:
    # Reversed dictionary to hold the mapping of opening to closing brackets
    bracket_map = {'(': ')', '{': '}', '[': ']'}
    # Stack to keep track of opening brackets
    stack = []

    # Iterate through each character in the string
    for char in s:
        # If the character is an opening bracket
        if char in bracket_map:
            # Push the corresponding closing bracket onto the stack
            stack.append(bracket_map[char])
        else:
            # If the character is a closing bracket, check if it matches the top of the stack
            if not stack or stack.pop() != char:
                return False
    
    # If the stack is empty, all brackets were properly closed; otherwise, it's invalid
    return not stack

# Test cases
print(isValid("()"))       # Output: True
print(isValid("()[]{}"))   # Output: True
print(isValid("(]"))       # Output: False
print(isValid("([)]"))     # Output: False
print(isValid("{[]}"))     # Output: True
