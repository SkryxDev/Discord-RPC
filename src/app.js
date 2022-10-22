// PER AVVIARE L'APP USARE npm run test

const clientId = "clientid" //Andate su https://discord.com/developers e create una nuova applicazione, copiate il client id qui!
const DiscordRPC = require("discord-rpc") //Installate la libreria discord-rpc con: "npm i discord-rpc"

const RPC = new DiscordRPC.Client({transport: "ipc"})

DiscordRPC.register(clientId)

async function setActivity() {
    if(!RPC) return
    RPC.setActivity({ //Per il testo scritto grassetto come nome attività, modificate il nome dell' applicazione
        details: `descrizione 1`,
        state: `Stato/ Tipo di attività`,
        startTimestamp: Date.now(), // qui lasciate così
        largeImageKey: `img1`, //Per le immagini dovete andare sull'applicazione, rich presence e uploaddare un immagine rinominandola come volete, e poi inserirla qui
        largeImageText: `Testo immagine 1`,
        smallImageKey: `img2`,
        smallImageText: `Testo immagine 2`,
        instance: false,
        buttons: [ //è possibile fare solo 2 bottoni, che l'unica funzione possibile è un redirect a dei link
            {
                label: `Google`, //nome bottone
                url: `https://www.google.com` //url bottone
            },
            {
                label: `Youtube`,
                url: `https://youtube.com`
            }
        ]
    })
}

RPC.on("ready", async () => { //questa parte di codice indica che all'avvio applicherà il codice qui sopra, non midificarla
    setActivity();

    setInterval(() => {
        setActivity() 
    }, 15 * 1000)
})

RPC.login({ clientId }).catch(err => console.log(err)) //in caso di errore, lo scriverà in console, non modificare

//ATTENZIONE!! Questa abb bisogna assolutamente hostarla sul proprio pc dove è aperto discord, sennò non funzionerà, quindi se hai aperto discord su windows, devi hostarlo su windows, ovvero dove hai aperto discord!

//Per qualsiasi domanda non esitare a chiedere! Scrivi in dm a SkryxDev#3846