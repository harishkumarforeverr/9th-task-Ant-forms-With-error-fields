import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const { Producer } = require('sqs-producer');

const producer = Producer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/479071208803/send-email.fifo',
  region: 'eu-west-1',
  accessKeyId: 'AKIAW7CW6QVRZZ3YG43Q',
  secretAccessKey: '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'
});

 const greetUser = async({ toEmail,groupId }) => {
    console.log("Hi there, user!",toEmail,groupId);
     await producer.send({
      id: uuidv4(),
      body: uuidv4(),
      messageAttributes: {
        toEmail: { DataType: 'String', StringValue: toEmail },
        providerName: { DataType: 'String', StringValue: 'Provide-Appollo Hospital' },
        role: { DataType: 'String', StringValue: 'Admin' },
        name: { DataType: 'String', StringValue: 'Bharath' },
        password: { DataType: 'String', StringValue: 'bharath123' },

      },
      groupId: groupId,// user ID
      deduplicationId: uuidv4(), // typically a hash of the message body
    });
    // get the current size of the queue
const size = await producer.queueSize();
console.log(`There are ${size} messages on the queue.`);
}

export default greetUser;