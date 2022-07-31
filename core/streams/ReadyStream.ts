import StreamOnline from "../client/StreamOnline";

export default class ReadyStream implements StreamOnline {

    event: string = 'ready'

    onConnection() {
        console.log('Ready!');
    }
}