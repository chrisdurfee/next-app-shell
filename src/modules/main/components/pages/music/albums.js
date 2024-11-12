/**
 * @type {array} ALBUMS
 * @constant
 */
const ALBUMS = [
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Official_Album_Cover_of_%22The_Downward_Spiral%22_by_Nine_Inch_Nails.png',
        title: 'The Downward Spiral',
        artist: 'Nine Inch Nails',
        year: 1994,
        duration: '65:02',
        tracks: [
            { title: 'Mr. Self Destruct', duration: '4:30' },
            { title: 'Piggy', duration: '4:24' },
            { title: 'Heresy', duration: '3:54' },
            { title: 'March of the Pigs', duration: '2:58' },
            { title: 'Closer', duration: '6:13' },
            { title: 'Ruiner', duration: '4:58' },
            { title: 'The Becoming', duration: '5:31' },
            { title: 'I Do Not Want This', duration: '5:41' },
            { title: 'Big Man with a Gun', duration: '1:36' },
            { title: 'A Warm Place', duration: '3:22' },
            { title: 'Eraser', duration: '4:53' },
            { title: 'Reptile', duration: '6:51' },
            { title: 'The Downward Spiral', duration: '3:57' },
            { title: 'Hurt', duration: '6:13' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Nine_Inch_Nails_-_The_Fragile.png',
        title: 'The Fragile',
        artist: 'Nine Inch Nails',
        year: 1999,
        duration: '103:39',
        tracks: [
            { title: 'Somewhat Damaged', duration: '4:31' },
            { title: 'The Day the World Went Away', duration: '4:33' },
            { title: 'The Frail', duration: '1:54' },
            { title: 'The Wretched', duration: '5:25' },
            { title: 'We\'re in This Together', duration: '7:16' },
            { title: 'The Fragile', duration: '4:35' },
            { title: 'Just Like You Imagined', duration: '3:49' },
            { title: 'Even Deeper', duration: '5:47' },
            { title: 'Pilgrimage', duration: '3:31' },
            { title: 'No, You Don\'t', duration: '3:35' },
            { title: 'La Mer', duration: '4:37' },
            { title: 'The Great Below', duration: '5:17' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/f/f8/A.perfect.circle.mer.de.noms.jpg',
        title: 'Mer de Noms',
        artist: 'A Perfect Circle',
        year: 2000,
        duration: '44:11',
        tracks: [
            { title: 'The Hollow', duration: '2:58' },
            { title: 'Magdalena', duration: '4:06' },
            { title: 'Rose', duration: '3:26' },
            { title: 'Judith', duration: '4:07' },
            { title: 'Orestes', duration: '4:48' },
            { title: '3 Libras', duration: '3:39' },
            { title: 'Sleeping Beauty', duration: '4:10' },
            { title: 'Thomas', duration: '3:29' },
            { title: 'Renholdër', duration: '2:24' },
            { title: 'Thinking of You', duration: '4:34' },
            { title: 'Breña', duration: '4:24' },
            { title: 'Over', duration: '2:22' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Warpaint_-_Warpaint_album.jpg',
        title: 'Warpaint',
        artist: 'Warpaint',
        year: 2014,
        duration: '51:04',
        tracks: [
            { title: 'Intro', duration: '4:07' },
            { title: 'Keep It Healthy', duration: '4:01' },
            { title: 'Love Is to Die', duration: '4:51' },
            { title: 'Hi', duration: '5:11' },
            { title: 'Biggy', duration: '5:47' },
            { title: 'Teese', duration: '4:46' },
            { title: 'Go In', duration: '5:28' },
            { title: 'Feeling Alright', duration: '5:03' },
            { title: 'CC', duration: '4:28' },
            { title: 'Drive', duration: '4:13' },
            { title: 'Son', duration: '3:16' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/6/60/Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png',
        title: 'A Rush of Blood to the Head',
        artist: 'Coldplay',
        year: 2002,
        duration: '54:08',
        tracks: [
            { title: 'Politik', duration: '5:18' },
            { title: 'In My Place', duration: '3:48' },
            { title: 'God Put a Smile upon Your Face', duration: '4:57' },
            { title: 'The Scientist', duration: '5:09' },
            { title: 'Clocks', duration: '5:07' },
            { title: 'Daylight', duration: '5:27' },
            { title: 'Green Eyes', duration: '3:43' },
            { title: 'Warning Sign', duration: '5:31' },
            { title: 'A Whisper', duration: '3:58' },
            { title: 'A Rush of Blood to the Head', duration: '5:51' },
            { title: 'Amsterdam', duration: '5:19' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png',
        title: 'Parachutes',
        artist: 'Coldplay',
        year: 2000,
        duration: '41:42',
        tracks: [
            { title: 'Don\'t Panic', duration: '2:17' },
            { title: 'Shiver', duration: '5:00' },
            { title: 'Spies', duration: '5:18' },
            { title: 'Sparks', duration: '3:47' },
            { title: 'Yellow', duration: '4:29' },
            { title: 'Trouble', duration: '4:30' },
            { title: 'Parachutes', duration: '0:46' },
            { title: 'High Speed', duration: '4:14' },
            { title: 'We Never Change', duration: '4:09' },
            { title: 'Everything\'s Not Lost', duration: '7:15' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png',
        title: 'OK Computer',
        artist: 'Radiohead',
        year: 1997,
        duration: '53:21',
        tracks: [
            { title: 'Airbag', duration: '4:44' },
            { title: 'Paranoid Android', duration: '6:23' },
            { title: 'Subterranean Homesick Alien', duration: '4:27' },
            { title: 'Exit Music (For a Film)', duration: '4:24' },
            { title: 'Let Down', duration: '4:59' },
            { title: 'Karma Police', duration: '4:21' },
            { title: 'Fitter Happier', duration: '1:57' },
            { title: 'Electioneering', duration: '3:50' },
            { title: 'Climbing Up the Walls', duration: '4:45' },
            { title: 'No Surprises', duration: '3:48' },
            { title: 'Lucky', duration: '4:19' },
            { title: 'The Tourist', duration: '5:24' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png',
        title: 'Currents',
        artist: 'Tame Impala',
        year: 2015,
        duration: '51:11',
        tracks: [
            { title: 'Let It Happen', duration: '7:46' },
            { title: 'Nangs', duration: '1:48' },
            { title: 'The Moment', duration: '4:15' },
            { title: 'Yes I\'m Changing', duration: '4:30' },
            { title: 'Eventually', duration: '5:19' },
            { title: 'Gossip', duration: '0:55' },
            { title: 'The Less I Know the Better', duration: '3:36' },
            { title: 'Past Life', duration: '3:47' },
            { title: 'Disciples', duration: '1:48' },
            { title: 'Cause I\'m a Man', duration: '4:01' },
            { title: 'Reality in Motion', duration: '4:12' },
            { title: 'Love/Paranoia', duration: '3:06' },
            { title: 'New Person, Same Old Mistakes', duration: '6:03' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/8/81/Arcade_Fire_-_The_Suburbs.jpg',
        title: 'The Suburbs',
        artist: 'Arcade Fire',
        year: 2010,
        duration: '63:53',
        tracks: [
            { title: 'The Suburbs', duration: '5:15' },
            { title: 'Ready to Start', duration: '4:15' },
            { title: 'Modern Man', duration: '4:39' },
            { title: 'Rococo', duration: '3:57' },
            { title: 'Empty Room', duration: '2:51' },
            { title: 'City with No Children', duration: '3:11' },
            { title: 'Half Light I', duration: '4:13' },
            { title: 'Half Light II (No Celebration)', duration: '4:25' },
            { title: 'Suburban War', duration: '4:45' },
            { title: 'Month of May', duration: '3:50' },
            { title: 'Wasted Hours', duration: '3:20' },
            { title: 'Deep Blue', duration: '4:28' },
            { title: 'We Used to Wait', duration: '5:01' },
            { title: 'Sprawl I (Flatland)', duration: '2:54' },
            { title: 'Sprawl II (Mountains Beyond Mountains)', duration: '5:25' },
            { title: 'The Suburbs (Continued)', duration: '1:27' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/1/1e/TheBoyWhoDiedWolf.jpg',
        title: 'The Boy Who Died Wolf',
        artist: 'Highly Suspect',
        year: 2016,
        duration: '43:18',
        tracks: [
            { title: 'My Name Is Human', duration: '4:18' },
            { title: 'Look Alive, Stay Alive', duration: '4:20' },
            { title: 'Little One', duration: '4:04' },
            { title: 'For Billy', duration: '4:09' },
            { title: 'Serotonia', duration: '6:03' },
            { title: 'Postres', duration: '5:25' },
            { title: 'Send Me an Angel', duration: '4:32' },
            { title: 'Viper Strike', duration: '3:30' },
            { title: 'F.W.Y.T.', duration: '3:44' },
            { title: 'Wolf', duration: '4:03' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/7/70/MIA_Matangi_Cover.png',
        title: 'Matangi',
        artist: 'M.I.A.',
        year: 2013,
        duration: '58:15',
        tracks: [
            { title: 'Karmageddon', duration: '2:34' },
            { title: 'MATANGI', duration: '5:10' },
            { title: 'Only 1 U', duration: '3:13' },
            { title: 'Warriors', duration: '3:34' },
            { title: 'Come Walk with Me', duration: '4:43' },
            { title: 'atTENTion', duration: '3:34' },
            { title: 'Exodus', duration: '5:08' },
            { title: 'Bad Girls', duration: '3:47' },
            { title: 'Boom Skit', duration: '1:14' },
            { title: 'Double Bubble Trouble', duration: '2:59' },
            { title: 'Y.A.L.A.', duration: '4:23' },
            { title: 'Bring the Noize', duration: '4:35' },
            { title: 'Lights', duration: '4:39' },
            { title: 'Know It Ain\'t Right', duration: '3:46' },
            { title: 'Sexodus', duration: '5:00' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/f/f9/London_Grammar_-_If_You_Wait.png',
        title: 'If You Wait',
        artist: 'London Grammar',
        year: 2013,
        duration: '43:52',
        tracks: [
            { title: 'Hey Now', duration: '3:26' },
            { title: 'Stay Awake', duration: '3:05' },
            { title: 'Shyer', duration: '3:10' },
            { title: 'Wasting My Young Years', duration: '3:24' },
            { title: 'Sights', duration: '4:13' },
            { title: 'Strong', duration: '4:35' },
            { title: 'Nightcall', duration: '4:30' },
            { title: 'Metal & Dust', duration: '3:28' },
            { title: 'Interlude', duration: '2:11' },
            { title: 'Flickers', duration: '4:45' },
            { title: 'If You Wait', duration: '4:44' }
        ]
    },
    //{ src: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg', title: 'Nevermind', artist: 'Nirvana' },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/8/80/TheOffspringSmashalbumcover.jpg',
        title: 'Smash',
        artist: 'The Offspring',
        year: 1994,
        duration: '46:47',
        tracks: [
            { title: 'Time to Relax', duration: '0:25' },
            { title: 'Nitro (Youth Energy)', duration: '2:27' },
            { title: 'Bad Habit', duration: '3:43' },
            { title: 'Gotta Get Away', duration: '3:52' },
            { title: 'Genocide', duration: '3:33' },
            { title: 'Something to Believe In', duration: '3:17' },
            { title: 'Come Out and Play', duration: '3:17' },
            { title: 'Self Esteem', duration: '4:17' },
            { title: 'It\'ll Be a Long Time', duration: '2:43' },
            { title: 'Killboy Powerhead', duration: '2:02' },
            { title: 'What Happened to You?', duration: '2:12' },
            { title: 'So Alone', duration: '1:17' },
            { title: 'Not the One', duration: '2:54' },
            { title: 'Smash', duration: '10:03' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/6/63/Tool_-_Lateralus.jpg',
        title: 'Lateralus',
        artist: 'Tool',
        year: 2001,
        duration: '78:51',
        tracks: [
            { title: 'The Grudge', duration: '8:36' },
            { title: 'Eon Blue Apocalypse', duration: '1:04' },
            { title: 'The Patient', duration: '7:13' },
            { title: 'Mantra', duration: '1:12' },
            { title: 'Schism', duration: '6:47' },
            { title: 'Parabol', duration: '3:04' },
            { title: 'Parabola', duration: '6:03' },
            { title: 'Ticks & Leeches', duration: '8:10' },
            { title: 'Lateralus', duration: '9:24' },
            { title: 'Disposition', duration: '4:46' },
            { title: 'Reflection', duration: '11:07' },
            { title: 'Triad', duration: '8:46' },
            { title: 'Faaip de Oiad', duration: '2:39' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Aenima.jpg',
        title: 'Aenima',
        artist: 'Tool',
        year: 1996,
        duration: '77:18',
        tracks: [
            { title: 'Stinkfist', duration: '5:11' },
            { title: 'Eulogy', duration: '8:28' },
            { title: 'H.', duration: '6:07' },
            { title: 'Useful Idiot', duration: '0:38' },
            { title: 'Forty Six & 2', duration: '6:04' },
            { title: 'Message to Harry Manback', duration: '1:53' },
            { title: 'Hooker with a Penis', duration: '4:33' },
            { title: 'Intermission', duration: '0:56' },
            { title: 'jimmy', duration: '5:24' },
            { title: 'Die Eier von Satan', duration: '2:17' },
            { title: 'Pushit', duration: '9:56' },
            { title: 'Cesaro Summability', duration: '1:26' },
            { title: 'Ænema', duration: '6:39' },
            { title: '(-) Ions', duration: '4:00' },
            { title: 'Third Eye', duration: '13:47' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Linkin_Park_Hybrid_Theory_Album_Cover.jpg',
        title: 'Hybrid Theory',
        artist: 'Linkin Park',
        year: 2000,
        duration: '37:45',
        tracks: [
            { title: 'Papercut', duration: '3:05' },
            { title: 'One Step Closer', duration: '2:35' },
            { title: 'With You', duration: '3:23' },
            { title: 'Points of Authority', duration: '3:20' },
            { title: 'Crawling', duration: '3:29' },
            { title: 'Runaway', duration: '3:04' },
            { title: 'By Myself', duration: '3:09' },
            { title: 'In the End', duration: '3:36' },
            { title: 'A Place for My Head', duration: '3:04' },
            { title: 'Forgotten', duration: '3:14' },
            { title: 'Cure for the Itch', duration: '2:37' },
            { title: 'Pushing Me Away', duration: '3:11' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/2/29/BornToDieAlbumCover.png',
        title: 'Born to Die',
        artist: 'Lana Del Rey',
        year: 2012,
        duration: '49:28',
        tracks: [
            { title: 'Born to Die', duration: '4:46' },
            { title: 'Off to the Races', duration: '5:00' },
            { title: 'Blue Jeans', duration: '3:30' },
            { title: 'Video Games', duration: '4:42' },
            { title: 'Diet Mountain Dew', duration: '3:43' },
            { title: 'National Anthem', duration: '3:50' },
            { title: 'Dark Paradise', duration: '4:03' },
            { title: 'Radio', duration: '3:34' },
            { title: 'Carmen', duration: '4:09' },
            { title: 'Million Dollar Man', duration: '3:51' },
            { title: 'Summertime Sadness', duration: '4:25' },
            { title: 'This Is What Makes Us Girls', duration: '3:58' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/2/2f/How_To_Be_A_Human_Being_cover_art.jpg',
        title: 'How to Be a Human Being',
        artist: 'Glass Animals',
        year: 2016,
        duration: '43:19',
        tracks: [
            { title: 'Life Itself', duration: '4:41' },
            { title: 'Youth', duration: '3:50' },
            { title: 'Season 2 Episode 3', duration: '4:04' },
            { title: 'Pork Soda', duration: '4:14' },
            { title: 'Mama\'s Gun', duration: '4:27' },
            { title: 'Cane Shuga', duration: '3:17' },
            { title: 'The Other Side of Paradise', duration: '5:21' },
            { title: 'Take a Slice', duration: '3:50' },
            { title: 'Poplar St', duration: '4:23' },
            { title: '[Premade Sandwiches]', duration: '0:36' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png',
        title: 'The Slow Rush',
        artist: 'Tame Impala',
        year: 2020,
        duration: '57:15',
        tracks: [
            { title: 'One More Year', duration: '5:22' },
            { title: 'Instant Destiny', duration: '3:10' },
            { title: 'Borderline', duration: '3:57' },
            { title: 'Posthumous Forgiveness', duration: '6:06' },
            { title: 'Breathe Deeper', duration: '6:12' },
            { title: 'Tomorrow\'s Dust', duration: '5:26' },
            { title: 'On Track', duration: '5:33' },
            { title: 'Lost in Yesterday', duration: '4:09' },
            { title: 'Is It True', duration: '3:58' },
            { title: 'It Might Be Time', duration: '4:33' },
            { title: 'Glimmer', duration: '2:08' },
            { title: 'One More Hour', duration: '7:13' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/5/52/Bangerz.png',
        title: 'Bangerz',
        artist: 'Miley Cyrus',
        year: 2013,
        duration: '50:35',
        tracks: [
            { title: 'Adore You', duration: '4:37' },
            { title: 'We Can\'t Stop', duration: '3:51' },
            { title: 'SMS (Bangerz)', duration: '2:49' },
            { title: '4x4', duration: '3:08' },
            { title: 'My Darlin\'', duration: '4:03' },
            { title: 'Wrecking Ball', duration: '3:41' },
            { title: 'Love Money Party', duration: '3:39' },
            { title: '#GETITRIGHT', duration: '4:25' },
            { title: 'Drive', duration: '4:15' },
            { title: 'FU', duration: '3:51' },
            { title: 'Do My Thang', duration: '3:45' },
            { title: 'Maybe You\'re Right', duration: '3:33' },
            { title: 'Someone Else', duration: '4:48' }
        ]
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Madison_Beer_Life_Support.png',
        title: 'Life Support',
        artist: 'Madison Beer',
        year: 2021,
        duration: '46:00',
        tracks: [
            { title: 'The Beginning', duration: '1:19' },
            { title: 'Good in Goodbye', duration: '3:34' },
            { title: 'Default', duration: '2:50' },
            { title: 'Follow the White Rabbit', duration: '3:03' },
            { title: 'Effortlessly', duration: '3:20' },
            { title: 'Stay Numb and Carry On', duration: '2:46' },
            { title: 'Blue', duration: '3:29' },
            { title: 'Interlude', duration: '1:37' },
            { title: 'Homesick', duration: '4:07' },
            { title: 'Selfish', duration: '3:43' },
            { title: 'Sour Times', duration: '3:24' },
            { title: 'BOYSH*T', duration: '3:11' },
            { title: 'Baby', duration: '3:23' },
            { title: 'Stained Glass', duration: '3:39' },
            { title: 'Emotional Bruises', duration: '3:05' },
            { title: 'Everything Happens for a Reason', duration: '2:53' }
        ]
    },
];

/**
 * This will get a random album array from the list.
 *
 * @param {number} count
 * @returns {array}
 */
export const getRandomAlbums = (count) =>
{
    return ALBUMS
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
};

/**
 * This will get an album by title.
 *
 * @param {string} title
 * @returns {object}
 */
export const getAlbumByTitle = (title = '') =>
{
    const preparedTitle = title.replace(/-/g, ' ').toLowerCase();
    return ALBUMS.find(album =>
    {
        const albumTitle = album?.title?.toLowerCase();
        return albumTitle === preparedTitle;
    });
};