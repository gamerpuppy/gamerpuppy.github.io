

var generateButton = document.getElementById("generateButton");
var resultElem = document.getElementById("resultElem");

var seeds = [
    {seed:"4Y8AJFJ9YV", character:"Defect"},
    {seed:"5N6JMG9Q2G", character:"Defect"},
    {seed:"A9FDJAYUIY", character:"Defect"},
    {seed:"A12KDHYKUX", character:"Defect"},
    {seed:"AQ0WTK81LS", character:"Defect"},
    {seed:"CXCTR0LBW2", character:"Defect"},
    {seed:"CQUQ16SYA9", character:"Defect"},
    {seed:"EAY10Z3J0Q", character:"Defect"},
    {seed:"DK99IT5NCL", character:"Defect"},
    {seed:"DCBWYBYGSM", character:"Defect"},
    {seed:"FGZ8HEJLPY", character:"Defect"},
    {seed:"ER9970YDKK", character:"Defect"},
    {seed:"HHXQY4EYAP", character:"Defect"},
    {seed:"HG89CIWAHS", character:"Defect"},
    {seed:"LTCIHE2IWG", character:"Defect"},
    {seed:"2IZ7Y76F1T", character:"Defect"},
    {seed:"2JGZRFSIWR", character:"Defect"},
    {seed:"2K20MBHIAP", character:"Defect"},
    {seed:"2K60KW90VQ", character:"Defect"},
    {seed:"2LQSMV0WIN", character:"Defect"},
    {seed:"2LQTAGN1GE", character:"Defect"},
    {seed:"2LYUTJV7DR", character:"Defect"},
    {seed:"2MFC97U7ER", character:"Defect"},
    {seed:"2MR8ZTV4DU", character:"Defect"},
    {seed:"2NCYAP3U9F", character:"Defect"},
    {seed:"2P2G6ZN4XP", character:"Defect"},
    {seed:"2P5QZ64DCW", character:"Defect"},
    {seed:"2PUHHRU4W0", character:"Defect"},
    {seed:"2PWNLG6RQS", character:"Defect"},
    {seed:"2Q28USNPJ7", character:"Defect"},
    {seed:"2QZV6G5FCQ", character:"Defect"},
    {seed:"2SBUINHFHQ", character:"Defect"},
    {seed:"2SPLFVLEXA", character:"Defect"},
    {seed:"2SXSYPBC1H", character:"Defect"},
    {seed:"2TI98G9JSY", character:"Defect"},
    {seed:"2UZQHMB836", character:"Defect"},
    {seed:"2VGWMJ0BFH", character:"Defect"},
    {seed:"2VQ6LAFIHJ", character:"Defect"},
    {seed:"2VR9ICPCHG", character:"Defect"},
    {seed:"2W9WT4XL26", character:"Defect"},
    {seed:"2WJ4F2MGGD", character:"Defect"},
    {seed:"2XLTRTPG4F", character:"Defect"},
    {seed:"2Y8743X0XE", character:"Defect"},
    {seed:"2Y89MB2Z8N", character:"Defect"},
    {seed:"2YKGBL1MK9", character:"Defect"},
    {seed:"2YXFT1DNA9", character:"Defect"},
    {seed:"2YW8E1K967", character:"Defect"},
    {seed:"2ZE2RYLX5E", character:"Defect"},
    {seed:"PNG0LGYPCC", character:"Defect"},
    {seed:"TGVNDFMR45", character:"Defect"},

    {seed:"19EFVXLRMN", character:"Ironclad"},
    {seed:"19THKQXSTX", character:"Ironclad"},
    {seed:"1AMYI993AX", character:"Ironclad"},
    {seed:"1C6QWAIG26", character:"Ironclad"},
    {seed:"1DW41UC6IC", character:"Ironclad"},
    {seed:"1GKTMZ09PH", character:"Ironclad"},
    {seed:"1GPMWBW2YK", character:"Ironclad"},
    {seed:"1GRUYW9V0Q", character:"Ironclad"},

    {seed:"4MKNT0GRSB", character:"Watcher"},
    {seed:"A9FDJAYUIY", character:"Watcher"},
    {seed:"AR0L61WD73", character:"Watcher"},
    {seed:"DQ7DCU9EE3", character:"Watcher"},
    {seed:"DD0FVGD3I2", character:"Watcher"},
    {seed:"F45D8B7FYK", character:"Watcher"},
    {seed:"P69Q5MKQTT", character:"Watcher"},
    {seed:"UPZF9LW0DE", character:"Watcher"},
];

function getRandomSeed() {
    let idx = Math.floor(Math.random() * seeds.length);

    let seed = Object.assign({}, seeds[idx]);
    if (seed.character === "Defect") {
        seed.character = Math.random() < 0.5 ? "Defect" : "Silent";
    }

    return seed;
}

function generateButtonOnClick() {
    const seedRes = getRandomSeed();
    resultElem.innerText = seedRes.seed+" "+seedRes.character+" Boss Relic Swap";
}

generateButton.onclick = generateButtonOnClick;

