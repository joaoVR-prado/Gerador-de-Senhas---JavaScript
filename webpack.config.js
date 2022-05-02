const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public", "assets", "js"),    //caminho
        filename: "bundle.js"
    },

    module: {
        rules: [{
            exclude: /node_modules/, //excluir a pasta de node_modules para analise das regras, ganhando desempenho
            test: /\.js$/, //Testar apenas em arquivos js
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]

    },
    devtool: "source-map" // Mapear o erro caso ocorra (EX: "Erro ocorreu no arquivo tal, linha tal...")

};