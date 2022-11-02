const techEnums = [
    "JS",
    "TS",
    "NODE",
    "HTML",
    "CSS",
    "SOLIDITY",
    "IPFS",
    "ETHEREUM",
    "POLYGON",
    "HARDHAT",
    "ETHERSJS",
    "AWS",
    "GCP",
    "CRYPTO",
    "WEBPACK",
    "CLOUDFORMATION",
    "ROUTE53",
    "S3",
    "COGNITO",
    "DYNAMO_DB",
    "LAMBDA",
    "API_GATEWAY",
    "IOT",
    "MQTT",
    "CLOUDFRONT",
    "CERT_MANAGER",
    "CODE_BUILD",
    "CODE_PIPELINE",
    "APPLE_WALLET",
    "G_PAY",
    "NFC",
    "VPC",
    "SSO",
    "CDK",
    "STENCIL",
    "ANGULAR",
    "REACT",
    "REDUX",
    // "REDUX_FORM",
    "MATERIAL_UI",
    "CSS_MODULES",
    "MONGO_DB",
    "JQUERY",
    "DOCKER",
    "KUBERNETES",
    "SHELL"
] as const;

export type Technology = typeof techEnums[number];

type Technologies = Record<
    Technology,
    {
        name: string;
        src: any;
    }
>;

function getTechnologySrc(name: string) {
    return require(`../../../assets/resume/technologies/${name}`);
}

export const technologies: Technologies = {
    ETHEREUM: {
        name: "Ethereum",
        src: getTechnologySrc("ethereum.svg")
    },
    IPFS: {
        name: "IPFS",
        src: getTechnologySrc("ipfs.svg")
    },
    POLYGON: {
        name: "Polygon",
        src: getTechnologySrc("polygon.svg")
    },
    SOLIDITY: {
        name: "Solidity",
        src: getTechnologySrc("solidity.svg")
    },
    HARDHAT: {
        name: "HardHat",
        src: getTechnologySrc("hardhat.png")
    },
    ETHERSJS: {
        name: "Ethers",
        src: getTechnologySrc("ethersjs.png")
    },
    SHELL: {
        src: getTechnologySrc("shell.jpeg"),
        name: "Shell"
    },
    VPC: {
        src: getTechnologySrc("vpc.jpeg"),
        name: "VPC"
    },
    SSO: {
        src: getTechnologySrc("sso.jpeg"),
        name: "SSO"
    },
    CDK: {
        src: getTechnologySrc("cdk-logo-small.png"),
        name: "cdk"
    },
    JS: {
        src: getTechnologySrc("javascript.svg"),
        name: "Java Script"
    },
    TS: {
        src: getTechnologySrc("typescript.png"),
        name: "Type Script"
    },
    NODE: {
        src: getTechnologySrc("node.svg"),
        name: "Node"
    },
    CRYPTO: {
        src: getTechnologySrc("crypto.png"),
        name: "Crypto"
    },
    AWS: {
        src: getTechnologySrc("aws.svg"),
        name: "AWS"
    },
    CLOUDFORMATION: {
        src: getTechnologySrc("cloudformation.svg"),
        name: "CF"
    },
    ROUTE53: {
        src: getTechnologySrc("route53.svg"),
        name: "Route53"
    },
    CLOUDFRONT: {
        src: getTechnologySrc("cloudfront.svg"),
        name: "Cloud `Front"
    },
    S3: {
        src: getTechnologySrc("s3.svg"),
        name: "S3"
    },
    DYNAMO_DB: {
        src: getTechnologySrc("dynamo-db.svg"),
        name: "Dynamo DB"
    },
    LAMBDA: {
        src: getTechnologySrc("lambda.png"),
        name: "Lambda"
    },
    API_GATEWAY: {
        src: getTechnologySrc("api-gateway.svg"),
        name: "Api Gateway"
    },
    IOT: {
        src: getTechnologySrc("iot.png"),
        name: "IoT"
    },
    CERT_MANAGER: {
        src: getTechnologySrc("cert-manager.png"),
        name: "Cert Manager"
    },
    CODE_BUILD: {
        src: getTechnologySrc("code-build.png"),
        name: "Code Build"
    },
    CODE_PIPELINE: {
        src: getTechnologySrc("code-pipeline.png"),
        name: "Code Pipeline"
    },
    COGNITO: {
        src: getTechnologySrc("cognito.svg"),
        name: "Cognito"
    },
    APPLE_WALLET: {
        src: getTechnologySrc("apple-wallet.png"),
        name: "Apple Wallet"
    },
    G_PAY: {
        src: getTechnologySrc("g-pay.svg"),
        name: "Google Pay"
    },
    NFC: {
        src: getTechnologySrc("nfc.svg"),
        name: "NFC"
    },
    MQTT: {
        src: getTechnologySrc("mqtt.png"),
        name: "MQTT"
    },
    HTML: {
        src: getTechnologySrc("html.svg"),
        name: "HTML"
    },
    CSS: {
        src: getTechnologySrc("css.svg"),
        name: "CSS"
    },
    GCP: {
        src: getTechnologySrc("gcp.png"),
        name: "GCP"
    },
    WEBPACK: {
        src: getTechnologySrc("webpack.png"),
        name: "Webpack"
    },
    STENCIL: {
        src: getTechnologySrc("stencil.png"),
        name: "Stencil"
    },
    ANGULAR: {
        src: getTechnologySrc("angular.svg"),
        name: "Angular"
    },
    REACT: {
        src: getTechnologySrc("react.svg"),
        name: "React"
    },
    REDUX: {
        src: getTechnologySrc("redux.svg"),
        name: "Redux"
    },
    MATERIAL_UI: {
        src: getTechnologySrc("material-ui.png"),
        name: "material ui"
    },
    CSS_MODULES: {
        src: getTechnologySrc("css-modules.png"),
        name: "CSS Modules"
    },
    MONGO_DB: {
        src: getTechnologySrc("mongodb.jpg"),
        name: "MongoDB"
    },
    JQUERY: {
        src: getTechnologySrc("jquery.png"),
        name: "jQuery"
    },
    DOCKER: {
        src: getTechnologySrc("docker.svg"),
        name: "Docker"
    },
    KUBERNETES: {
        src: getTechnologySrc("kubernetes.png"),
        name: "Kubernetes"
    }
};