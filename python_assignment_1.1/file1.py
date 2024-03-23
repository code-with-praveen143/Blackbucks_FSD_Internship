class ListManipulator:
    def __init__(self):
        self.internal_list = []

    def add_elements(self, elements):
        self.internal_list.extend(elements)

    def remove_duplicates(self):
        self.internal_list = list(set(self.internal_list))

    def reverse_list(self):
        self.internal_list.reverse()

    def sort_list(self):
        self.internal_list.sort()

    def get_unique_elements(self):
        return list(set(self.internal_list))

    def remove_element(self, element):
        if element in self.internal_list:
            self.internal_list.remove(element)

    def get_list(self):
        return self.internal_list

# Example usage
lm = ListManipulator()
lm.add_elements([1, 2, 3, 2, 4, 5, 1])
print("Initial list:", lm.get_list())

lm.remove_duplicates()
print("After removing duplicates:", lm.get_list())

lm.reverse_list()
print("After reversing:", lm.get_list())

lm.sort_list()
print("After sorting:", lm.get_list())

print("Unique elements:", lm.get_unique_elements())

lm.remove_element(2)
print("After removing element 2:", lm.get_list())
