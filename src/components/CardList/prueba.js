// Componente con conexión a Redux
function Contador() {
    const contador = useSelector((state) => state.contador);
    const dispatch = useDispatch();
  
    const incrementarContador = () => {
      // Enviar una acción para incrementar el contador
      dispatch({ type: "INCREMENTAR_CONTADOR" });
    };
  
    return (
      <div>
        <p>Contador: {contador}</p>
        <button onClick={incrementarContador}>Incrementar</button>
      </div>
    );
  }
  