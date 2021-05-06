import unittest
from main import Stack

class TestMain(unittest.TestCase):
  def test_add(self):
    new_stack = Stack()
    new_stack.add(5)
    new_stack.add(10)
    new_stack.add(20)
    result = new_stack.return_data()
    self.assertEqual(result, [5, 10, 20])
  
  def test_remove(self):
    new_stack = Stack()
    new_stack.add(5)
    new_stack.add(10)
    new_stack.add(20)
    new_stack.remove()
    result = new_stack.return_data()
    self.assertEqual(result, [5, 10])

  def test_peek(self):
    new_stack = Stack()
    new_stack.add(5)
    new_stack.add(10)
    self.assertIs(new_stack.peek(), 10)
    
    new_stack.add(20)
    self.assertIs(new_stack.peek(), 20)
  
  def test_empty(self):
    new_stack = Stack()
    new_stack.add(60)

    result_not_empty = new_stack.is_empty()
    self.assertTrue(result_not_empty)

    new_stack.remove()

    result_empty = new_stack.is_empty()
    self.assertFalse(result_empty)



unittest.main()