// services/libroService.js

function validarDatos(body) {
    const { titulo, autor, anio_publicacion, genero } = body;

    if (!titulo || titulo.trim() === '') {
        return { valido: false, error: 'El título es obligatorio' };
    }

    if (!autor || autor.trim() === '') {
        return { valido: false, error: 'El autor es obligatorio' };
    }

    if (!anio_publicacion) {
        return { valido: false, error: 'El año es obligatorio' };
    }

    if (!genero || genero.trim() === '') {
        return { valido: false, error: 'El género es obligatorio' };
    }

    return { valido: true };
}

function prepararLibro(body) {
    return {
        titulo: body.titulo.trim(),
        autor: body.autor.trim(),
        anio_publicacion: parseInt(body.anio_publicacion),
        genero: body.genero.trim().toLowerCase(),
        disponible: body.disponible ?? true
    };
}

module.exports = {
    validarDatos,
    prepararLibro
};