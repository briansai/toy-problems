def sort_stack(numbers):
  tmpStack = []

  while (len(numbers)):
    current = numbers.pop()
    tmpStackLast = len(tmpStack) and tmpStack[len(tmpStack) - 1]

    while (len(tmpStack) and tmpStackLast > current):
      numbers.append(tmpStack.pop())

    tmpStack.append(current)

  return tmpStack
