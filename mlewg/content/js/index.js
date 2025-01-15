var quotes = ['"Back in the glory days, we didn\'t use Vercel, we worked hard on our own websites!" - Teker, 2024', 'Insert quote here', 'ICH BIN DER RAAAAAAADDDDDDDDDDD! :D :D :D', 'Three', 'Bosanska Artiljerija', 'One good boy is worth a thousand [XXXXXXX], BOUND', 'Skibidi dop dop', 'TÜRKIYE MENTIONED!!!!!!!!!! 🐺🐺🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷🇹🇷', 'Listening to CMIYGL, lowkey fire af', 'Who\'s idea at Google was it to make the emojis in messages be animated????', 'lalalalalalalalala :3', '(>_<)', 'FJ under the table w/D would be heaven (>///_///<)', 'Why tf every Asian twink bad asf?????', 'Crodie, get off that Galaxy Gas and start yappin on the convo!', 'We wasn\'t \'sposed to make it past 25, jokes on you we still alive!', '808\'s is kinda trash, I\'ll admit it. The only song that I truly love off of 808\'s is Paranoid.', 'Bound 2', 'Yeezy season (hopefully) aproaching', 'Fun Fact: Ye is a weeb', 'R.I.P Kyle Plush', 'Who else up sopin\' they balls?', 'Fun Fact: The epic of Gilgamesh takes place before bread was made']

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