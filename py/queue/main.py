class Queue:
  def __init__(self):
    self.data = []
  
  def add(self, data):
    self.data.insert(0, data)

  def is_empty(self):
    if len(self.data):
      return True
    return False

  def remove(self):
    return self.data.pop()
  
  def return_data(self):
    return self.data

