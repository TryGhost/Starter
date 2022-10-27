const fs = require("fs");
const en = require("./en.json");
const ja = require("./ja.json");

const language = {
    en: en,
    ja: ja,
};

let result = {};

Object.keys(language).forEach((item) => {
    Object.keys(language[item]).forEach((key) => {
        result = { ...result, [`${item}.${key}`]: language[item][key] };
    });
});

fs.writeFile("./locales/zz.json", JSON.stringify(result), function (err) {
    if (err) {
        console.log("err", err);
    }
});
