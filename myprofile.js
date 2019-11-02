const fetch = require('node-fetch');
const readline = require('readline-sync');
const uuid = require('uuid/v4');
const cheerio = require('cheerio');
const fs = require('async-file');
const chalk = require('chalk');
const delay = require('delay');
var sessionnya = uuid();

const aksesnya = readline.question(chalk.green('Input your access token: '));

const bikinunik = length =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "abcdefghijklmnopqrstuvwxyz1234567890";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

const ambildata = (sessionnya, uniknya, aksesnya) => new Promise((resolve, reject) => {
    fetch('https://api.gojekapi.com/gopoints/v3/wallet/vouchers?limit=10&page=1', {
        method: 'GET',
        headers: {
        
            'X-Session-ID': sessionnya,
			'X-Platform': 'Android',
			'X-UniqueId': uniknya,
			'X-AppVersion': '3.34.1',
			'X-AppId': 'com.gojek.app',
			'Accept': 'application/json',
			// 'D1': '03:25:1E:AE:CD:AF:35:FE:18:3C:15:B4:1F:94:6C:C2:0E:54:3D:84:3A:49:89:59:D9:90:EB:62:B8:AC:26:9C',
			'X-PhoneModel': 'Android,Custom',
			'X-PushTokenType': 'FCM',
			'X-DeviceOS': 'Android,6.0', 
			'Authorization': `Bearer ${aksesnya}`,
			'Accept-Language': 'en-ID',
			'X-User-Locale': 'en_ID',
			'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'okhttp/3.12.1'
        },
        
    })
    .then(res => res.json())
        .then(result => {
            resolve(result)
        })
        .catch(err => {
            reject(result)
        })
});

const datasaya = (sessionnya, uniknya, aksesnya) => new Promise((resolve, reject) => {
    fetch('https://api.gojekapi.com/gojek/v2/customer', {
        method: 'GET',
        headers: {
            'X-Session-ID': sessionnya,
			'X-Platform': 'Android',
			'X-UniqueId': uniknya,
			'X-AppVersion': '3.34.1',
			'X-AppId': 'com.gojek.app',
            'Accept': 'application/json',
			'X-PhoneModel': 'Android,Custom',
			'X-PushTokenType': 'FCM',
			'X-DeviceOS': 'Android,6.0', 
			'Authorization': `Bearer ${aksesnya}`,
			'Accept-Language': 'en-ID',
			'X-User-Locale': 'en_ID',
			'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'okhttp/3.12.1'
        },
        
    })
    .then(res => res.json())
    .then(result => {
        resolve(result)
    })
    .then(err => {
        reject(err)
    })
});

const cekwallet = (sessionnya, uniknya, aksesnya) => new Promise((resolve, reject) => {
    fetch('https://api.gojekapi.com/wallet/profile', {
    method: 'GET',
        headers: {
        
            'X-Session-ID': sessionnya,
			'X-Platform': 'Android',
			'X-UniqueId': uniknya,
			'X-AppVersion': '3.34.1',
			'X-AppId': 'com.gojek.app',
			'Accept': 'application/json',
			'X-PhoneModel': 'Android,Custom',
			'X-PushTokenType': 'FCM',
			'X-DeviceOS': 'Android,6.0', 
			'Authorization': `Bearer ${aksesnya}`,
			'Accept-Language': 'en-ID',
			'X-User-Locale': 'en_ID',
			'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'okhttp/3.12.1'
        },
        
    })
    .then(res => res.json())
        .then(result => {
            resolve(result)
        })
        .catch(err => {
            reject(result)
        })
});

const functionredeemvoc = (sessionnya, uniknya, aksesnya) => new Promise((resolve, reject) => {
    const url = 'https://api.gojekapi.com/go-promotions/v1/promotions/enrollments'
    const badan = {
        "promo_code": "TEST"
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'X-Session-ID': sessionnya,
            'X-Platform': 'Android',
            'X-UniqueId': uniknya,
            'X-AppVersion': '3.34.1',
            'X-AppId': 'com.gojek.apn',
            'Accept': 'application/json',
            'X-PhoneModel': 'Xiaomi,Redmi Note 4',
            'X-PushTokenType': 'FCM',
            'X-DeviceOS': 'Android,6.0',
            'X-DeviceToken': 'dEThVxynoKw:APA91bGaRm71ebDIFW-UZu4FDnRA-EqYUIVbZEKgFcdjR0yBTNZeQcFjsG1BQ4RYLS1NtaDy45q6GravAZOnRI9aC4bZYpwyocwhjLB2V0vRv5JcoHgrruUPK01OtlCKNGH8_Ti-FA5U',
            'Authorization': `Bearer ${aksesnya}`,
            'Accept-Language': 'en-ID',
            'X-User-Locale': 'en_ID',
            'X-Location': '-6.2178388,106.8953128',
            'X-Location-Accuracy': '4.433',
            'X-M1': '1:__9de1deadafae46bbbb6703b54a521a40,2:794723806,3:1566304446377-7239558093263557724,4:54335,5:mt6797|1391|10,6:02:00:00:00:00:00,7:".",8:1080x1920,9:passive\,gps\,network,10:1,11:ZkRNSG5FVHNvb0pGe2FiaFpld0ZlZFdUd1FURFFlUQA=',
            'Content-Type': 'application/json; charset=UTF-8',
            'Content-Length': '24',
            'Host': 'api.gojekapi.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.12.1'
        },
        body: JSON.stringify(badan)
    })
    .then(res => res.json())
    .then(result => {
        resolve(result) // console.log(result) PENTING
    })
    .catch(err => {
        reject(err) // console.log(err) PENTING
    })

});

(async () => {
    try{
	
	console.log(chalk.yellow("Check Profile with Access Token"));
	console.log(chalk.yellow("Powered by Erza Jullian - Easy to Learn"));
	console.log("");
        const uniknya = bikinunik(16);
        const checkacc = await functionredeemvoc(sessionnya, uniknya, aksesnya);
        console.log(chalk.green(`Checking account...`));
        await delay(500)
        if (checkacc.errors[0].code === `GPS-Proxy-CustomerBlocked`) {
            console.log(chalk.red(`Your account is temporarily blocked.`));
        } else {
            console.log(chalk.green(`LIVE`));
        };
        const ambildatasaya = await datasaya(sessionnya, uniknya, aksesnya);
        const idsaya = ambildatasaya.customer.id
        const namasaya = ambildatasaya.customer.name
        const emailsaya = ambildatasaya.customer.email
        const bikinnya = ambildatasaya.customer.created_at
        const nomorsaya = ambildatasaya.customer.phone
        const cekwalletsaya = await cekwallet(sessionnya, uniknya, aksesnya);
        const balancesaya = cekwalletsaya.data.balance
        console.log(chalk.yellow(`Name: ${namasaya}\nUser ID: ${idsaya}\nBalance: Rp. ${balancesaya}\nEmail: ${emailsaya}\nPhone number: ${nomorsaya}`))
        const getdata = await ambildata(sessionnya, uniknya, aksesnya);
        const jumlahvoucher = getdata.voucher_stats.total_vouchers
        if(jumlahvoucher === 0){
            console.log(chalk.red("You don't have any voucher yet."))
        }else{
            console.log(chalk.yellow(`You have ${jumlahvoucher} vouchers: `))
            const isivoucher = getdata.data.map(datas => {
            console.log(chalk.yellow(`${datas.title} Exp: ${datas.expiry_date}`))
             })
        }
        console.log(chalk.green(`Account created at: ${bikinnya}`))
        
    }catch(e){
        console.log(e) 
    }

})();
