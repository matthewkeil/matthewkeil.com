require("dotenv").config();

import CF, { Fn } from "cloudform";
import { handleStackCreateAndUpdate } from "./utils";
import { coreTemplate } from "../aws/core";
import { Certificate } from '../aws/certificateManager/Certificate';
import { CONFIG } from "../CONFIG";

/**
 *
 * handle cli input for deploy command
 *
 */
const processArgv = () => {
    const noCert = process.argv.find(arg => arg.includes('noCert') || arg.includes('nocert'))
    const deployCert = !!noCert ? false : true;
    return { deployCert };
};

/**
 *
 * IIFE for async and we're off!!
 *
 */
(async () => {
    const StackName = coreTemplate.Description;

    const { deployCert } = processArgv();

    if (deployCert) { // add certificate information
        (coreTemplate.Resources as any).Certificate = Certificate;
        (coreTemplate.Outputs as any).Certificate = {
            Description: `SSL Certificate covering *.${CONFIG.ROOT_DOMAIN}`,
            Value: Fn.Ref('Certificate'),
            Export: { Name: 'Certificate' }
        };
    }

    const TemplateBody = CF(coreTemplate);

    const params: AWS.CloudFormation.CreateStackInput = {
        StackName,
        TemplateBody,
        Capabilities: ["CAPABILITY_NAMED_IAM"]
    };

    await handleStackCreateAndUpdate(params);
})();
