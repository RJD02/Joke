function putIt(text) {
    if(text === undefined) {
        $('#p').addClass('warning');
        $('button').attr('disabled', true);
        setTimeout(() => {
            $('#p').removeClass('warning')
            $('.btn').attr('disabled', false)
        }, 2000);
        return ;
    }
    $('.display').prepend($(`<li>${text}</li>`))
}

$('#btn').click((e) => {
    const getNewJoke = async function() {
        let joke = "";
        let jokeText = "";
        try {
        joke = await axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw')
        jokeText = joke.data.joke

        }
        catch (e) {
            console.log("Something went wrong")
            return;
        }
        console.log(jokeText);
        putIt(jokeText)
    }
    getNewJoke();
})