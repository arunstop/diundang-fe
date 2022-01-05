import mitt from "mitt"
export default ({ app }, inject) => {
    const emitter = mitt()
    console.log(emitter)

    inject('eventBus', emitter)
}