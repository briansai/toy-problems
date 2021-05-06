class Stack:
  def __init__(self):
    self.data = []

  def add(self, data):
    self.data.append(data)
  
  def remove(self):
    return self.data.pop()
  
  def peek(self):
    return self.data[len(self.data) - 1]

  def is_empty(self):
    if len(self.data) :
      return True
    return False

  def return_data(self):
    return self.data
