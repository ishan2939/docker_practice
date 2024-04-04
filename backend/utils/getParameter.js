import AWS from 'aws-sdk';

AWS.config.update({region: 'us-east-1'});

const ssm = new AWS.SSM();


export default async function getParameter(parameterName) {
    const params = {
        Name: 'arn:aws:ssm:us-east-1:654654485151:parameter/' + parameterName,
        WithDecryption: true,

    };

    try {
        const data = await ssm.getParameter(params).promise();
        return data.Parameter.Value;
    } catch (err) {
        console.error("Error fetching parameter:", err);
        throw err;
    }
}
