import React from 'react'
//import { Modal, ModalBody, ModalHeader,FormGroup, ModalFooter } from 'reactstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const data = [
  { sku: 1452, nombre: "Naruto", descripcion: "Naruto", unidad:"Carrera 3 # 18- 45" },
  { sku: 2654, nombre: "Goku", descripcion: "Dragon Ball", unidad:"Carrera 7 # 84- 72" },
  { sku: 3547, nombre: "Kenshin Himura", descripcion: "Rurouni Kenshin", unidad:"Calle 4 No. 5 – 10" },
  { sku: 4548, nombre: "Monkey D. Luffy", descripcion: "One Piece", unidad:"Calle 11 No. 4 - 14" },
  { sku: 5455, nombre: "Edward Elric", descripcion: "Fullmetal Alchemist", unidad:"Calle 48b sur No. 21-13"},
  { sku: 6545, nombre: "Seto Kaiba", descripcion: "Yu-Gi-Oh!", unidad:"Calle 11 No. 4-21 / 93" },
];

class Products extends React.Component {
  //creacion de estado
  state={
    data:data,
    modalInsertar: false,
    form: {
      sku: "",
      nombre: "",
      descripcion: "",
      unidad: "",
    }
  }

  mostrarModalActualizar = (elemento) => {
    this.setState({
      form: elemento,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };
  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (elemento) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (elemento.sku === registro.sku) {
        arreglo[contador].nombre = elemento.nombre;
        arreglo[contador].descripcion = elemento.descripcion;
        arreglo[contador].unidad = elemento.unidad;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

    eliminar = (elemento) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+elemento.sku);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (elemento.sku === registro.sku) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.sku=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };


  render() {
    return (
    <div>

        <Modal show={this.state.modalInsertar}>
          <Modal.Header>
           <div><h3>Insertar Productos</h3></div>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <label>
                Sku: 
              </label>
              <input
                className="form-control"
                name="sku"
                type="number"
                defaultValue
                onChange={this.handleChange}
              />
            </Form.Group>
            
            <Form.Group>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </Form.Group>
            
            <Form.Group>
              <label>
                Descripción: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <label>
                Unidad de medida: 
              </label>
              <input
                className="form-control"
                name="unidad"
                type="text"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.modalActualizar}>
          <Modal.Header>
           <div><h3>Editar Productos</h3></div>
          </Modal.Header>

          <Modal.Body>
            <Form.Group>
              <label>
               Sku:
              </label>
            
              <input
                className="form-control"
                type="number"
                value={this.state.form.sku}
              />
            </Form.Group>
            
            <Form.Group>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </Form.Group>
            
            <Form.Group>
              <label>
                Descripción: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.descripcion}
              />
            </Form.Group>
            <Form.Group>
              <label>
                Unidad de medida: 
              </label>
              <input
                className="form-control"
                name="unidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.unidad}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              variant="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>



      <div className='container-flunit'>
        <div className='row'>
          <main className='col-md-10 ml-sm-auto col-lg-10 pt-3 px-4s'>
            <div className='px-5 d-flex justify-content-between'>
              <h1>Productos</h1>
              <div>
                <Button variant="success" onClick={()=>this.mostrarModalInsertar()}>Agregar</Button>
              </div>
            </div>
            {/* table-responsive */}
            <table className="container table table-hover">
              <thead>
                <tr className="table-success">
                  <th scope="col">Sku</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Unidad de medida</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((elemento) =>(
                  <tr>
                    <th scope="row">{elemento.sku}</th>
                    <td>{elemento.nombre}</td>
                    <td>{elemento.descripcion}</td>
                    <td>{elemento.unidad}</td>
                    <td><Button variant="primary" onClick={()=> this.mostrarModalActualizar(elemento)}>Editar</Button> <Button variant="danger" onClick={()=> this.eliminar(elemento)}>Eliminar</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
      )
  }
}

export default Products
