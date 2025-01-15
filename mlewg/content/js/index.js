var quotes = ['"Back in the glory days, we didn\'t use Vercel, we worked hard on our own websites!" - Teker, 2024', 'Insert quote here', 'ICH BIN DER RAAAAAAADDDDDDDDDDD! :D :D :D', 'Three', 'Bosanska Artiljerija', 'One good boy is worth a thousand [XXXXXXX], BOUND', 'Skibidi dop dop', 'TÜRKIYE MENTIONED!!!!!!!!!! 🐺🐺🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷', 'Listening to CMIYGL, lowkey fire af', 'Who\'s idea at Google was it to make the emojis in messages be animated????', 'lalalalalalalalala :3', '(>_<)', 'FJ under the table w/D would be heaven (>///_///<)', 'Why tf every Asian twink bad asf?????', 'Crodie, get off that Galaxy Gas and start yappin on the convo!', 'We wasn\'t \'sposed to make it past 25, jokes on you we still alive!', '808\'s is kinda trash, I\'ll admit it. The only song that I truly love off of 808\'s is Paranoid.', 'Bound 2', 'Yeezy season (hopefully) aproaching', 'Fun Fact: Ye is a weeb', 'R.I.P Kyle Plush', 'Who else up sopin\' they balls?', 'Fun Fact: The epic of Gilgamesh takes place before bread was made', "I am your father" - Darth Vader, 4 BBY.', '"Ave, true to Caesar" - Veteran Legionary, 2281.', '"*grunt*" - Quake Zombie, 1996.', '"Linux is cancer" - Steve Ballmer, 2001.', '"Your life is NOTHING, you serve ZERO purpose, you should destroy yourself NOW!" - LowTierGod, 2022.', '"l + BOZO" - cy (1up), 2023.', '"Scramble like an egg before you get folded like an omlette" Calebcity, 2017.', '"I\'ll stay up till dawn, and my flashlights on..." - Peter Griffin, 2023.', 'HTTP Status 404, server resource not found.', 'HTTP Status 500, backend server error.', 'HTTP Status 403, access forbiden.', 'HTTP Status 400, bad client request.', '"simpin aint pimpin" - Swoozie 2022.','"i eat chip." - cy (1up) 2022.','"there is a secret website that is the testing place for the terminal." - cy (1up) 2022.', '"&#9432;1.u.p stands for one united power!"- cy (1up)']

function funny(num) {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function quote(num) {
    if(num == -8) {
        $('#quote').html(funny())
    }
    else {
        $('#quote').html(quotes[num])
    }
}

$(document).ready(function() {
    quote(-8)
});
