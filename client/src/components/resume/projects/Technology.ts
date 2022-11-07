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
    "TERRAFORM",
    "MATERIAL_UI",
    // "CSS_MODULES",
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
        url: string;
    }
>;

function getTechnologySrc(name: string) {
    return require(`../../../assets/resume/technologies/${name}`);
}

export const technologies: Technologies = {
    ETHEREUM: {
        name: "Ethereum",
        src: getTechnologySrc("ethereum.svg"),
        url: "https://ethereum.org"
    },
    IPFS: {
        name: "IPFS",
        src: getTechnologySrc("ipfs.svg"),
        url: "https://ipfs.tech"
    },
    POLYGON: {
        name: "Polygon",
        src: getTechnologySrc("polygon.svg"),
        url: "https://polygon.technology"
    },
    SOLIDITY: {
        name: "Solidity",
        src: getTechnologySrc("solidity.svg"),
        url: "https://docs.soliditylang.org"
    },
    HARDHAT: {
        name: "HardHat",
        src: getTechnologySrc("hardhat.png"),
        url: "https://hardhat.org"
    },
    ETHERSJS: {
        name: "Ethers",
        src: getTechnologySrc("ethersjs.png"),
        url: ""
    },
    SHELL: {
        name: "Shell",
        src: getTechnologySrc("shell.jpeg"),
        url: "https://www.gnu.org/software/bash/manual/bashref.html"
    },
    VPC: {
        name: "VPC",
        src: getTechnologySrc("vpc.jpeg"),
        url: "https://docs.aws.amazon.com/vpc"
    },
    SSO: {
        name: "SSO",
        src: getTechnologySrc("sso.jpeg"),
        url: "https://en.wikipedia.org/wiki/Single_sign-on"
    },
    TERRAFORM: {
        name: "Terraform",
        src: getTechnologySrc("terraform.svg"),
        url: "https://www.terraform.io"
    },
    CDK: {
        name: "aws-cdk",
        src: getTechnologySrc("cdk-logo-small.png"),
        url: "https://docs.aws.amazon.com/cdk/index.html"
    },
    JS: {
        name: "Java Script",
        src: getTechnologySrc("javascript.svg"),
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    TS: {
        name: "Type Script",
        src: getTechnologySrc("typescript.png"),
        url: "https://www.typescriptlang.org"
    },
    NODE: {
        name: "Node",
        src: getTechnologySrc("node.svg"),
        url: "https://nodejs.org"
    },
    CRYPTO: {
        name: "Crypto",
        src: getTechnologySrc("crypto.png"),
        url: "https://en.wikipedia.org/wiki/Cryptography"
    },
    AWS: {
        name: "AWS",
        src: getTechnologySrc("aws.svg"),
        url: "https://aws.amazon.com/"
    },
    CLOUDFORMATION: {
        name: "Cloud Formation",
        src: getTechnologySrc("cloudformation.svg"),
        url: "https://aws.amazon.com/cloudformation/"
    },
    ROUTE53: {
        name: "Route53",
        src: getTechnologySrc("route53.svg"),
        url: "https://aws.amazon.com/route53"
    },
    CLOUDFRONT: {
        name: "Cloud Front",
        src: getTechnologySrc("cloudfront.svg"),
        url: "https://aws.amazon.com/cloudfront"
    },
    S3: {
        name: "S3",
        src: getTechnologySrc("s3.svg"),
        url: "https://aws.amazon.com/s3"
    },
    DYNAMO_DB: {
        name: "Dynamo DB",
        src: getTechnologySrc("dynamo-db.svg"),
        url: "https://aws.amazon.com/dynamodb"
    },
    LAMBDA: {
        name: "Lambda",
        src: getTechnologySrc("lambda.png"),
        url: "https://aws.amazon.com/lambda"
    },
    API_GATEWAY: {
        name: "Api Gateway",
        src: getTechnologySrc("api-gateway.svg"),
        url: "https://aws.amazon.com/apigateway"
    },
    IOT: {
        name: "IoT",
        src: getTechnologySrc("iot.png"),
        url: "https://aws.amazon.com/iot"
    },
    CERT_MANAGER: {
        name: "Cert Manager",
        src: getTechnologySrc("cert-manager.png"),
        url: "https://aws.amazon.com/certificate-manager"
    },
    CODE_BUILD: {
        name: "Code Build",
        src: getTechnologySrc("code-build.png"),
        url: "https://aws.amazon.com/codebuild"
    },
    CODE_PIPELINE: {
        name: "Code Pipeline",
        src: getTechnologySrc("code-pipeline.png"),
        url: "https://aws.amazon.com/codepipeline"
    },
    COGNITO: {
        name: "Cognito",
        src: getTechnologySrc("cognito.svg"),
        url: "https://aws.amazon.com/cognito"
    },
    APPLE_WALLET: {
        name: "Apple Wallet",
        src: getTechnologySrc("apple-wallet.png"),
        url: "https://developer.apple.com/wallet"
    },
    G_PAY: {
        name: "Google Pay",
        src: getTechnologySrc("g-pay.svg"),
        url: "https://developers.google.com/pay/api"
    },
    NFC: {
        name: "NFC",
        src: getTechnologySrc("nfc.svg"),
        url: "https://nfc-forum.org/build/specifications"
    },
    MQTT: {
        name: "MQTT",
        src: getTechnologySrc("mqtt.png"),
        url: "https://mqtt.org/mqtt-specification/"
    },
    HTML: {
        name: "HTML",
        src: getTechnologySrc("html.svg"),
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    CSS: {
        name: "CSS",
        src: getTechnologySrc("css.svg"),
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    GCP: {
        name: "GCP",
        src: getTechnologySrc("gcp.png"),
        url: "https://cloud.google.com/docs"
    },
    WEBPACK: {
        name: "Webpack",
        src: getTechnologySrc("webpack.png"),
        url: "https://webpack.js.org"
    },
    STENCIL: {
        name: "Stencil",
        src: getTechnologySrc("stencil.png"),
        url: "https://stenciljs.com/docs/introduction"
    },
    ANGULAR: {
        name: "Angular",
        src: getTechnologySrc("angular.svg"),
        url: "https://angular.io/docs"
    },
    REACT: {
        name: "React",
        src: getTechnologySrc("react.svg"),
        url: "https://reactjs.org/docs"
    },
    REDUX: {
        name: "Redux",
        src: getTechnologySrc("redux.svg"),
        url: "https://redux.js.org"
    },
    MATERIAL_UI: {
        name: "material ui",
        src: getTechnologySrc("material-ui.png"),
        url: "https://mui.com"
    },
    // CSS_MODULES: {
    //     name: "CSS Modules",
    //     src: getTechnologySrc("css-modules.png"),
    //     url: ""
    // },
    MONGO_DB: {
        name: "MongoDB",
        src: getTechnologySrc("mongodb.jpg"),
        url: "https://www.mongodb.com/docs/"
    },
    JQUERY: {
        name: "jQuery",
        src: getTechnologySrc("jquery.png"),
        url: "https://api.jquery.com"
    },
    DOCKER: {
        name: "Docker",
        src: getTechnologySrc("docker.svg"),
        url: "https://docs.docker.com"
    },
    KUBERNETES: {
        name: "Kubernetes",
        src: getTechnologySrc("kubernetes.png"),
        url: "https://kubernetes.io"
    }
};
