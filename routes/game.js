module.exports = class Game{
    getText(request){
        if(request.session.new){
            return 'В волшебном мире отважные герои ищут приключения спускаясь в подземелья'
        }
        return 'Не понимаю вас. Чтобы закончить игру, просто скажите \'хватит\'!'
    }
}