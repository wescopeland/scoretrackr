import * as admin from 'firebase-admin';

const serviceAccount: admin.ServiceAccount = {
  projectId: 'scoretracker-e8845',
  privateKey:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGagWcVzYnGaTS\nc1iF+XgQ3k1W/VBnwMqgd72UDkz/jmhNzFxntPtZxaORsbp5n1adislHmZY2D4g9\ng2PTfk+EvGi610/pU6Tzmq/3t3hxBj8qVJSKwD6wQOuj2hmzGc3mt6ZooxGlpY/e\nNo+ozu8jH+1yVv0r5fhu1GG9+MniC6lZCVhIZzf5ncy4GTAupZ8yPWjFxMLsVgWH\nwpvlNxCGR5ScAvy47JRdFqBr9uI1xHyHsYRIUu7MB1UO6orr61UtnIu/I2DE7jyL\nZ9xyB7CVK66mdQaw3X5dmVlOYJ89+pVRazl7FA3sau7MAmcCyZYCmOO1q0V0FSo8\nJDWiMMQbAgMBAAECggEAUC15tPKdBHHdY9mOlRz5Qr/COvvEKRkECJI6foDE5qQy\nS/XgBVxiEaXG8lICi7EyvBjgO1m6FIB0Sn80sLsjAP1tyMrHFP9i8bm5j/2I4wtm\nLQHewK7s5iZl0mGI7xHnXWsrCK+Uqv5bQ62CofF1Oxlkx0aVqc6VdJvIH49QbVIY\n3C2PkzXi539AIuPdK3coaCBKt/2klFKatEI0COl8EfmXaV1n4d6Hej2myhqyaloj\nY+p/VNWkXBLdVBqmcAUIDgc2dEgY/7idy4WlPl6SjqHwww1QGFlBJ7oXW9M0gE/S\nPmqgM4fpUwzSGKKEgjRHwx5pAWrNH/UnOmnHWyN6sQKBgQDmgkAnZdKNAhMOQjRb\nnYrznYSEn04bOWXfLZh0xDInJmezRUkLa5U2h74IzTXkRfOzUbPwS27SaJ6V0MGC\nLm8fGr7uFPogRn3w87lNcDOY4ErSkuSRjkiYQ99l15EJFcoVk/hn0g9ydtqcyUqM\nqMuD+QFPvXj2Lx3RAW5aeT3SSQKBgQDcWypmhHjdm0Du/EJiBjsfRwjsHN7pzKPG\nH2v4QS894oz04pCYozmPpcGZmqkDiINebHZ5v+KynBUH1FcoZsMEqFZgMyaK5jkG\nxlkM4ptyeUdyf4UZEG8ga0zc5LlenhR15awixV51omBpT/U3CZGNxAyPzg1W45UY\nfJ32aSzjQwKBgQDeJCwbS79rcNJYbWjz2ZGtUOICxVuKVPhd6h0Aeosyu4o4c87/\nGIDF+m8jIFCNWvSOnXBhZPC6CWS7UGEMSh+AxE+4NbMPI5//c4HipPy0mYLCCBoK\nRCqlwtMp3GLDdKI5xU4hD4kfcHchncMgZxMqbe/bnudRqPp9D3n/6tOvMQKBgQCM\nRcCFCDlEoMtCFvVPHzZNn9OPMoW4gVuUCHabzyr6kxg133A6qlU/Gz5VwL1skV9H\nIXZ95Ge0WWWN2V8uSdRFR7/Md2NGsm2E4YjYifx4b7nKqmCY5vxGv+drCnLyR2Ew\n9+aPL+MEsTv8bjjkM0Qj4bQ5aurU8AT+VH3d2XAIrwKBgB/3IFhDHD+hiP7aFOiO\nfmf6tn0veTKBjaowEYjEMgIz2OK1ukxaaLFA/l+DxcTMypA3pmbC2114n/EZK5u7\nENb+V0Qc2u6TcoPMl9t/vpqfOWOlWIqOW5ju/kQcq43ujwW9FHlQ3oGIgUFXOXgS\nXmdooFUMjKuugRvjkDv3oKn2\n-----END PRIVATE KEY-----\n',
  clientEmail:
    'firebase-adminsdk-yssd1@scoretracker-e8845.iam.gserviceaccount.com'
};

function initializeFirebase() {
  // Jest will initialize its own mock Firebase instance.
  if (!process.env.JEST_WORKER_ID) {
    if (process.env.NODE_ENV === 'development') {
      process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';

      admin.initializeApp({
        projectId: 'scoretracker-e8845',
        credential: admin.credential.applicationDefault()
      });
    } else {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://scoretracker-e8845.firebaseio.com'
      });
    }
  }
}

if (!admin.apps.length) {
  initializeFirebase();
}

export const db = process.env.JEST_WORKER_ID
  ? admin
  : admin.apps.length
  ? admin.app()
  : null;
