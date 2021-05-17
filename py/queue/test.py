import unittest
from main import Queue

class TestMain(unittest.TestCase):
  def test_add(self):
    new_queue = Queue()
    new_queue.add(5)
    new_queue.add(10)
    new_queue.add(20)
    result = new_queue.return_data()
    self.assertEqual(result, [20, 10, 5])
  
  def test_remove(self):
    new_queue = Queue()
    new_queue.add(5)
    new_queue.add(10)
    new_queue.add(20)
    new_queue.remove()
    result = new_queue.return_data()
    self.assertEqual(result, [20, 10])
  
  def test_empty(self):
    new_queue = Queue()
    new_queue.add(60)

    result_not_empty = new_queue.is_empty()
    self.assertTrue(result_not_empty)

    new_queue.remove()

    result_empty = new_queue.is_empty()
    self.assertFalse(result_empty)

unittest.main()