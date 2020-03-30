const enum Technologies {
    JS = "JS",
    TS = "TS",
    NODE = "NODE",
    HTML = "HTML",
    CSS = "CSS",
    AWS = "AWS",
    GCP = "GCP",
    CRYPTO = "CRYPTO",
    WEBPACK = "WEBPACK",
    CLOUDFORMATION = "CLOUDFORMATION",
    ROUTE53 = "ROUTE53",
    S3 = "S3",
    COGNITO = "COGNITO",
    DYNAMO_DB = "DYNAMO_DB",
    LAMBDA = "LAMBDA",
    API_GATEWAY = "API_GATEWAY",
    IOT = "IOT",
    MQTT = "MQTT",
    CLOUDFRONT = "CLOUDFRONT",
    CERT_MANAGER = "CERT_MANAGER",
    CODE_BUILD = "CODE_BUILD",
    CODE_PIPELINE = "CODE_PIPELINE",
    APPLE_WALLET = "APPLE_WALLET",
    G_PAY = "G_PAY",
    NFC = "NFC",
    // CRYPTO = "CRYPTO",
    // IOT = "IOT",
    // FULL_STACK = "FULL_STACK",
    ANGULAR = "ANGULAR",
    REACT = "REACT",
    REDUX = "REDUX",
    // REDUX_FORM = "REDUX_FORM",
    MATERIAL_UI = "MATERIAL_UI",
    CSS_MODULES = "CSS_MODULES",
    MONGO_DB = "MONGO_DB",
    JQUERY = "JQUERY",
    DOCKER = "DOCKER",
    KUBERNETES = "KUBERNETES"
}

export const technologies: {
    [key in Technologies]: {
        name: string;
        src: any;
    };
} = {
    JS: {
        src: require("../../../assets/resume/technologies/javascript.svg"),
        name: "Java Script"
    },
    TS: {
        src: require("../../../assets/resume/technologies/typescript.png"),
        name: "Type Script"
    },
    NODE: {
        src: require("../../../assets/resume/technologies/node.svg"),
        name: "Node"
    },
    CRYPTO: {
        src: require("../../../assets/resume/technologies/crypto.png"),
        name: "Crypto"
    },
    AWS: {
        src: require("../../../assets/resume/technologies/aws.svg"),
        name: "AWS"
    },
    CLOUDFORMATION: {
        src: require("../../../assets/resume/technologies/cloudformation.svg"),
        name: "Cloud Formation"
    },
    ROUTE53: {
        src: require("../../../assets/resume/technologies/route53.svg"),
        name: "Route53"
    },
    CLOUDFRONT: {
        src: require("../../../assets/resume/technologies/cloudfront.svg"),
        name: "Cloud `Front"
    },
    S3: {
        src: require("../../../assets/resume/technologies/s3.svg"),
        name: "S3"
    },
    DYNAMO_DB: {
        src: require("../../../assets/resume/technologies/dynamo-db.svg"),
        name: "Dynamo DB"
    },
    LAMBDA: {
        src: require("../../../assets/resume/technologies/lambda.png"),
        name: "Lambda"
    },
    API_GATEWAY: {
        src: require("../../../assets/resume/technologies/api-gateway.svg"),
        name: "Api Gateway"
    },
    IOT: {
        src: require("../../../assets/resume/technologies/iot.png"),
        name: "IoT"
    },
    CERT_MANAGER: {
        src: require("../../../assets/resume/technologies/cert-manager.png"),
        name: "Cert Manager"
    },
    CODE_BUILD: {
        src: require("../../../assets/resume/technologies/code-build.png"),
        name: "Code Build"
    },
    CODE_PIPELINE: {
        src: require("../../../assets/resume/technologies/code-pipeline.png"),
        name: "Code Pipeline"
    },
    COGNITO: {
        src: require("../../../assets/resume/technologies/cognito.svg"),
        name: "Cognito"
    },
    APPLE_WALLET: {
        src: require("../../../assets/resume/technologies/apple-wallet.png"),
        name: "Apple Wallet"
    },
    G_PAY: {
        src: require("../../../assets/resume/technologies/g-pay.svg"),
        name: "Google Pay"
    },
    NFC: {
        src: require("../../../assets/resume/technologies/nfc.svg"),
        name: "NFC"
    },
    MQTT: {
        src: require("../../../assets/resume/technologies/mqtt.png"),
        name: "MQTT"
    },
    HTML: {
        src: require("../../../assets/resume/technologies/html.svg"),
        name: "HTML"
    },
    CSS: {
        src: require("../../../assets/resume/technologies/css.svg"),
        name: "CSS"
    },
    // AWS: {
    //     src: require('../../../assets/resume/technologies/aws.png'),
    //     name: "AWS"
    // },
    GCP: {
        src: require("../../../assets/resume/technologies/gcp.png"),
        name: "GCP"
    },
    WEBPACK: {
        src: require("../../../assets/resume/technologies/webpack.png"),
        name: "Webpack"
    },
    // CRYPTO: {
    //     src: require('../../../assets/resume/technologies/'),
    //     name: "Crypto"
    // },
    // IOT: {
    //     src: require('../../../assets/resume/technologies/'),
    //     name: "IOT"
    // },
    // jken: {
    // src: require('../../../assets/resume/technologies/'),
    //     name: "Full Stack"
    // },
    ANGULAR: {
        src: require("../../../assets/resume/technologies/angular.svg"),
        name: "Angular"
    },
    REACT: {
        src: require("../../../assets/resume/technologies/react.svg"),
        name: "React"
    },
    REDUX: {
        src: require("../../../assets/resume/technologies/redux.svg"),
        name: "Redux"
    },
    MATERIAL_UI: {
        src: require("../../../assets/resume/technologies/material-ui.png"),
        name: "material ui"
    },
    CSS_MODULES: {
        src: require("../../../assets/resume/technologies/css-modules.png"),
        name: "CSS Modules"
    },
    MONGO_DB: {
        src: require("../../../assets/resume/technologies/mongodb.jpg"),
        name: "MongoDB"
    },
    JQUERY: {
        src: require("../../../assets/resume/technologies/jquery.png"),
        name: "jQuery"
    },
    DOCKER: {
        src: require("../../../assets/resume/technologies/docker.svg"),
        name: "Docker"
    },
    KUBERNETES: {
        src: require("../../../assets/resume/technologies/kubernetes.png"),
        name: "Kubernetes"
    }
};

export type Technology = keyof typeof Technologies;
