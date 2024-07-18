def reverseParentheses(s: str) -> str:
  chars_list = ['']
  level=0
  answer = ''
  def reverse(s):
    str = ""
    for i in s:
      str = i + str
    return str
    
  for i in range(len(s)):
    if s[i] == '(': 
      chars_list.append('')
      level+=1
    elif s[i] == ')':
      answer = reverse(chars_list.pop())
      if level > 0:
        level-=1
        chars_list[level] = chars_list[level] + answer
    else:
      if level >= 0:
        chars_list[level] = chars_list[level] + s[i]
  return chars_list.pop()
  
reverseParentheses("a(bcdefghijkl(mno)p)q")