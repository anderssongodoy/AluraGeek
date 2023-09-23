document
  .getElementById("agregarProducto")
  .addEventListener("click", async () => {
    const imageURL = document.getElementById("imageURL").value;
    const categoria = document.getElementById("categoria").value;
    const nombreProducto = document.getElementById("nombreProducto").value;
    const precioProducto = document.getElementById("precioProducto").value;
    const descripcionProducto = document.getElementById(
      "descripcionProducto"
    ).value;

    const nuevoProducto = {
      img: imageURL,
      name: nombreProducto,
      price: precioProducto,
      description: descripcionProducto,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/${categoria}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoProducto),
        }
      );

      if (response.ok) {
        alert("Producto agregado con éxito");
        // Puedes realizar acciones adicionales después de agregar el producto
      } else {
        alert("Error al agregar el producto");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  });
