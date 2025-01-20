import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import DataContext from '../context/context';
import { showSuccessAlert, showErrorAlert } from '../utils/alerts';
import { useNavigate } from 'react-router-dom';

const options = ['Front End', 'Back End', 'Innovación y Gestión'];

// Validación con Yup
const validationSchema = Yup.object().shape({
  titulo: Yup.string()
    .required('El título es obligatorio.')
    .max(100, 'El título no puede tener más de 100 caracteres.'),
  categoria: Yup.string()
    .required('Debe seleccionar una categoría.')
    .oneOf(options, 'Categoría inválida.'),
  imagen: Yup.string()
    .required('El enlace de la imagen es obligatorio.')
    .url('Debe ser un enlace válido.')
    .max(1000, 'Exceso de caracteres'),
  video: Yup.string()
    .required('El enlace del video es obligatorio.')
    .url('Debe ser un enlace válido.')
    .max(1000, 'Exceso de caracteres')
    .test('youtube-url', 'El enlace debe ser de YouTube.', (value) => {
      return value && value.includes('youtube.com');
    }),
  descripcion: Yup.string()
    .required('La descripción es obligatoria.')
    .max(500, 'La descripción no puede tener más de 500 caracteres.'),
});

const NewVideo = () => {
  const { addVideo } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      addVideo(values);
      showSuccessAlert('Video agregado exitosamente.');
      navigate('/');
      resetForm();
    } catch (error) {
      showErrorAlert('Error al agregar el video.');
    }
  };

  return (
    <div className="NewVideo">
      <h2>Agregar nuevo video</h2>
      <Formik
        initialValues={{
          titulo: '',
          categoria: '',
          imagen: '',
          video: '',
          descripcion: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label>Título:</label>
              <Field type="text" name="titulo" />
              <ErrorMessage name="titulo" component="div" />
            </div>
            <div className="form-group">
              <label>Categoría:</label>
              <Field as="select" name="categoria">
                <option value="">Seleccione una categoría</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="categoria" component="div" />
            </div>
            <div className="form-group">
              <label>Imagen:</label>
              <Field type="text" name="imagen" />
              <ErrorMessage name="imagen" component="div" />
            </div>
            <div className="form-group">
              <label>Video:</label>
              <Field type="text" name="video" />
              <ErrorMessage name="video" component="div" />
            </div>
            <div className="form-group">
              <label>Descripción:</label>
              <Field as="textarea" name="descripcion" />
              <ErrorMessage name="descripcion" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Agregar video
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewVideo;