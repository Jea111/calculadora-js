import tkinter as tk

app =tk.Tk()
palabra = tk.StringVar(app)
entrada = tk.StringVar(app)
app.configure(background="black")
app.geometry("600x300")

tk.Label(
    app,
    text="PREGUNTA LO QUE SEA",
    textvariable=palabra,
    fg="black",
    bg="white",
).pack()
tk.Entry(
    app,
    text="PREGUNTA LO QUE SEA",
    fg="black",
    bg="white",
    textvariable=entrada
).pack()

def cambiarPalabra():
 palabra.set("welcome "+ entrada.get()) #variable.set() cambiar el dato del label
 
 
tk.Button(
    app,
    font="courier",
    text="clik me!",
    bg="white",
    fg="black",
    command=cambiarPalabra, #lambdapara hacer la function
).pack()

app.mainloop()