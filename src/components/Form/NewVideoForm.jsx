import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DataContext from '../../context/context';
import { showSuccessAlert, showErrorAlert } from '../../utils/alerts';

const options = ['Front End', 'Back End', 'Innovación y Gestión'];

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

const NewVideoForm = () => {
    const { addVideo } = useContext(DataContext);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            addVideo(values);
            showSuccessAlert('Video agregado exitosamente.');
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);
            resetForm();
        } catch (error) {
            showErrorAlert('Error al agregar el video.');
        }
    };

    const fieldClass = "w-full rounded-lg border-2 border-brand-grey bg-brand-dark px-4 py-3 text-white transition-colors focus:border-brand-blue focus:outline-none";
    const labelClass = "mb-2 block text-sm font-bold text-white uppercase";
    const errorClass = "mt-1 text-xs text-red-500 font-medium";

    return (
        <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-black text-white uppercase md:text-5xl">NUEVO VIDEO</h2>
                <p className="mt-4 text-white/60">COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            </div>

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
                {({ isSubmitting, handleReset }) => (
                    <Form className="space-y-8 rounded-2xl border-2 border-brand-grey bg-brand-grey/30 p-8 shadow-2xl backdrop-blur-sm md:p-12">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="col-span-1">
                                <label className={labelClass}>Título</label>
                                <Field type="text" name="titulo" placeholder="ingrese el título" className={fieldClass} />
                                <ErrorMessage name="titulo" component="div" className={errorClass} />
                            </div>

                            <div className="col-span-1">
                                <label className={labelClass}>Categoría</label>
                                <Field as="select" name="categoria" className={fieldClass}>
                                    <option value="" className="bg-brand-dark">seleccione una categoría</option>
                                    {options.map((option) => (
                                        <option key={option} value={option} className="bg-brand-dark">
                                            {option}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="categoria" component="div" className={errorClass} />
                            </div>

                            <div className="col-span-1">
                                <label className={labelClass}>Imagen</label>
                                <Field type="text" name="imagen" placeholder="el enlace debe ser una URL" className={fieldClass} />
                                <ErrorMessage name="imagen" component="div" className={errorClass} />
                            </div>

                            <div className="col-span-1">
                                <label className={labelClass}>Video</label>
                                <Field type="text" name="video" placeholder="ingrese el enlace del video" className={fieldClass} />
                                <ErrorMessage name="video" component="div" className={errorClass} />
                            </div>

                            <div className="col-span-full">
                                <label className={labelClass}>Descripción</label>
                                <Field as="textarea" name="descripcion" placeholder="¿de qué se trata este vídeo?" rows="5" className={`${fieldClass} resize-none`} />
                                <ErrorMessage name="descripcion" component="div" className={errorClass} />
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary flex-1 py-4 text-xl uppercase disabled:opacity-50"
                            >
                                {isSubmitting ? 'Guardando...' : 'Guardar'}
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="btn-outline flex-1 py-4 text-xl uppercase"
                            >
                                Limpiar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default NewVideoForm;
