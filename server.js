const express = require('express');
const http = require('http'); // Usato per fare chiamate interne a VetSim
const app = express();

// La porta su cui risponderà il nostro server (es. 192.168.1.100:3000)
const PORT = 3000;

// Configurazione per leggere i dati inviati dai tablet (JSON)
app.use(express.json());

// 1. FARO WI-FI: Diciamo al server di condividere tutti i file (HTML, JSON, Immagini)
// che metterai in una cartella chiamata "public"
app.use(express.static('public'));

// 2. TRADUTTORE: Creiamo l'endpoint (il "telefono") che i tablet chiameranno
app.post('/api/trigger', (req, res) => {
    const actionId = req.body.actionId; // Questo è l'ID (es. dobutamina_bolo)
    
    console.log(`[📱 TABLET] Ha richiesto l'azione: ${actionId}`);

    // --- COLLEGAMENTO A OPENVETSIM ---
    // Open VetSim, quando è aperto, crea a sua volta un server interno nascosto
    // (di solito sulla porta 80 o 8080). 
    // Qui il nostro Nodo bussa alla porta di VetSim per attivare il Trigger!
    
    /* 
    NOTA PER IL SETUP REALE: 
    L'URL esatto dipende da come Open VetSim aspetta i comandi API. 
    Di solito è qualcosa di simile a: http://localhost/api/trigger?id=...
    Per ora, stampiamo nel terminale cosa farebbe.
    */
    console.log(`[⚙️ SERVER] Inoltro il trigger '${actionId}' al monitor di VetSim...`);

    // Rispondi al tablet dicendo che è andato tutto bene
    res.json({ success: true, message: `Azione ${actionId} elaborata correttamente` });
});

// Accendiamo il server e mettiamolo in ascolto su tutte le reti Wi-Fi (0.0.0.0)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n=================================================`);
    console.log(`🚀 IL NODO VETSIM E' ATTIVO E IN ASCOLTO!`);
    console.log(`=================================================`);
    console.log(`1. Assicurati che il computer sia collegato al router Wi-Fi.`);
    console.log(`2. Apri il prompt dei comandi e scrivi 'ipconfig' per trovare il tuo Indirizzo IPv4.`);
    console.log(`3. Fai collegare i tablet a: http://[TUO-INDIRIZZO-IPV4]:${PORT}`);
    console.log(`(Se stai testando sul tuo stesso computer, apri: http://localhost:${PORT})\n`);
});