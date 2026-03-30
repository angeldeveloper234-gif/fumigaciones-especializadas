/**
 * ARCHIVO DE RESEÑAS DE GOOGLE (Manual)
 * -----------------------------------------------------
 * INSTRUCCIONES:
 * Para agregar una nueva reseña, simplemente copia y pega el bloque entre llaves {}
 * y reemplaza los datos. 
 * 
 * CAMPOS:
 * - id: Un número o texto único.
 * - author_name: Nombre del cliente.
 * - rating: Número de estrellas (1 al 5).
 * - text: El comentario del cliente.
 * - time: Texto de fecha (ej: "hace 1 semana").
 * - profile_photo_url: Link a la foto.
 * 
 * NOTA: Después de guardar este archivo, debes hacer DEPLOY para que se vean los cambios.
 */

export interface GoogleReview {
    id: string;
    author_name: string;
    author_url: string;
    rating: number;
    text: string;
    profile_photo_url: string;
    time: string;
}

export const GOOGLE_REVIEWS_MOCK: GoogleReview[] = [
    {
        id: "jess-dector",
        author_name: "Jess Dector",
        author_url: "#",
        rating: 5,
        text: "La atención es muy profesional y puntual, en ningún momento me hicieron esperar y siempre se mantuvieron comunicados. En mi caso solicité aplicar la garantía y respondieron rápido y de manera eficiente, incluso vino alguien especialmente a revisar y orientar para buscar mayor efectividad. Estoy totalmente satisfecho, lo recomiendo y los contrataría de nuevo. El costo puede ser elevado en comparación a otros servicios en el mercado, pero creo que lo vale.",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXbJsHQcVV-GQ894pSfjDETlLG70eygiJO9UWAVxN9iSjJebftjBQ=w32-h32-p-rp-mo-ba4-br100",
        time: "Hace 5 años"
    },
    {
        id: "martha-medina",
        author_name: "Martha Alicia Medina McCormick",
        author_url: "#",
        rating: 5,
        text: "Muy profesionales y razonables, excelente servicio al cliente",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocKSLQrcFUMHbXoaNQyu1Vx4zvufMuSqHsCkVpa6AYB4RxvPYQ=w32-h32-p-rp-mo-br100",
        time: "Hace un año"
    },
    {
        id: "jenny-luna",
        author_name: "Jenny Luna",
        author_url: "#",
        rating: 5,
        text: "Súper profesional, me resolvieron mi problema, me gustó mucho como me explicaron los procesos, me quitaron toda mi plaga con garantía",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjX_71YYWnUbT2-LJle8gQ4SWuV6JkUPkQhNE0SLJeZToG6_RtQ=w32-h32-p-rp-mo-br100",
        time: "Hace un año"
    },
    {
        id: "juanpablo-salcedo",
        author_name: "JuanPablo Salcedo",
        author_url: "#",
        rating: 5,
        text: "Es un buen servicio, profesional.",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIyS0lKe3xp7Fz_-rPMghN_4rf-F6hoKoRqFZ1X5Zg0_E6_dg=w32-h32-p-rp-mo-br100",
        time: "Hace 5 años"
    },
    {
        id: "peter-neri",
        author_name: "Peter Neri",
        author_url: "#",
        rating: 5,
        text: "Muy bien servicio, rápido, eficaz y buen precio",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVPTe9lZuk7YMHSIDz_FLzWM1nimFycgu5EuDN38XylOlxjs7_k=w32-h32-p-rp-mo-ba4-br100",
        time: "Hace 3 años"
    },
    {
        id: "oscar-ruiz",
        author_name: "Oscar Ruiz Zea",
        author_url: "#",
        rating: 5,
        text: "Excelente servicio y atención a los detalles, lo recomiendo",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXd-9Uwm_E4SoFpl2--usZTmOhnDYWvBQ9opjo9gxSz6pWHg4Ah=w32-h32-p-rp-mo-ba2-br100",
        time: "Hace 5 años"
    },
    {
        id: "jennifer-l",
        author_name: "Jennifer L.",
        author_url: "#",
        rating: 5,
        text: "Excelente producto, el veneno es buenísimo. El costo en comparación con el resultado la verdad es que vale la pena. Eficaz y rápido. 5 estrellas.",
        profile_photo_url: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
        time: "Reseña de Facebook"
    },
    {
        id: "mariana-g",
        author_name: "Mariana G.",
        author_url: "#",
        rating: 5,
        text: "Es la segunda vez que compro sus productos y me han funcionado muy bien. Te especifican la aplicación y lo que contiene. Lo recomiendo mucho 10/10.",
        profile_photo_url: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png",
        time: "Reseña de Facebook"
    },
    {
        id: "ele-v",
        author_name: "Ele V.",
        author_url: "#",
        rating: 5,
        text: "Recomiendo ampliamente este producto, la verdad elimina desde la primera aplicación.",
        profile_photo_url: "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png",
        time: "Reseña de Facebook"
    }
];
