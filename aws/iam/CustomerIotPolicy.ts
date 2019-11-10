import { IoT, Fn } from 'cloudform';

export const CustomerIotPolicy = new IoT.Policy({
  PolicyName: 'passninja-customer-iot-policy',
  PolicyDocument: {
    Version: '2012-10-17',
    Statement: [
      // {
      //   Effect: 'Allow',
      //   Action: ['iot:Publish', 'iot:Receive'],
      //   Resource:
      //     'arn:aws:iot:*:448311138761:topic/${!cognito-identity.amazonaws.com:sub}'
      // },
      // {
      //   Effect: 'Allow',
      //   Action: 'iot:Subscribe',
      //   Resource:
      //     'arn:aws:iot:*:448311138761:topicfilter/${!cognito-identity.amazonaws.com:sub}'
      // },
      // {
      //   Effect: 'Allow',
      //   Action: 'iot:Connect',
      //   Resource:
      //     'arn:aws:iot:*:448311138761:client/${!iot:Connection.Thing.ThingName}'
      // }
      {
        Effect: 'Allow',
        Action: '*',
        Resource: '*'
      }
    ]
  }
});
