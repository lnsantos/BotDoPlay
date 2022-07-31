import ClientDiscord from './core/client'
import ReadyStream from './core/streams/ReadyStream'

ClientDiscord
     .getInstance()
     .setStreamOnline([new ReadyStream()])
     .onLogin()