class PreventScrollIOs{
    constructor(){
        this.init()
        this.events()
    }
    init(){
        console.log('PreventScrollIOs')
    }
    events(){
        document.querySelector("body").addEventListener('touchmove', e => this.handleTouchMove(e))
        document.querySelector("body").addEventListener('mousemove', e => this.handleTouchMove(e))
    }
    handleTouchMove(e){
        console.log('dont move')
        alert(`don't move`)
        e.preventDefault();
    }
}
export default PreventScrollIOs;