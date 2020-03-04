import t

for k,v in t.__dict__.items():
    print("@"*100)
    print("Clave:", k, "Valor", v)
    print("@"*100)