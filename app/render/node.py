class Node:
    def __init__(self,data):
        self.left = None
        self.rigth = None
        self.data = data

    def insert(self,data):
        if data == self.data:
            self.data = data
        elif self.data:
            if data < self.data:
                if self.left is None:
                    self.left = Node(data)
                else:
                    self.left.insert(data)
            elif data > self.data:
                if self.rigth is None:
                    self.rigth = Node(data)
                else:
                    self.rigth.insert(data)
        else:
            self.data = data

    def Print(self):
        if self.left:
            self.left.Print()
        print(self.data)
        if self.rigth:
            self.rigth.Print()
    
    def find(self,lk):
        if lk < self.data:
            if self.left is None:
                return "{} Not Found".format(lk)
            return self.left.find(lk)
        elif lk > self.data:
            if self.rigth is None:
                return "{} Not Found".format(lk)
            return self.rigth.find(lk)
        else:
            print(f"{lk} is Founxd")


def inOrder(root,link):
    if root:
        inOrder(root.left,link)
        link.append(root.data)
        inOrder(root.rigth,link)


def preOrder(root,link):
    if root:
        link.append(root.data)
        preOrder(root.left,link)
        preOrder(root.rigth,link)


def postOrder(root,link):
    if root:
        postOrder(root.left,link)
        postOrder(root.rigth,link)
        link.append(root.data)


tree = Node(3)
tree.insert(4)
tree.insert(2)
tree.insert(2)
tree.insert(2)
tree.insert(8)

