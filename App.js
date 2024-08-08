// type = module

import wweb from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal'
import cron from 'node-cron'
import { numbers } from './data.js';


const dt = JSON.parse(JSON.stringify(numbers))
const { Client, LocalAuth, MessageMedia } = wweb

const bot = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-sexurity', '--disable-setuid-sandbox'],
        headless: true
    },
    webVersion: '2.2409.2',
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html'
    }
})

bot.on('ready', async () => {
    const media = MessageMedia.fromFilePath('./src/assets/images/bongo_cat_programming.jpg')
    await bot.sendMessage( `549${numbers.guille}@c.us` , media, { sendMediaAsSticker: true })
})

bot.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
})


bot.initialize();