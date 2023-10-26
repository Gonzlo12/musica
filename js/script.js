const canciones = [
    {
        title: "Apostemos que me Caso",
        artist: "Grupo 5",
        source: "audio/Apostemos Que Me Caso.mp3",
        cover: 'img/imagen.jpg',
    },
    {
        title: "La culebretica",
        artist: "audio/Grupo 5",
        source: "audio/Grupo 5 - La Culebritica (Noche de Oro).mp3",
        cover: 'img/culebritica.jpg',
    },
    {
        title: "Mix Costeñita",
        artist: "Cesar Morales",
        source: "audio/Grupo 5 - Mix Costeñita (Noche De Oro).mp3",
        cover: 'img/Mix costeñita.jpg',
    },
    {
        title: "Ojitos Hechiceros",
        artist: "Grupo Nectar",
        source: "audio/GRUPO NECTAR OJITOS HECHICEROS.mp3",
        cover: 'img/ojitos Hechi.jpg',
    },
    {
        title: "Primer Beso",
        artist: "Grupo Nectar",
        source: "audio/El Primer Beso.mp3",
        cover: 'img/primerbeso.jpg',
    },
    {
        title: "Aquel Arbolito",
        artist: "Grupo Nectar",
        source: "audio/Grupo néctar - Internacional - El Arbolito.mp3",
        cover: 'img/aquelarbolito.jpg',
    },

];

const main_audio = document.getElementById("main-audio");
const play_list = document.getElementById("play-list");
const song_title = document.getElementById("song-title");
const search_input = document.getElementById("search");

canciones.forEach((e, index) => {
    play_list.insertAdjacentHTML('beforeend', `
        <li id="${index}">
            <img src="${e.cover}" style='width:50px'>
            ${e.title}
        </li>
    `);

    const temp = document.getElementById(String(index));
    temp.addEventListener('click', () => {
        play_audio(e);
    });
});

const play_audio = (cancion) => {
    main_audio.src = cancion.source;
    main_audio.play();
    song_title.innerText = `${cancion.title} - ${cancion.artist}`;
};

search_input.addEventListener('input', () => {
    const searchTerm = search_input.value.toLowerCase();
    const filteredSongs = canciones.filter(cancion => cancion.title.toLowerCase().includes(searchTerm));
    play_list.innerHTML = '';

    filteredSongs.forEach((cancion, index) => {
        play_list.insertAdjacentHTML('beforeend', `
            <li id="${index}">
                <img src="${cancion.cover}" style='width:50px'>
                ${cancion.title}
            </li>
        `);

        const temp = document.getElementById(String(index));
        temp.addEventListener('click', () => {
            play_audio(cancion);
        });
    });
});