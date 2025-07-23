# File Handling Methods

#Read - r
#Write - w -> this will overwrite the file if it exists
#Append - a -> this will add content to the end of the file

# This will read the file and print its content
with open("file1.txt", "r") as file:
    print(file.read())
    
print("\n------------------------------------------------")
with open("file1.txt", "r") as file1:
    print(file1.readline()) # Reads/prints the first line
    print(file1.readlines()) # Reads/prints all the lines in array

print("\n------------------------------------------------")
# This will write to the file, overwriting any existing content

with open("file1.txt", "w") as file2:
    print(file2.write("This file is overwritten with new content\n")) # this will print the number of characters written in terminal as output and the file is updated with the new content
    
print("\n------------------------------------------------")
# This will append to the file, adding content to the end
with open("file1.txt", "a") as file3:
    print(file3.write("Hello world2 -----------,\nHow are you? Seems like you are quite busy handling your environment!\nYehhh Yehh! People are fucked up the environment but the latest EV development are reducing the pollution but they are still cutting trees. \nYehh! There will be some new innovations in future that can help you to maintain the ozone layer.")) # this will print the number of characters written in terminal as output and the file is updated with the new content
    
    
    
    # to delete the file we can use external python module/library named os 
    import os
    os.remove("file.txt") # this will delete the file if it exists
    # OR
    # On Windows, use 'del' instead of 'rm'
    os.system("del file2.txt") # this will delete the file if it exists, this is a system command that can be used in terminal as well