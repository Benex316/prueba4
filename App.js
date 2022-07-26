import { useState } from "react";
import './App.css';


function ListadoResultados(ye) {

  return (
    <table border="1" id="tabla"><thread><tr><th>CODIGO</th><th>ARTICULO</th><th>DESCRIPCION</th><th>PRECIO</th><th>CANTIDAD</th><th>TOTAL</th><th>TOTAL DESCUENTO</th></tr></thread><tbody id="tcuerpo">{
      ye.resultados.map((elemento) =>
        <tr key={elemento.codigo}><td>{elemento.codigo}</td><td>{elemento.articulo}</td><td>{elemento.descripcion}</td><td>{elemento.precio}</td><td>{elemento.cantidad}</td><td>{elemento.total}</td><td>{elemento.totalDescuento}</td></tr>
      )}
    </tbody>
    </table>
  );
}
function App() {
  const [yolist, setYolist] = useState([])
  return (
    <div>
      <header id="head">
        <h1>Looks Gud </h1> <img src="/food.jpg" id="foodC" /> <img src="/Arona.jpg" id="arona" />  <img src="/hina.jpg" id="hina" />

      </header>

      <container>
        <br />
        <form onSubmit={list}>
          <label htmlFor="codigo">Codigo:</label>
          <input type="text" name="codigo" required />
          <label htmlFor="articulo">Articulo:</label>
          <select name="articulo" required>
            <option value="">----</option>
            <option value="zapatilla">zapatilla</option>
            <option value="sandalias">sandalias</option>
            <option value="zapatos">zapatos</option>
          </select>
          <label htmlFor="descripcion">Descripcion:</label>
          <select name="descripcion" required>
            <option value="">----</option>
            <option value="Negro">Negro</option>
            <option value="Azul">Azul</option>
            <option value="Gris">Gris</option>
          </select>
          <label htmlFor="precio">Precio:</label>
          <select name="precio" required>
            <option value="">----</option>
            <option value="50000">50000</option>
          </select>
          <label htmlFor="cantidad">Cantidad:</label>
          <input type="number" name="cantidad" required />
          <input type="submit" value="Crear lista" />

        </form>
        <br />

        <ListadoResultados resultados={yolist} />


      </container>
      <br /><br />
      <footer><iframe width="339" height="603" src="https://www.youtube.com/embed/nWjFJyGau9Y" title="【ブルアカ】これは夢…？" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></footer>
    </div>


  );

  function list(event) {
    event.preventDefault();
    const codigo = parseInt(event.target.codigo.value)
    const articulo = (event.target.articulo.value)
    const descripcion = (event.target.descripcion.value)
    const precio = parseInt(event.target.precio.value)
    const cantidad = parseInt(event.target.cantidad.value)
    const total = parseInt(precio * cantidad)
    const descuento = parseFloat(total * 0.1)
    const totalDescuento = parseInt(total - descuento)

    const nuevo = {
      codigo, articulo, descripcion, precio, cantidad, total, totalDescuento
    }
    setYolist([...yolist, nuevo])
    event.target.codigo.value = ""
    event.target.articulo.value = ""
    event.target.descripcion.value = ""
    event.target.precio.value = ""
    event.target.cantidad.value = ""
    total = total
    totalDescuento = totalDescuento
  }


}
export default App;

