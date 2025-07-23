a = 60
b = 13


c = a&b
print("result of AND: ", c, " Binary: ", bin(c)) #bin method used for representing binary number format 

c= a|b
print("result of OR: ", c, " Binary: ",bin(c))

c = a^b
print("result of XOR: ", c, " Binary: ", bin(c))

c = ~a
print("result of COMPLEMENT: ", c, " Binary:", bin(c))

c = a>>b
print("result of RIGHT SHIFT: ", c, " Binary: ", bin(c))

c = a<<b
print("result of LEFT SHIFT: ", c, " Binary: ", bin(c))