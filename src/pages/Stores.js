import React from 'react'
//import { Modal, ModalBody, ModalHeader,FormGroup, ModalFooter } from 'reactstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const data = [
  { manager: "Naruto", nombre: "Naruto", Servicios: "Naruto", direccion:"Carrera 3 # 18- 45" },
  { manager: "Goku", nombre: "Goku", Servicios: "Dragon Ball", direccion:"Carrera 7 # 84- 72" },
  { manager: "Kenshin Himura", nombre: "Kenshin Himura", Servicios: "Rurouni Kenshin", direccion:"Calle 4 No. 5 – 10" },
  { manager: "Monkey D. Luffy", nombre: "Monkey D. Luffy", Servicios: "One Piece", direccion:"Calle 11 No. 4 - 14" },
  { manager: "Edward Elric", nombre: "Edward Elric", Servicios: "Fullmetal Alchemist", direccion:"Calle 48b sur No. 21-13"},
  { manager: "Seto Kaiba", nombre: "Seto Kaiba", Servicios: "Yu-Gi-Oh!", direccion:"Calle 11 No. 4-21 / 93" },
];

class Stores extends React.Component {
  //creacion de estado
  state={
    data:data,
    modalInsertar: false,
    form: {
      manager: "",
      nombre: "",
      Servicios: "",
      direccion: "",
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
      if (elemento.manager === registro.manager) {
        arreglo[contador].nombre = elemento.nombre;
        arreglo[contador].Servicios = elemento.Servicios;
        arreglo[contador].direccion = elemento.direccion;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

    eliminar = (elemento) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+elemento.manager);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (elemento.manager === registro.manager) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.manager=this.state.data.length+1;
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
                Manager: 
              </label>
              <input
                className="form-control"
                name="manager"
                type="text"
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
                Servicios extras: 
              </label>
              <input
                className="form-control"
                name="Servicios"
                type="text"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <label>
                Dirección: 
              </label>
              <input
                className="form-control"
                name="direccion"
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
               Manager:
              </label>
            
              <input
                className="form-control"
                type="text"
                value={this.state.form.manager}
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
                Servicios extras: 
              </label>
              <input
                className="form-control"
                name="Servicios"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Servicios}
              />
            </Form.Group>
            <Form.Group>
              <label>
                Dirección: 
              </label>
              <input
                className="form-control"
                name="direccion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.direccion}
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
              <h1>Tiendas</h1>
              <div>
                <Button variant="success" onClick={()=>this.mostrarModalInsertar()}>Agregar</Button>
              </div>
            </div>
            {/* table-responsive */}
            <table className="container table table-hover">
              <thead>
                <tr className="table-success">
                  <th scope="col">Manager</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Servicios extras</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((elemento) =>(
                  <tr>
                    <th scope="row">{elemento.manager}</th>
                    <td>{elemento.nombre}</td>
                    <td>{elemento.Servicios}</td>
                    <td>{elemento.direccion}</td>
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

export default Stores
