print("---------Variable method----------- \n")
file = open("file1.txt", "r")
print(file.read())

print("\n ------------File Handling with 'with' statement----------- \n")
with open("file1.txt", "r") as file1:
    print(file1.read())