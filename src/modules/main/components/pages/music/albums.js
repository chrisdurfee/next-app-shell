/**
 * @type {array} ALBUMS
 * @constant
 */
const ALBUMS = [
    { src: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Official_Album_Cover_of_%22The_Downward_Spiral%22_by_Nine_Inch_Nails.png', title: 'The Downward Spiral', artist: 'Nine Inch Nails' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Nine_Inch_Nails_-_The_Fragile.png', title: 'The Fragile', artist: 'Nine Inch Nails' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/f/f8/A.perfect.circle.mer.de.noms.jpg', title: 'Mer de Noms', artist: 'A Perfect Circle' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Warpaint_-_Warpaint_album.jpg', title: 'Warpaint', artist: 'Warpaint' },
    //{ src: 'https://upload.wikimedia.org/wikipedia/en/4/41/A_Flourish_and_a_Spoil.jpg', title: 'A Flourish and a Spoil', artist: 'The Districts' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/6/60/Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png', title: 'A Rush of Blood to the Head', artist: 'Coldplay' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png', title: 'Parachutes', artist: 'Coldplay' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png', title: 'OK Computer', artist: 'Radiohead' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png', title: 'Currents', artist: 'Tame Impala' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/8/81/Arcade_Fire_-_The_Suburbs.jpg', title: 'The Suburbs', artist: 'Arcade Fire' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/1/1e/TheBoyWhoDiedWolf.jpg', title: 'The Boy Who Died Wolf', artist: 'Highly Suspect' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/7/70/MIA_Matangi_Cover.png', title: 'Matangi', artist: 'M.I.A.' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/f/f9/London_Grammar_-_If_You_Wait.png', title: 'If You Wait', artist: 'London Grammar' },
    //{ src: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg', title: 'Nevermind', artist: 'Nirvana' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/8/80/TheOffspringSmashalbumcover.jpg', title: 'Smash', artist: 'The Offspring' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/6/63/Tool_-_Lateralus.jpg', title: 'Lateralus', artist: 'Tool' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Aenima.jpg', title: 'Ænima', artist: 'Tool' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg', title: 'Hybrid Theory', artist: 'Linkin Park' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/2/29/BornToDieAlbumCover.png', title: 'Born to Die', artist: 'Lana Del Rey' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg', title: 'How to Be a Human Being', artist: 'Glass Animals' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png', title: 'The Slow Rush', artist: 'Tame Impala' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/5/52/Bangerz.png', title: 'Bangerz', artist: 'Miley Cyrus' },
    { src: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Madison_Beer_Life_Support.png', title: 'Life Support', artist: 'Madison Beer' },
];

/**
 * This will get a random album array from the list.
 *
 * @param {number} count
 * @returns {array}
 */
export const getRandomAlbums = (count) => {
    return ALBUMS
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
};