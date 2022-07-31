import { Client } from 'discord.js';
import intentsClient from './intents'
import StreamOnline from './StreamOnline'

import environment from 'dotenv'
environment.config();

export default class BotApplication {

    client!: Client;
    static instance : BotApplication;
    

    private constructor() {}

    public static getInstance() : BotApplication {
        
        if (!this.instance) {
            this.instance = new BotApplication()
        }
        
        return this.instance
    }

    public setStreamOnline(streams: Array<StreamOnline>) : BotApplication {
        for (let key in streams) {
            this.getClient().once(streams[key].event, () => { streams[key].onConnection() })
        }

        return this
    }

    public getClient() : Client {
        if (!this.client) {
            this.client = new Client({ intents: intentsClient })
        }

        return this.client
    }

    public onLogin() {
        this.getClient().login(process.env.TOKEN)
    }
}
